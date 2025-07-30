#!/usr/bin/env node

/**
 * Generate all project images using Google Imagen 4 API
 * 
 * This script generates high-quality, photorealistic before and after images
 * for all projects in the projects.json file using consistent prompts.
 */

import { generateAllProjectImages, testImagenConnection } from '../src/utils/imagen-api.js';
import fs from 'fs/promises';
import path from 'path';

// Load projects data
const projectsData = JSON.parse(
  await fs.readFile('src/data/projects.json', 'utf8')
);

async function main() {
  console.log('🚀 Starting Project Image Generation');
  console.log('=====================================');
  console.log(`📊 Found ${projectsData.length} projects to process`);
  console.log('');

  // Test API connection first
  console.log('🔍 Testing API connection...');
  const isConnected = await testImagenConnection();
  
  if (!isConnected) {
    console.error('❌ Failed to connect to Google Imagen API');
    console.error('   Please check your API key and internet connection');
    process.exit(1);
  }
  
  console.log('✅ API connection successful');
  console.log('');

  // Show project overview
  console.log('📋 Projects to process:');
  projectsData.forEach((project, index) => {
    console.log(`   ${index + 1}. ${project.title} (${project.location.split(',')[0]})`);
  });
  console.log('');

  // Generate images with optimized settings
  console.log('🎨 Starting image generation...');
  console.log('⚙️  Settings: Batch size 1, 10s delay between projects');
  console.log('🔧 Optimization: WebP format, 85% quality, max 1200x900px');
  console.log('');

  try {
    const updatedProjects = await generateAllProjectImages(projectsData, {
      batchSize: 1, // Process one at a time for better quality control
      delayBetweenBatches: 10000, // 10 second delay between projects
      skipExisting: false // Generate fresh images
    });

    // Update the projects.json file with new image paths
    console.log('💾 Updating projects.json with new image paths...');
    
    const updatedProjectsJson = JSON.stringify(updatedProjects, null, 2);
    await fs.writeFile('src/data/projects.json', updatedProjectsJson, 'utf8');
    
    console.log('✅ Successfully updated projects.json');
    console.log('');

    // Generate summary report
    console.log('📊 Generation Summary:');
    console.log('=====================');
    
    let successCount = 0;
    let failureCount = 0;
    
    for (const project of updatedProjects) {
      const beforeExists = project.beforeImage.startsWith('/images/projects/');
      const afterExists = project.afterImage.startsWith('/images/projects/');
      
      if (beforeExists && afterExists) {
        successCount++;
        console.log(`✅ ${project.title}: Both images generated`);
      } else {
        failureCount++;
        console.log(`❌ ${project.title}: Using placeholder images`);
      }
    }
    
    console.log('');
    console.log(`🎯 Results: ${successCount} successful, ${failureCount} fallbacks`);
    console.log(`📁 Images saved to: public/images/projects/`);
    console.log('');

    if (successCount > 0) {
      console.log('🚀 Image generation completed successfully!');
      console.log('   Your projects now have photorealistic before/after images');
      console.log('   Run "npm run build" to rebuild the site with new images');
    } else {
      console.log('⚠️  No images were generated - check API key and connection');
    }

  } catch (error) {
    console.error('❌ Fatal error during image generation:');
    console.error(error.message);
    console.error('');
    console.error('💡 Troubleshooting tips:');
    console.error('   1. Check your API key is valid');
    console.error('   2. Ensure you have internet connection');
    console.error('   3. Verify API quotas and billing');
    console.error('   4. Try running again (may be temporary API issue)');
    process.exit(1);
  }
}

// Handle process interruption gracefully
process.on('SIGINT', () => {
  console.log('');
  console.log('⏹️  Image generation interrupted by user');
  console.log('   Partial results may have been saved');
  process.exit(0);
});

// Run the script
main().catch(error => {
  console.error('💥 Unexpected error:', error);
  process.exit(1);
});