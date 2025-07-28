export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    
    // Extract form data
    const firstName = data.get("firstName")?.toString() || "";
    const lastName = data.get("lastName")?.toString() || "";
    const name = firstName && lastName ? `${firstName} ${lastName}` : data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const service = data.get("service")?.toString() || "";
    const message = data.get("message")?.toString() || "";
    const formType = data.get("formType")?.toString() || "contact";
    const source = data.get("source")?.toString() || "website";
    
    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields: name and email are required",
        }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Prepare data for Google Apps Script
    const scriptData = {
      timestamp: new Date().toISOString(),
      name: name,
      email: email,
      phone: phone,
      service: service,
      message: message,
      source: source,
      page: request.headers.get('referer') || '',
      formType: formType,
      userAgent: request.headers.get('user-agent') || '',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || ''
    };

    // Send to Google Apps Script (server-to-server, no CORS)
    const GOOGLE_APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_-qUgh0q3at9RlzMvzjiLqBdvoRSg9ZQS4mHaqrlKeWzSY1lBIbPO_Fenza5Q7Jcn/exec";
    
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scriptData)
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with status: ${response.status}`);
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

  } catch (error) {
    console.error('Form submission error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}; 