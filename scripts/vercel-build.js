import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting Vercel build process...');

try {
  // Run the normal build
  console.log('📦 Running Astro build...');
  execSync('npm run build:astro', { stdio: 'inherit' });
  
  // Verify the build output
  const distPath = join(process.cwd(), 'dist');
  const serverPath = join(distPath, 'server');
  const entryPath = join(serverPath, 'entry.mjs');
  const vercelOutputPath = join(process.cwd(), '.vercel', 'output');
  
  console.log('🔍 Verifying build output...');
  
  if (!existsSync(distPath)) {
    throw new Error('dist directory not found!');
  }
  
  if (!existsSync(serverPath)) {
    throw new Error('dist/server directory not found!');
  }
  
  if (!existsSync(entryPath)) {
    throw new Error('dist/server/entry.mjs not found!');
  }
  
  if (!existsSync(vercelOutputPath)) {
    throw new Error('.vercel/output directory not found!');
  }
  
  console.log('✅ Build verification passed!');
  console.log('📁 Build output structure:');
  console.log('  - dist/ ✓');
  console.log('  - dist/server/ ✓');
  console.log('  - dist/server/entry.mjs ✓');
  console.log('  - .vercel/output/ ✓');
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

console.log('✅ Vercel build completed successfully!'); 