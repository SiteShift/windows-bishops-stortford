#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

console.log('🔗 Checking external links...\n');

// Extract external links from HTML files
function extractExternalLinks(htmlContent) {
  const links = [];
  const linkRegex = /href="(https?:\/\/[^"]+)"/g;
  let match;
  
  while ((match = linkRegex.exec(htmlContent)) !== null) {
    links.push(match[1]);
  }
  
  return [...new Set(links)]; // Remove duplicates
}

// Check if URL is accessible
function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    const client = urlObj.protocol === 'https:' ? https : http;
    
    const req = client.request({
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: 'HEAD',
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
      }
    }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 'ERROR',
        ok: false,
        error: err.message
      });
    });
    
    req.on('timeout', () => {
      resolve({
        url,
        status: 'TIMEOUT',
        ok: false,
        error: 'Request timeout'
      });
    });
    
    req.end();
  });
}

async function main() {
  try {
    // Find all HTML files
    const htmlFiles = fs.readdirSync('dist', { recursive: true })
      .filter(file => file.endsWith('.html'))
      .map(file => path.join('dist', file));
    
    // Extract all external links
    const allLinks = [];
    htmlFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const links = extractExternalLinks(content);
      allLinks.push(...links);
    });
    
    const uniqueLinks = [...new Set(allLinks)];
    
    if (uniqueLinks.length === 0) {
      console.log('✅ No external links found to check.');
      return;
    }
    
    console.log(`Found ${uniqueLinks.length} unique external links to check...\n`);
    
    // Check each link
    const results = await Promise.all(uniqueLinks.map(checkUrl));
    
    // Report results
    const working = results.filter(r => r.ok);
    const broken = results.filter(r => !r.ok);
    
    if (working.length > 0) {
      console.log(`✅ Working links (${working.length}):`);
      working.forEach(result => {
        console.log(`   ✓ ${result.url} (${result.status})`);
      });
      console.log();
    }
    
    if (broken.length > 0) {
      console.log(`❌ Broken links (${broken.length}):`);
      broken.forEach(result => {
        console.log(`   ✗ ${result.url} (${result.status}${result.error ? ': ' + result.error : ''})`);
      });
      console.log();
    }
    
    console.log(`📊 Summary: ${working.length} working, ${broken.length} broken`);
    
    if (broken.length > 0) {
      process.exit(1);
    }
    
  } catch (error) {
    console.error('Error checking links:', error);
    process.exit(1);
  }
}

main(); 