#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Website Audit...\n');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// 1. Build the site first
log('📦 Building the site...', 'blue');
try {
  execSync('npm run build', { stdio: 'inherit' });
  log('✅ Build completed successfully\n', 'green');
} catch (error) {
  log('❌ Build failed! Please fix build errors first.', 'red');
  process.exit(1);
}

// 2. Check for common file issues
log('📁 Checking file structure...', 'blue');
const issues = [];

// Check for missing images
const imageReferences = [];
const htmlFiles = execSync('find dist -name "*.html"', { encoding: 'utf8' }).trim().split('\n');

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const imgMatches = content.match(/src="([^"]*\.(jpg|jpeg|png|webp|svg|gif))"/g);
    if (imgMatches) {
      imgMatches.forEach(match => {
        const src = match.match(/src="([^"]*)"/)[1];
        if (src.startsWith('/')) {
          imageReferences.push(src);
        }
      });
    }
  }
});

// Check if referenced images exist
const missingImages = [];
[...new Set(imageReferences)].forEach(imgPath => {
  const fullPath = path.join('dist', imgPath);
  if (!fs.existsSync(fullPath)) {
    missingImages.push(imgPath);
  }
});

if (missingImages.length > 0) {
  log('❌ Missing Images Found:', 'red');
  missingImages.forEach(img => log(`   - ${img}`, 'red'));
  issues.push(`${missingImages.length} missing images`);
} else {
  log('✅ All referenced images found', 'green');
}

// 3. HTML Validation
log('\n🔍 Running HTML validation...', 'blue');
try {
  execSync('npx htmlhint dist/**/*.html --config .htmlhintrc', { stdio: 'inherit' });
  log('✅ HTML validation passed', 'green');
} catch (error) {
  log('⚠️  HTML validation found issues (see above)', 'yellow');
  issues.push('HTML validation warnings');
}

// 4. Check internal links
log('\n🔗 Checking internal links...', 'blue');
const internalLinks = [];
htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const linkMatches = content.match(/href="([^"]*)"(?!\s*rel="external")/g);
    if (linkMatches) {
      linkMatches.forEach(match => {
        const href = match.match(/href="([^"]*)"/)[1];
        if (href.startsWith('/') && !href.startsWith('//') && !href.includes('mailto:') && !href.includes('tel:')) {
          internalLinks.push(href);
        }
      });
    }
  }
});

// Check if internal links resolve to files
const brokenInternalLinks = [];
[...new Set(internalLinks)].forEach(link => {
  let checkPath = link.replace(/\/$/, ''); // Remove trailing slash
  if (checkPath === '') checkPath = '/index'; // Root path
  
  const possiblePaths = [
    path.join('dist', checkPath + '.html'),
    path.join('dist', checkPath, 'index.html'),
    path.join('dist', checkPath)
  ];
  
  const exists = possiblePaths.some(p => fs.existsSync(p));
  if (!exists && !link.startsWith('#')) {
    brokenInternalLinks.push(link);
  }
});

if (brokenInternalLinks.length > 0) {
  log('❌ Broken Internal Links Found:', 'red');
  brokenInternalLinks.forEach(link => log(`   - ${link}`, 'red'));
  issues.push(`${brokenInternalLinks.length} broken internal links`);
} else {
  log('✅ All internal links are valid', 'green');
}

// 5. Check for SEO essentials
log('\n🎯 Checking SEO essentials...', 'blue');
const seoIssues = [];

htmlFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const fileName = path.basename(file);
    
    // Check for title tag
    if (!content.includes('<title>') || content.match(/<title>\s*<\/title>/)) {
      seoIssues.push(`${fileName}: Missing or empty title tag`);
    }
    
    // Check for meta description
    if (!content.includes('<meta name="description"') || content.match(/content=""\s*>/)) {
      seoIssues.push(`${fileName}: Missing or empty meta description`);
    }
    
    // Check for h1 tag
    if (!content.includes('<h1>')) {
      seoIssues.push(`${fileName}: Missing h1 tag`);
    }
    
    // Check for alt attributes on images
    const imgWithoutAlt = content.match(/<img(?![^>]*alt=)[^>]*>/g);
    if (imgWithoutAlt) {
      seoIssues.push(`${fileName}: ${imgWithoutAlt.length} images missing alt attributes`);
    }
  }
});

if (seoIssues.length > 0) {
  log('⚠️  SEO Issues Found:', 'yellow');
  seoIssues.forEach(issue => log(`   - ${issue}`, 'yellow'));
  issues.push(`${seoIssues.length} SEO issues`);
} else {
  log('✅ SEO essentials look good', 'green');
}

// 6. Performance check with built-in tools
log('\n⚡ Checking bundle sizes...', 'blue');
try {
  const distSize = execSync('du -sh dist', { encoding: 'utf8' }).trim();
  log(`📦 Total build size: ${distSize.split('\t')[0]}`, 'blue');
  
  // Check for large files
  const largeFiles = execSync('find dist -type f -size +1M', { encoding: 'utf8' }).trim();
  if (largeFiles) {
    log('⚠️  Large files found (>1MB):', 'yellow');
    largeFiles.split('\n').forEach(file => {
      const size = execSync(`du -sh "${file}"`, { encoding: 'utf8' }).split('\t')[0];
      log(`   - ${file.replace('dist/', '')}: ${size}`, 'yellow');
    });
  } else {
    log('✅ No files larger than 1MB found', 'green');
  }
} catch (error) {
  log('⚠️  Could not check file sizes', 'yellow');
}

// Final summary
log('\n' + '='.repeat(50), 'blue');
log('📊 AUDIT SUMMARY', 'bold');
log('='.repeat(50), 'blue');

if (issues.length === 0) {
  log('🎉 Congratulations! No major issues found.', 'green');
  log('Your website appears to be in excellent condition!', 'green');
} else {
  log('⚠️  Issues found:', 'yellow');
  issues.forEach(issue => log(`   • ${issue}`, 'yellow'));
  log('\nPlease review and fix the issues above.', 'yellow');
}

log('\n💡 Additional recommendations:', 'blue');
log('   • Run Lighthouse audit for performance insights', 'blue');
log('   • Test on multiple devices and browsers', 'blue');
log('   • Check external links manually', 'blue');
log('   • Validate forms and interactive elements', 'blue');
log('   • Test with screen readers for accessibility', 'blue');

log('\n✅ Audit completed!', 'green'); 