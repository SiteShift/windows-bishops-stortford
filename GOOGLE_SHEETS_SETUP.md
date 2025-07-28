# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets to automatically receive form submissions from your website.

## Overview

All forms on the website (contact form, homepage form, newsletter signup) will:
1. ✅ Log events in Vercel Analytics 
2. ✅ Redirect users to the thank you page
3. ✅ Send form data to Google Sheets for tracking

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Website Form Submissions"
4. Set up columns in Row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Service`
   - F1: `Message`
   - G1: `Source`
   - H1: `Page`
   - I1: `Form Type`
   - J1: `User Agent`
   - K1: `IP Address`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete the default code and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.service || '',
      data.message || '',
      data.source || '',
      data.page || '',
      data.formType || '',
      data.userAgent || '',
      data.ip || ''
    ];
    
    // Append the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    console.error('Error processing form submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error saving data: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('Google Sheets webhook is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project "Website Form Handler"

## Step 3: Deploy the Script

1. Click the "Deploy" button (top right)
2. Choose "New deployment"
3. Settings:
   - **Type**: Web app
   - **Description**: "Website form submissions handler"
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for your environment variables

## Step 4: Update Environment Variables

1. In your project, update your `.env` file:
```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

2. In Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `GOOGLE_SHEETS_WEBHOOK_URL` with your webhook URL
   - Redeploy your application

## Step 5: Test the Integration

1. Deploy your website
2. Submit a test form
3. Check your Google Sheet - you should see the submission appear
4. Check Vercel Analytics for the tracked events

## Form Types Tracked

| Form Type | Source | Events Tracked |
|-----------|--------|----------------|
| Contact Page | `website-contact` | Contact Form Submission, Contact Form Success/Error |
| Homepage Form | `website-homepage` | Homepage Form Submission, Homepage Form Success/Error |
| Newsletter | `blog-newsletter` | Newsletter Signup, Newsletter Signup Success/Error |

## Vercel Analytics Events

All forms track these events:
- **Form Start**: When user begins interacting
- **Form Submission**: When form is submitted
- **Form Success**: When submission succeeds
- **Form Error**: When submission fails

## Troubleshooting

### Forms not appearing in Google Sheets
1. Check the Google Apps Script logs (View > Logs)
2. Verify the webhook URL in environment variables
3. Ensure the Google Sheet has the correct column headers
4. Test the webhook URL directly in browser (should show "webhook is working")

### Vercel Analytics not tracking
1. Ensure Vercel Analytics is enabled in your project
2. Check browser console for JavaScript errors
3. Verify the `window.va` object exists (Analytics integration)

### Form submissions not redirecting
1. Check browser console for JavaScript errors
2. Verify the `/thank-you/` page exists
3. Check network tab for API call failures

## Data Privacy

- IP addresses are collected for spam prevention
- User agents help identify bot traffic
- Consider adding a privacy notice about data collection
- Regularly clean up old form submissions

## Advanced Features

### Email Notifications
Add to your Google Apps Script to send email notifications:

```javascript
function sendEmailNotification(data) {
  const subject = `New ${data.formType} submission from ${data.name}`;
  const body = `
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Service: ${data.service}
    Message: ${data.message}
    Source: ${data.source}
    Page: ${data.page}
  `;
  
  MailApp.sendEmail('your-email@domain.com', subject, body);
}
```

### Slack Integration
Send notifications to Slack by adding a webhook call to your script.

### CRM Integration
Modify the API endpoint to also send data to your CRM system.

## Security Notes

- The Google Apps Script webhook URL is public but only accepts POST requests
- Honeypot fields help prevent spam submissions
- Consider adding rate limiting for production use
- IP addresses can help identify and block spam sources

## Support

If you encounter issues:
1. Check the browser console for JavaScript errors
2. Verify all environment variables are set correctly
3. Test the Google Apps Script webhook directly
4. Check Vercel deployment logs for server-side errors 