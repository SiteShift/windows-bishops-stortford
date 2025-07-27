# 🚀 Production Ready Configuration

## ✅ Environment Variables Required

### Vercel Environment Variables Setup

Add **ONLY** these 2 environment variables in Vercel:

```
Key: PLACES_API_KEY
Value: your_places_api_key_here
Environment: All Environments
Description: Server-side Google Places API key for build-time business data fetching

Key: PUBLIC_GOOGLE_MAPS_API_KEY  
Value: your_google_maps_api_key_here
Environment: All Environments
Description: Client-side Google Maps API key for interactive map display
```

## ⚠️ Security Notes

1. **PLACES_API_KEY**: 
   - Server-side only (NO PUBLIC_ prefix)
   - Used during build time to fetch business listings
   - Never exposed to browsers
   - Should be IP-restricted to Vercel build servers

2. **PUBLIC_GOOGLE_MAPS_API_KEY**:
   - Client-side (PUBLIC_ prefix required)
   - Used for interactive Google Maps display
   - Visible to users but should be domain-restricted
   - Should be HTTP referrer-restricted to your domain

## 🗑️ Removed Unused Variables

The following variables were defined but never used in the codebase:
- ❌ `PUBLIC_CONTACT_FORM_ENDPOINT` (not implemented)
- ❌ `PUBLIC_GA4_MEASUREMENT_ID` (not implemented)

## 🔧 Google API Key Setup

### 1. Create Places API Key (Server-side)
```
API: Places API (Nearby Search + Place Details)
Restrictions: IP addresses (Vercel build servers)
Usage: Build-time business data fetching
```

### 2. Create Maps API Key (Client-side)
```
API: Maps JavaScript API
Restrictions: HTTP referrers (your domain)
Usage: Interactive map display
```

## ✅ Production Checklist

- [ ] **Environment Variables**: Add only the 2 required variables in Vercel
- [ ] **API Keys**: Set up proper restrictions on Google Cloud Console
- [ ] **Domain Restrictions**: Restrict Maps API key to your domain
- [ ] **IP Restrictions**: Restrict Places API key to Vercel IPs (optional)
- [ ] **Build Test**: Verify `npm run build` succeeds with your API keys
- [ ] **Deployment**: Deploy to Vercel with environment variables
- [ ] **Testing**: Confirm map loads and business listings display

## 🚦 Build Process

The production build process:
1. Loads `PLACES_API_KEY` from environment
2. Runs `scripts/fetch-businesses.js` to fetch business data
3. Saves data to `src/data/businesses.json`
4. Builds static Astro site with embedded business data
5. Deploys static files to Vercel

## 🎯 Final Result

- **Secure**: Only necessary variables exposed
- **Fast**: Business data pre-fetched at build time
- **SEO**: All business listings in static HTML
- **Interactive**: Google Maps loads client-side
- **Scalable**: No runtime API calls for business data 