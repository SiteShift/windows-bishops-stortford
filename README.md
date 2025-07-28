# Windows Bishop's Stortford Website

A high-performance, SEO-optimized static website for window installation and repair services in Bishop's Stortford, built with Astro and Tailwind CSS.

## 🎯 Project Overview

Professional website designed to rank #1 for "windows bishops stortford" and capture qualified leads through optimized user experience and technical excellence.

### Success Metrics Target
- Lighthouse SEO ≥ 90
- Core Web Vitals (LCP, FID, CLS) ≥ 90
- Form conversion rate ≥ 5%
- XML sitemap indexed in Google Search Console

## 🏗️ Architecture

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS 4.x
- **Content**: Centralized JSON data structure
- **Maps**: Google Maps with client-side loading
- **SEO**: Schema.org markup, optimized meta tags
- **Forms**: Enhanced validation with webhook integration

## 📁 Project Structure

```
src/
├── components/
│   ├── ContactForm.astro    # Lead capture form with validation
│   └── GoogleMap.astro      # Interactive map component
├── data/
│   └── siteData.json       # Central content management
├── layouts/
│   └── Layout.astro        # Main page layout with SEO
├── pages/
│   ├── index.astro         # Homepage
│   └── thank-you.astro     # Form confirmation page
└── styles/
    └── global.css          # Tailwind imports

public/
├── images/                 # Static assets
├── robots.txt             # Search engine directives
└── favicon.svg           # Site favicon
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd windowsbishopsstortford-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
1. Copy `env.example` to `.env`
2. Configure required environment variables:
   ```bash
   PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   PUBLIC_CONTACT_FORM_ENDPOINT=https://api.windowsbishopsstortford.com/contact
   PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

## 📋 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run astro      # Run Astro CLI commands
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Deploy to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel --prod
   ```

2. **Configure Environment Variables:**
   - Add environment variables in Vercel dashboard
   - Set up custom domain: `windowsbishopsstortford.com`

3. **Domain Configuration:**
   - Configure A/CNAME records to point to Vercel
   - SSL certificates are automatically provisioned

### Alternative Hosting
The site builds to static files in `/dist` and can be hosted on:
- Netlify
- GitHub Pages  
- AWS S3 + CloudFront
- Any static hosting provider

## 🔧 Configuration

### Content Management
All site content is managed through `src/data/siteData.json`:

```json
{
  "site": {
    "domain": "windowsbishopsstortford.com",
    "title": "Windows in Bishop's Stortford | Free Local Quotes",
    "description": "Top-rated window installers serving Bishop's Stortford..."
  },
  "business": {
    "name": "Windows Bishop's Stortford",
    "telephone": "01279 123456",
    "email": "info@windowsbishopsstortford.com"
  }
  // ... additional configuration
}
```

### SEO Features
- ✅ Semantic HTML structure
- ✅ Schema.org LocalBusiness markup
- ✅ Open Graph and Twitter Card meta tags
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Performance optimizations (preloading, deferring)

### Form Integration
Contact forms integrate with webhook endpoints for CRM/email integration:
- Real-time validation
- Spam protection (honeypot)
- Loading states and error handling
- Analytics event tracking

## 📊 Performance Optimizations

### Core Web Vitals
- **LCP**: Hero images preloaded, critical CSS inlined
- **FID**: Minimal JavaScript, only Google Maps hydrated
- **CLS**: Reserved space for dynamic content

### SEO Optimizations
- Clean URLs (no .html extensions)
- Optimized meta descriptions and titles
- Structured data markup
- Image alt text and lazy loading
- Fast loading times

## 🧪 Testing

### Lighthouse Audits
```bash
# Run Lighthouse CI (if configured)
npm run lighthouse

# Or use Chrome DevTools for manual audits
```

### Schema Validation
Test schema markup with [Google Rich Results Test](https://search.google.com/test/rich-results)

### Form Testing
Verify form submissions reach configured webhook endpoint and redirect to thank-you page.

## 📈 Analytics Setup

### Google Analytics 4
1. Add GA4 Measurement ID to environment variables
2. Events tracked:
   - Page views
   - Form submissions
   - Form interactions
   - Error events

### Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://windowsbishopsstortford.com/sitemap-index.xml`
3. Monitor crawl errors and search performance

## 🛠️ Development Guidelines

### Content Updates
1. Edit `src/data/siteData.json` for content changes
2. Test locally with `npm run dev`
3. Deploy changes through Git push to main branch

### Component Development
- Follow Astro component conventions
- Use TypeScript for props interfaces
- Implement responsive design with Tailwind
- Test across devices and browsers

### SEO Considerations
- Maintain single H1 per page
- Use semantic heading hierarchy (H2, H3, etc.)
- Include relevant keywords naturally
- Optimize images with appropriate alt text

## 🔍 Troubleshooting

### Build Issues
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Astro cache
rm -rf .astro
npm run build
```

### Google Maps Not Loading
- Verify API key is set correctly
- Check API key permissions for Maps JavaScript API
- Ensure billing is enabled for Google Cloud project

### Form Submissions Not Working
- Test webhook endpoint with manual POST request
- Verify CORS configuration allows requests from domain
- Check browser network tab for error responses

## 📞 Support

For technical issues or questions about this website:
- Email: technical@windowsbishopsstortford.com  
- Phone: 01279 123456

## 📄 License

This project is proprietary software for Windows Bishop's Stortford.

---

**Built with ❤️ using Astro and modern web technologies**


