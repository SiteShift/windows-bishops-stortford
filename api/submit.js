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
    // req.body is already parsed JSON because Content-Type is application/json
    const {
      firstName = '',
      lastName = '',
      email = '',
      phone = '',
      service = '',
      message = '',
      formType = 'contact',
      source = 'website'
    } = req.body || {};

    console.log('Received data:', { firstName, lastName, email, phone, service, message, formType, source });

    // Sanitize inputs
    const cleanFirstName = sanitizeInput(firstName, 50);
    const cleanLastName = sanitizeInput(lastName, 50);
    const cleanEmail = sanitizeInput(email, 100);
    const cleanPhone = sanitizeInput(phone, 20);
    const cleanService = sanitizeInput(service, 100);
    const cleanMessage = sanitizeInput(message, 1000);
    const cleanFormType = sanitizeInput(formType, 20);

    // Validation
    const errors = [];
    
    if (cleanFormType === 'newsletter') {
      // Newsletter only needs email
      if (!cleanEmail) errors.push('Email is required');
      else if (!isValidEmail(cleanEmail)) errors.push('Please enter a valid email address');
    } else {
      // Contact forms need more fields
      if (!cleanFirstName) errors.push('First name is required');
      if (!cleanLastName) errors.push('Last name is required');
      if (!cleanEmail) errors.push('Email is required');
      else if (!isValidEmail(cleanEmail)) errors.push('Please enter a valid email address');
      if (!cleanPhone) errors.push('Phone number is required');
      else if (!isValidPhone(cleanPhone)) errors.push('Please enter a valid phone number');
      if (!cleanService) errors.push('Service selection is required');
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
    const name = cleanFormType === 'newsletter' ? 'Newsletter Subscriber' : `${cleanFirstName} ${cleanLastName}`;
    const pageUrl = req.headers.referer || 'Direct';

    // Build row data based on form type
    let rowData;
    
    if (cleanFormType === 'newsletter') {
      rowData = [
        timestamp,
        name,
        cleanEmail,
        '', // phone
        'Newsletter Signup', // service
        '', // message
        cleanFormType,
        pageUrl
      ];
    } else {
      rowData = [
        timestamp,
        name,
        cleanEmail,
        cleanPhone,
        cleanService,
        cleanMessage,
        cleanFormType,
        pageUrl
      ];
    }

    // Insert data into Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A2:H', // Assumes columns A-H for: Timestamp, Name, Email, Phone, Service, Message, Source, Page
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