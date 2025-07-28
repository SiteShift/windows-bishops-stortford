# Google Sheets API Form Implementation Plan

## Overview
Implement secure Google Sheets API integration for all website forms using service account authentication. This approach avoids CORS issues and keeps everything server-side on Vercel.

## Prerequisites ✅
- [x] Google Cloud Project created
- [x] Google Sheets API enabled
- [x] Service account created with JSON key
- [x] Target Google Sheet ready
- [x] Service account has been granted access to the sheet

## Implementation Steps

### Phase 1: Astro Configuration & Dependencies

#### 1.1 Update Astro Config for Server Mode
```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://windowsbishopsstortford.com',
  output: 'server', // ← enables API routes
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory'
  }
});
```

#### 1.2 Install Dependencies
```bash
npm install googleapis
```
(Already installed, but confirm it's in package.json)

#### 1.3 Environment Variables Setup
Update `.env.example`:
```env
# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account","project_id":"..."}
GOOGLE_SHEETS_ID=1baygaX3SoiEB_yy39TMWk8XZqBc-kbjDe_CsmYo4FO4
```

### Phase 2: API Route Implementation

#### 2.1 Create API Endpoint
File: `src/pages/api/submit.ts`

**Features:**
- Accept both FormData (browser forms) and JSON (fetch requests)
- Validate required fields and sanitize input
- Append data to Google Sheet
- Return proper success/error responses
- Include timestamp and source tracking

**Security measures:**
- Load credentials from environment variable (no filesystem reads)
- Input validation and length limits
- Sanitize data to prevent sheet injection
- Proper error handling without exposing internals

#### 2.2 Sheet Structure
Target sheet columns:
```
A: Timestamp
B: Name
C: Email  
D: Phone
E: Service
F: Message
G: Source (homepage/contact/newsletter)
H: Page URL
```

### Phase 3: Form Updates

#### 3.1 Update ContactForm Component
- Remove placeholder JavaScript
- Set `action="/api/submit"` or implement fetch to `/api/submit`
- Handle success/error responses
- Redirect to `/thank-you/` on success
- Keep existing validation and styling

#### 3.2 Update Contact Page Form
- Same changes as ContactForm
- Maintain existing design and testimonial carousel
- Keep Vercel Analytics tracking

#### 3.3 Update Newsletter Form
- Point to same `/api/submit` endpoint
- Add `formType: 'newsletter'` hidden field
- Simplified success handling

### Phase 4: Vercel Environment Setup

#### 4.1 Environment Variables in Vercel
```
GOOGLE_SERVICE_ACCOUNT_JSON = {paste entire JSON content}
GOOGLE_SHEETS_ID = 1baygaX3SoiEB_yy39TMWk8XZqBc-kbjDe_CsmYo4FO4
```

#### 4.2 Service Account Permissions
- **Recommended role**: `roles/sheets.editor` (not full Editor)
- **Sheet access**: Share specific sheet with service account email
- **Scope**: `https://www.googleapis.com/auth/spreadsheets`

### Phase 5: Testing & Deployment

#### 5.1 Local Testing
```bash
npm run build
npm run preview
```
Test form submission with network tab open

#### 5.2 Vercel Preview Testing
- Deploy to preview branch
- Test all forms (contact, homepage, newsletter)
- Verify data appears in Google Sheet
- Check `/thank-you/` redirects work
- Confirm no CORS errors in console

#### 5.3 Production Deployment
- Deploy to main branch
- Test live forms
- Monitor Vercel function logs
- Verify analytics tracking still works

## Security Checklist

- [ ] Service account JSON stored in Vercel environment variables (not in code)
- [ ] Service account has minimal required permissions
- [ ] Input validation prevents injection attacks
- [ ] Error messages don't expose internal details
- [ ] Rate limiting considered (Vercel has built-in protection)
- [ ] HTTPS only (handled by Vercel)

## Success Criteria

✅ **Form submission works without CORS errors**
✅ **Data appears in Google Sheet within 1 second**
✅ **User redirected to thank-you page on success**
✅ **Error handling shows user-friendly messages**
✅ **All existing styling and analytics preserved**
✅ **Works on all forms: contact, homepage, newsletter**

## Rollback Plan

If implementation fails:
1. Revert `astro.config.mjs` to static mode
2. Remove API route file
3. Restore placeholder form handling
4. Git reset to last working commit: `e4869e5`

## Post-Implementation

1. **Remove local JSON file** - delete service account key from local machine
2. **Monitor logs** - check Vercel function logs for any issues
3. **Test edge cases** - empty forms, long inputs, special characters
4. **Document for client** - provide sheet access instructions

## Files to Modify

1. `astro.config.mjs` - add server mode and Vercel adapter
2. `src/pages/api/submit.ts` - new API endpoint
3. `src/components/ContactForm.astro` - update form handling
4. `src/pages/contact.astro` - update form handling  
5. `src/pages/blog/index.astro` - update newsletter form
6. `.env.example` - add environment variable examples

## Notes

- **Why this approach**: Avoids CORS, keeps credentials secure, leverages Vercel's serverless functions
- **Alternative considered**: Google Apps Script (rejected due to CORS issues)
- **Fallback option**: Third-party form services like Formspree
- **Performance**: Serverless functions are fast, Google Sheets API is reliable
- **Maintenance**: Service account credentials don't expire like OAuth tokens

---

**Ready to implement**: All research complete, plan validated, prerequisites met. 