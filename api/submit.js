import { google } from 'googleapis';

// Helper function to sanitize input and prevent injection
function sanitizeInput(input, maxLength = 200) {
  if (!input) return '';
  return input
    .toString()
    .substring(0, maxLength)
    .replace(/[<>]/g, '') // Remove potential HTML/script tags
    .trim();
}

// Helper function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate phone (UK format)
function isValidPhone(phone) {
  const phoneRegex = /^[0-9\s\-\(\)\+]{10,15}$/;
  return phoneRegex.test(phone);
}

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  try {
    // Parse request body
    let formData = {};
    
    if (req.headers['content-type']?.includes('application/json')) {
      formData = req.body;
    } else {
      // Handle form data
      formData = req.body;
    }

    // Extract and validate required fields
    const firstName = sanitizeInput(formData.firstName || '', 50);
    const lastName = sanitizeInput(formData.lastName || '', 50);
    const email = sanitizeInput(formData.email || '', 100);
    const phone = sanitizeInput(formData.phone || '', 20);
    const service = sanitizeInput(formData.service || '', 100);
    const message = sanitizeInput(formData.message || '', 1000);
    const formType = sanitizeInput(formData.formType || 'contact', 20);
    const source = sanitizeInput(formData.source || 'website', 50);

    // Validation
    const errors = [];
    
    if (formType === 'newsletter') {
      // Newsletter only needs email
      if (!email) errors.push('Email is required');
      else if (!isValidEmail(email)) errors.push('Please enter a valid email address');
    } else {
      // Contact forms need more fields
      if (!firstName) errors.push('First name is required');
      if (!lastName) errors.push('Last name is required');
      if (!email) errors.push('Email is required');
      else if (!isValidEmail(email)) errors.push('Please enter a valid email address');
      if (!phone) errors.push('Phone number is required');
      else if (!isValidPhone(phone)) errors.push('Please enter a valid phone number');
      if (!service) errors.push('Service selection is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: errors.join(', ')
      });
    }

    // Load Google Sheets API credentials from environment
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!serviceAccountJson || !spreadsheetId) {
      console.error('Missing required environment variables');
      return res.status(500).json({
        success: false,
        error: 'Server configuration error'
      });
    }

    // Parse credentials
    const credentials = JSON.parse(serviceAccountJson);

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data for sheet insertion
    const timestamp = new Date().toISOString();
    const name = formType === 'newsletter' ? 'Newsletter Subscriber' : `${firstName} ${lastName}`;
    const pageUrl = req.headers.referer || 'Direct';

    // Build row data based on form type
    let rowData;
    
    if (formType === 'newsletter') {
      rowData = [
        timestamp,
        name,
        email,
        '', // phone
        'Newsletter Signup', // service
        '', // message
        formType,
        pageUrl
      ];
    } else {
      rowData = [
        timestamp,
        name,
        email,
        phone,
        service,
        message,
        formType,
        pageUrl
      ];
    }

    // Insert data into Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H', // Assumes columns A-H for: Timestamp, Name, Email, Phone, Service, Message, Source, Page
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      timestamp
    });

  } catch (error) {
    console.error('API Error:', error);

    // Don't expose internal error details to client
    return res.status(500).json({
      success: false,
      error: 'An error occurred while processing your request. Please try again.'
    });
  }
} 