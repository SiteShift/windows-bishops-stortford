import { google } from 'googleapis';
import type { APIRoute } from 'astro';

// Prerender disabled to ensure this runs as a serverless function
export const prerender = false;

// Helper function to sanitize input and prevent injection
function sanitizeInput(input: string, maxLength: number = 200): string {
  if (!input) return '';
  return input
    .toString()
    .substring(0, maxLength)
    .replace(/[<>]/g, '') // Remove potential HTML/script tags
    .trim();
}

// Helper function to validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate phone (UK format)
function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9\s\-\(\)\+]{10,15}$/;
  return phoneRegex.test(phone);
}

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body - handle both FormData and JSON
    let formData: Record<string, any> = {};
    
    const contentType = request.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      formData = await request.json();
    } else if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
      const data = await request.formData();
      for (const [key, value] of data.entries()) {
        formData[key] = value;
      }
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Unsupported content type' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
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
    const errors: string[] = [];
    
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
      return new Response(JSON.stringify({ 
        success: false, 
        error: errors.join(', ') 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Load Google Sheets API credentials from environment
    const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!serviceAccountJson || !spreadsheetId) {
      console.error('Missing required environment variables');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Server configuration error' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
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
    const pageUrl = request.headers.get('referer') || 'Direct';

    // Build row data based on form type
    let rowData: (string | number)[];
    
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
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Form submitted successfully',
      timestamp 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API Error:', error);
    
    // Don't expose internal error details to client
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'An error occurred while processing your request. Please try again.' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}; 