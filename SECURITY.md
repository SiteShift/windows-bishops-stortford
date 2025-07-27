# Security Guidelines

## API Key Management

### Environment Variables

This project uses two different Google API keys for security:

#### 1. PLACES_API_KEY (Server-side only)
- **Purpose**: Fetches business data during build time
- **Visibility**: Server-side only, never exposed to browsers
- **Security**: Should be IP-restricted to your deployment platform
- **APIs Required**: Places API (Nearby Search, Place Details)

#### 2. PUBLIC_GOOGLE_MAPS_API_KEY (Client-side)
- **Purpose**: Displays interactive Google Maps
- **Visibility**: Visible to users but domain-restricted
- **Security**: Should be HTTP referrer-restricted to your domain
- **APIs Required**: Maps JavaScript API only

### Vercel Deployment Security

When deploying to Vercel:

1. **NEVER** add `PUBLIC_` prefix to `PLACES_API_KEY`
2. Use separate API keys for server vs client operations
3. Restrict API keys appropriately:
   - Server key: IP restrictions
   - Client key: HTTP referrer restrictions

### API Key Restrictions

#### Server-side Key (PLACES_API_KEY)
```
Restriction Type: IP addresses
Allowed IPs: Add Vercel's build server IPs
APIs: Places API only
```

#### Client-side Key (PUBLIC_GOOGLE_MAPS_API_KEY)
```
Restriction Type: HTTP referrers
Allowed referrers: yourdomain.com/*
APIs: Maps JavaScript API only
```

## Best Practices

1. **Separate Keys**: Use different keys for different purposes
2. **Least Privilege**: Only enable required APIs for each key
3. **Domain Restrictions**: Always restrict client-side keys to your domain
4. **Monitor Usage**: Set up billing alerts and usage quotas
5. **Regular Rotation**: Rotate keys periodically

## Environment Setup

### Local Development (.env)
```
PLACES_API_KEY=your_server_side_key_here
PUBLIC_GOOGLE_MAPS_API_KEY=your_client_side_key_here
```

### Vercel Production
Add the same variables in Vercel Dashboard > Settings > Environment Variables 