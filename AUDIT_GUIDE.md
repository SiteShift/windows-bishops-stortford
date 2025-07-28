# Website Audit Guide for Cursor

This guide shows you how to audit your website for broken links, errors, performance issues, and more within Cursor.

## 🚀 Quick Start

### 1. **Comprehensive Audit** (Recommended)
```bash
npm run audit
```
This runs a complete audit checking:
- ✅ Build success
- 🖼️ Missing images
- 🔗 Broken internal links
- 📄 HTML validation
- 🎯 SEO essentials (titles, meta descriptions, h1 tags, alt text)
- ⚡ Bundle size analysis

### 2. **Quick Build + Link Check**
```bash
npm run audit:quick
```
Fast check for build errors and external link validation.

### 3. **External Links Only**
```bash
npm run audit:links
```
Checks all external links (https/http) for accessibility.

### 4. **HTML Validation Only**
```bash
npm run audit:html
```
Validates HTML syntax and structure.

### 5. **Performance Audit with Lighthouse**
```bash
npm run audit:lighthouse
```
Generates a full Lighthouse report (`lighthouse-report.html`).

## 📊 Understanding Audit Results

### ✅ **Green (Good)**
- All checks passed
- No action needed

### ⚠️ **Yellow (Warnings)**
- Non-critical issues
- Should be fixed for best practices
- Won't break functionality

### ❌ **Red (Errors)**
- Critical issues that need immediate attention
- May affect user experience or SEO
- Should be fixed before deployment

## 🔧 Common Issues & Fixes

### **Broken Internal Links**
**Problem:** Links like `/#businesses` or `/privacy` don't resolve
**Fix:** 
- Create missing pages
- Update links to existing pages
- Add proper anchor elements for hash links

### **Missing Images**
**Problem:** HTML references images that don't exist
**Fix:**
- Add missing images to `public/images/`
- Update image paths in HTML/components
- Remove references to deleted images

### **SEO Issues**
**Problem:** Missing titles, meta descriptions, h1 tags
**Fix:**
- Add `<title>` tags to all pages
- Include meta descriptions
- Ensure each page has exactly one `<h1>`
- Add `alt` attributes to all images

### **HTML Validation Errors**
**Problem:** Invalid HTML syntax
**Fix:**
- Use lowercase for attributes and tags
- Escape special characters (`>` becomes `&gt;`)
- Ensure proper tag nesting
- Fix duplicate IDs

## 🎯 Best Practices

### **Before Each Deployment**
1. Run `npm run audit` 
2. Fix all red errors
3. Address yellow warnings when possible
4. Test on multiple devices

### **Weekly Maintenance**
1. Run `npm run audit:links` to check external links
2. Run `npm run audit:lighthouse` for performance insights
3. Monitor bundle size growth

### **SEO Optimization**
1. Every page needs unique title and meta description
2. Use semantic HTML structure (h1 → h2 → h3)
3. Add alt text to all images
4. Ensure internal linking structure

## 🛠️ Advanced Usage

### **Custom Audits in Cursor**

You can also run individual checks:

```bash
# Check specific file types
find dist -name "*.html" | head -5 | xargs htmlhint

# Check bundle size
du -sh dist/*

# Find large files
find dist -type f -size +500k -exec ls -lh {} \;

# Check for broken images
grep -r "src=" dist/ | grep -E "\.(jpg|png|webp|svg)" | head -10
```

### **Continuous Integration**

Add to your CI/CD pipeline:
```yaml
- name: Audit Website
  run: npm run audit
```

## 📈 Performance Tips

### **Lighthouse Scores to Target:**
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 95+

### **Common Performance Fixes:**
- Optimize images (WebP format, proper sizing)
- Minimize CSS/JS bundles
- Use proper caching headers
- Implement lazy loading for images
- Remove unused dependencies

## 🔍 Manual Testing Checklist

After automated audits, manually test:

- [ ] Navigation works on all pages
- [ ] Forms submit correctly
- [ ] Mobile responsiveness
- [ ] Page load speed feels fast
- [ ] All images display properly
- [ ] Contact information is correct
- [ ] Social media links work
- [ ] Search functionality (if applicable)

## 🚨 Critical Issues to Fix Immediately

1. **Build Failures** - Site won't deploy
2. **404 Errors** - Broken user experience
3. **Missing Contact Info** - Lost business opportunities
4. **Broken Forms** - Can't receive leads
5. **Mobile Issues** - 60%+ of traffic is mobile
6. **Missing Meta Tags** - Poor SEO performance

## 📝 Audit Log Template

Keep track of your audits:

```
Date: [DATE]
Audit Type: [Full/Quick/Links/Performance]
Issues Found: [COUNT]
Critical: [LIST]
Fixed: [LIST]
Remaining: [LIST]
Next Audit: [DATE]
```

---

## 🎉 Pro Tips

- Run audits in Cursor's integrated terminal for best experience
- Set up audit reminders in your calendar
- Keep a log of recurring issues to identify patterns
- Use audit results to prioritize development tasks
- Share audit reports with your team for transparency

Happy auditing! 🚀 