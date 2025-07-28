import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Add server-side timestamp
    data.serverTimestamp = new Date().toISOString();
    data.userAgent = request.headers.get('user-agent') || '';
    data.ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
    
    // Google Sheets integration via Apps Script
    const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL;
    
    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        const sheetsResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            timestamp: data.serverTimestamp,
            name: data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
            email: data.email || '',
            phone: data.phone || '',
            service: data.service || '',
            message: data.message || '',
            source: data.source || 'website',
            page: data.page || '',
            userAgent: data.userAgent,
            ip: data.ip,
            formType: data.formType || 'contact'
          })
        });
        
        if (!sheetsResponse.ok) {
          console.error('Failed to send to Google Sheets:', sheetsResponse.statusText);
        } else {
          console.log('Successfully sent data to Google Sheets via Apps Script');
        }
      } catch (sheetsError) {
        console.error('Google Sheets integration error:', sheetsError);
        // Don't fail the whole request if sheets integration fails
      }
    } else {
      console.warn('Google Apps Script URL not configured');
    }
    
    // You can add other integrations here (email notifications, CRM, etc.)
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Form submitted successfully',
      timestamp: data.serverTimestamp
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Failed to submit form',
      error: error instanceof Error ? error.message : 'Unknown error'
    }), {
    status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}; 