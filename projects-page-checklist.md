# Projects Page Implementation Checklist

## Overview
Create a comprehensive `/projects` showcase page for window installation projects using Google Imagen 4 API for photorealistic project imagery. This will demonstrate completed work and drive conversions through visual proof of quality.

## Phase 1: Data Structure & Content Planning ✅

### 1.1 Create Projects Data Schema
- [ ] Design `src/data/projects.json` structure
- [ ] Include 5 realistic project examples with:
  - `slug` (URL-friendly identifier)
  - `title` (project name)
  - `location` (Bishop's Stortford area)
  - `windowType` (casement, sash, tilt & turn, etc.)
  - `material` (uPVC, aluminium, timber)
  - `color` (anthracite grey, white, black, etc.)
  - `description` (detailed project story)
  - `beforeImage` (placeholder path)
  - `afterImage` (placeholder path)
  - `imagenPrompt` (optimized for Google Imagen 4)
  - `completionDate`
  - `propertyType` (Victorian terrace, modern detached, etc.)
  - `specifications` (technical details)
  - `customerTestimonial` (optional)

### 1.2 Imagen Prompt Strategy
Create photorealistic prompts following format:
*"Photorealistic exterior view of [property type] home in [location] with new [color] [material] [window type] windows, British architecture, natural daylight, high resolution, architectural photography style"*

Examples:
- Victorian terrace with white uPVC sash windows
- Modern detached house with anthracite grey aluminium casement windows
- Period cottage with timber casement windows
- 1930s semi-detached with black uPVC tilt & turn windows
- Contemporary home with grey aluminium flush casement windows

## Phase 2: API Integration Setup 🔄

### 2.1 Google Imagen 4 API Integration
- [ ] Create `src/utils/imagen-api.js` utility
- [ ] Implement API call function with key: `AIzaSyAkBK20V5FrnFnTpz8e67SEomQ_HU-FNPM`
- [ ] Handle image generation requests
- [ ] Implement error handling and fallbacks
- [ ] Add rate limiting considerations
- [ ] Create image storage/caching strategy

### 2.2 API Utility Functions
```javascript
// src/utils/imagen-api.js
export async function generateProjectImage(prompt, outputPath) {
  // API call to Gemini 2.0 Flash Preview with image generation
  // Save generated image to public/images/projects/
  // Return image path for use in components
}

export async function generateAllProjectImages(projects) {
  // Batch generate all project images
  // Handle rate limiting
  // Progress tracking
}
```

## Phase 3: Page Development 🎨

### 3.1 Main Projects Index Page (`/projects/index.astro`)
**Features:**
- [ ] Hero section with compelling headline
- [ ] Project grid layout (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Project cards with:
  - After image (hover effects)
  - Project title + location
  - Window type + material badges
  - Short description excerpt
  - "View Project" CTA button
- [ ] Filter/sort functionality (by material, type, location)
- [ ] Search functionality
- [ ] Pagination if needed (start with 5 projects)
- [ ] SEO optimization with schema markup

**Design Elements:**
- Clean, modern grid layout
- Hover animations on project cards
- Material design badges (uPVC, Aluminium, Timber)
- Location pins for Bishop's Stortford area
- Professional typography hierarchy

### 3.2 Individual Project Pages (`/projects/[slug].astro`)
**Features:**
- [ ] Dynamic routing with `getStaticPaths()`
- [ ] Hero section with after image
- [ ] Before/after comparison section
- [ ] Project specifications table
- [ ] Detailed description with storytelling
- [ ] Customer testimonial (if available)
- [ ] Technical specifications
- [ ] Related projects suggestions
- [ ] Contact CTA section
- [ ] Social sharing buttons

**Layout Structure:**
```
- Hero: Large after image + project title
- Overview: Quick specs + completion date
- Before/After: Side-by-side comparison
- Story: Detailed project description
- Specifications: Technical details table
- Testimonial: Customer feedback
- CTA: Get quote for similar project
- Related: Other projects showcase
```

## Phase 4: SEO & Performance Optimization 🚀

### 4.1 SEO Implementation
- [ ] Page-specific meta titles and descriptions
- [ ] Open Graph images (use after images)
- [ ] Schema markup for projects:
  - `LocalBusiness` schema
  - `ImageObject` schema for project images
  - `Review` schema for testimonials
- [ ] Breadcrumb navigation
- [ ] Internal linking to relevant service pages
- [ ] Alt text for all images with descriptive keywords

### 4.2 Performance Optimization
- [ ] Image optimization (WebP format, responsive sizes)
- [ ] Lazy loading for project images
- [ ] Critical CSS inlining
- [ ] Preload key resources
- [ ] Optimize Core Web Vitals (LCP, CLS, FID)

## Phase 5: Navigation Integration 🔗

### 5.1 Site Navigation Updates
- [ ] Add "Projects" to main navigation menu
- [ ] Add projects link to footer
- [ ] Update sitemap.astro to include projects
- [ ] Add projects section to homepage (featured projects)

### 5.2 Internal Linking Strategy
- [ ] Link from service pages to relevant projects
- [ ] Link from blog posts to related projects
- [ ] Cross-link between similar projects
- [ ] Link to contact page from project CTAs

## Phase 6: Content Creation Strategy 📝

### 6.1 Project Data Collection
**5 Initial Projects:**
1. **Victorian Terrace Sash Restoration** - Hertford
   - White uPVC sliding sash windows
   - Period property compliance
   - Energy efficiency improvement

2. **Modern Extension Casement Windows** - Bishop's Stortford
   - Anthracite grey aluminium casement
   - Large glazed areas
   - Contemporary design

3. **Heritage Cottage Timber Windows** - Much Hadham
   - Oak timber casement windows
   - Conservation area approved
   - Traditional craftsmanship

4. **Family Home Security Upgrade** - Sawbridgeworth
   - Black uPVC tilt & turn windows
   - Enhanced security features
   - Child safety considerations

5. **Luxury House Full Replacement** - Stansted Mountfitchet
   - Grey aluminium flush casement
   - Smart home integration
   - Premium specifications

### 6.2 Content Writing Guidelines
- [ ] Storytelling approach for each project
- [ ] Technical accuracy with accessible language
- [ ] Local area references for SEO
- [ ] Customer benefit focus
- [ ] Call-to-action optimization

## Phase 7: Testing & Quality Assurance 🧪

### 7.1 Functionality Testing
- [ ] All project links work correctly
- [ ] Dynamic routing functions properly
- [ ] Images load correctly on all devices
- [ ] Forms and CTAs function
- [ ] Search and filter features work

### 7.2 Performance Testing
- [ ] Page load speed optimization
- [ ] Mobile responsiveness testing
- [ ] Cross-browser compatibility
- [ ] Accessibility compliance (WCAG 2.1)
- [ ] SEO audit with tools

### 7.3 Content Review
- [ ] Proofread all project descriptions
- [ ] Verify technical specifications
- [ ] Check image quality and relevance
- [ ] Validate customer testimonials
- [ ] Review SEO elements

## Phase 8: Launch & Monitoring 📊

### 8.1 Pre-Launch Checklist
- [ ] All images generated and optimized
- [ ] Navigation updated across site
- [ ] XML sitemap includes new pages
- [ ] Analytics tracking implemented
- [ ] Error pages configured

### 8.2 Post-Launch Monitoring
- [ ] Monitor page performance metrics
- [ ] Track user engagement with projects
- [ ] Monitor conversion rates from projects
- [ ] Collect user feedback
- [ ] Plan future project additions

## Technical Implementation Priority

### Immediate (Phase 1-3):
1. Create projects.json with sample data
2. Build /projects/index.astro with grid layout
3. Build /projects/[slug].astro with dynamic routing
4. Implement basic styling with Tailwind CSS

### Short-term (Phase 4-5):
1. Add SEO optimization and schema markup
2. Integrate with site navigation
3. Optimize performance and images

### Medium-term (Phase 6-8):
1. Implement Google Imagen 4 API integration
2. Generate photorealistic project images
3. Add advanced features (search, filters)
4. Launch and monitor performance

## Success Metrics
- **SEO**: Rank for "window installation projects Bishop's Stortford"
- **Engagement**: High time-on-page for project details
- **Conversion**: Increased quote requests from projects page
- **Performance**: <2s page load time, 90+ Lighthouse score
- **User Experience**: Low bounce rate, high pages per session

## Risk Mitigation
- **API Limits**: Implement caching and fallback images
- **Image Quality**: Manual review process for generated images
- **Content Accuracy**: Verify all technical specifications
- **Performance**: Optimize images and implement lazy loading
- **SEO**: Ensure unique, valuable content for each project

---

This comprehensive approach ensures a professional, high-converting projects showcase that demonstrates expertise while driving new business through visual proof of quality workmanship.