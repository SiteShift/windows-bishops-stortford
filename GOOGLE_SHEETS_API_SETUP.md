# Google Sheets Integration Setup Guide (Apps Script Method)

This guide will help you set up Google Sheets integration using Google Apps Script - a secure method that doesn't require service account keys.

## Overview

All forms on the website will:
1. ✅ Log events in Vercel Analytics 
2. ✅ Redirect users to the thank you page
3. ✅ Send form data directly to Google Sheets via Apps Script

## Why Apps Script Instead of Service Account?

Your organization has security policies that prevent service account key creation. Apps Script is actually:
- ✅ **More Secure** - No private keys to manage
- ✅ **Simpler Setup** - No Google Cloud Console needed
- ✅ **Same Functionality** - Direct integration with Google Sheets
- ✅ **Organization Policy Compliant** - No blocked features

## Step 1: Create Google Apps Script

1. **Open your Google Sheet:** [Windows Bishops Stortford Leads](https://docs.google.com/spreadsheets/d/1baygaX3SoiEB_yy39TMWk8XZqBc-kbjDe_CsmYo4FO4/edit)

2. **Go to Extensions → Apps Script**

3. **Replace the default code with this:**

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Prepare the row data to match your headers
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
        message: 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'Google Apps Script is running',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Save the script** (Ctrl+S or Cmd+S)
   - Name it: `Website Form Handler`

## Step 2: Deploy the Apps Script

1. **Click "Deploy" → "New Deployment"**

2. **Choose settings:**
   - **Type:** Web app
   - **Description:** Website form submissions handler
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone

3. **Click "Deploy"**

4. **Authorize the script:**
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to Website Form Handler (unsafe)"
   - Click "Allow"

5. **Copy the Web App URL** - it looks like:
   `https://script.google.com/macros/s/AKfycbz.../exec`

## Step 3: Add Environment Variable to Vercel

1. **Go to your Vercel dashboard**
2. **Navigate to your project → Settings → Environment Variables**
3. **Add this variable:**

**Variable:**
- **Name:** `GOOGLE_APPS_SCRIPT_URL`
- **Value:** `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec` (the URL you copied)
- **Environments:** All (Production, Preview, Development)

## Step 4: Test the Integration

1. **Test the Apps Script directly:**
   - Visit the Web App URL in your browser
   - You should see: `{"status":"Google Apps Script is running","timestamp":"..."}`

2. **Redeploy your site:**
   - In Vercel: **Deployments** → **"Redeploy"**

3. **Submit a form:**
   - Visit your deployed website
   - Submit any form (contact, homepage, newsletter)
   - Check your Google Sheet - data should appear immediately!

## Your Current Setup

✅ **Google Sheet:** [Windows Bishops Stortford Leads](https://docs.google.com/spreadsheets/d/1baygaX3SoiEB_yy39TMWk8XZqBc-kbjDe_CsmYo4FO4/edit)
✅ **Headers:** Already configured correctly
✅ **Apps Script:** Ready to receive data
✅ **Organization Policy Compliant:** No service account keys needed

## Data Structure

Each form submission will create a new row with:

| Column | Data | Example |
|--------|------|---------|
| A | Timestamp | 2024-07-28T16:32:15.123Z |
| B | Name | John Smith |
| C | Email | john@example.com |
| D | Phone | +44 7476 382827 |
| E | Service | Double Glazing Installation |
| F | Message | Looking for quotes on 5 windows |
| G | Source | website-contact |
| H | Page | /contact |
| I | Form Type | contact |
| J | User Agent | Mozilla/5.0... |
| K | IP Address | 192.168.1.1 |

## Security Benefits of Apps Script

✅ **No Private Keys** - Runs under your Google account
✅ **Organization Policy Compliant** - No blocked features used
✅ **Google Security** - Protected by Google's infrastructure
✅ **Access Control** - Only you can modify the script
✅ **Audit Trail** - All executions logged in Apps Script

## Troubleshooting

### Forms not appearing in Google Sheets
1. Check the Apps Script URL is correct in Vercel
2. Test the Apps Script URL directly in browser
3. Check Apps Script execution logs: **Extensions → Apps Script → Executions**

### "Script not authorized" errors
1. Re-run the deployment process
2. Make sure you clicked "Allow" during authorization
3. Check that "Who has access" is set to "Anyone"

### Permission errors
1. Make sure you own the Google Sheet
2. Verify the Apps Script is attached to the correct sheet
3. Check that the script has permission to modify the sheet

## Advanced Features

### Email Notifications
Add this to your Apps Script to send email notifications:

```javascript
// Add this inside doPost function after sheet.appendRow(rowData);
MailApp.sendEmail({
  to: 'your-email@example.com',
  subject: 'New Website Lead: ' + data.name,
  body: `New lead received:\n\nName: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\nMessage: ${data.message}`
});
```

### Data Validation
Add validation in Apps Script:

```javascript
// Add this before sheet.appendRow(rowData);
if (!data.email || !data.name) {
  throw new Error('Required fields missing');
}
```

### Multiple Sheets
Route different form types to different sheets:

```javascript
let sheet;
if (data.formType === 'newsletter') {
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Newsletter');
} else {
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
}
```

## Monitoring

- **Apps Script Console:** Monitor executions and errors
- **Vercel Analytics:** Track form submission events  
- **Google Sheets:** View all submissions in real-time

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Apps Script execution logs
3. Test the Apps Script URL directly
4. Verify the Google Sheet permissions

This Apps Script approach is perfect for organizations with strict security policies! 🚀 