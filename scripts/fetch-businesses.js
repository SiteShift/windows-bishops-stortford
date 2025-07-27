import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '../.env') });

// Configuration
const PLACES_API_KEY = process.env.PLACES_API_KEY;
const BISHOP_STORTFORD_LAT = 51.8721;
const BISHOP_STORTFORD_LNG = 0.1604;
const RADIUS = 5000; // 5km
const SEARCH_QUERY = 'window glazing';

// Validate API key
if (!PLACES_API_KEY) {
  console.error('❌ ERROR: PLACES_API_KEY environment variable is required');
  console.error('Please add your Google Places API key to the .env file');
  process.exit(1);
}

console.log('🔍 Starting Google Places API fetch for window businesses...');
console.log(`📍 Location: Bishop's Stortford (${BISHOP_STORTFORD_LAT}, ${BISHOP_STORTFORD_LNG})`);
console.log(`📏 Radius: ${RADIUS / 1000}km`);
console.log(`🔎 Query: "${SEARCH_QUERY}"`);

/**
 * Fetch nearby businesses using Google Places API Nearby Search
 */
async function fetchNearbyBusinesses() {
  const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
  url.searchParams.set('location', `${BISHOP_STORTFORD_LAT},${BISHOP_STORTFORD_LNG}`);
  url.searchParams.set('radius', RADIUS.toString());
  url.searchParams.set('keyword', SEARCH_QUERY);
  url.searchParams.set('type', 'establishment');
  url.searchParams.set('key', PLACES_API_KEY);

  try {
    console.log('📡 Fetching nearby businesses...');
    console.log('🔗 URL:', url.toString());
    const response = await fetch(url.toString());
    
    console.log('📊 Response status:', response.status);
    console.log('📊 Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Response body:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('📊 API Response status:', data.status);
    
    if (data.status !== 'OK' && data.status !== 'ZERO_RESULTS') {
      throw new Error(`Places API error: ${data.status} - ${data.error_message || 'Unknown error'}`);
    }
    
    console.log(`✅ Found ${data.results?.length || 0} businesses`);
    return data.results || [];
  } catch (error) {
    console.error('❌ Error fetching nearby businesses:', error.message);
    throw error;
  }
}

/**
 * Fetch additional details for a place using Place Details API
 */
async function fetchBusinessDetails(placeId) {
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
  url.searchParams.set('place_id', placeId);
  url.searchParams.set('fields', 'name,formatted_phone_number,website,url,types,price_level');
  url.searchParams.set('key', PLACES_API_KEY);

  try {
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.status !== 'OK') {
      console.warn(`⚠️  Place Details API warning for ${placeId}: ${data.status}`);
      return null;
    }
    
    return data.result;
  } catch (error) {
    console.warn(`⚠️  Error fetching details for place ${placeId}:`, error.message);
    return null;
  }
}

/**
 * Extract domain from URL
 */
function extractDomain(url) {
  if (!url) return null;
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, '');
  } catch {
    return null;
  }
}

/**
 * Process and enrich business data
 */
async function processBusinesses(businesses) {
  console.log('🔄 Processing business details...');
  const processed = [];
  
  for (let i = 0; i < businesses.length; i++) {
    const business = businesses[i];
    console.log(`📋 Processing ${i + 1}/${businesses.length}: ${business.name}`);
    
    // Fetch additional details
    const details = await fetchBusinessDetails(business.place_id);
    
    // Combine data
    const processedBusiness = {
      place_id: business.place_id,
      name: business.name,
      rating: business.rating || 0,
      user_ratings_total: business.user_ratings_total || 0,
      vicinity: business.vicinity || 'Bishop\'s Stortford area',
      website: details?.website || null,
      phone: details?.formatted_phone_number || null,
      google_url: details?.url || `https://maps.google.com/?place_id=${business.place_id}`,
      domain: extractDomain(details?.website),
      types: details?.types || business.types || [],
      price_level: details?.price_level || null
    };
    
    processed.push(processedBusiness);
    
    // Small delay to respect API rate limits
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Sort by rating and review count (quality score)
  processed.sort((a, b) => {
    const scoreA = a.rating * Math.log(a.user_ratings_total + 1);
    const scoreB = b.rating * Math.log(b.user_ratings_total + 1);
    return scoreB - scoreA;
  });
  
  console.log(`✅ Processed ${processed.length} businesses`);
  return processed;
}

/**
 * Main function to fetch and save business data
 */
async function main() {
  try {
    // Fetch nearby businesses
    const businesses = await fetchNearbyBusinesses();
    
    if (businesses.length === 0) {
      console.log('ℹ️  No businesses found, creating empty data file');
      const outputPath = '../src/data/businesses.json';
      writeFileSync(outputPath, JSON.stringify([], null, 2));
      console.log('✅ Empty businesses.json created');
      return;
    }
    
    // Process businesses with additional details
    const processedBusinesses = await processBusinesses(businesses);
    
    // Ensure data directory exists
    const dataDir = './src/data';
    mkdirSync(dataDir, { recursive: true });
    
    // Write to file
    const outputPath = './src/data/businesses.json';
    writeFileSync(outputPath, JSON.stringify(processedBusinesses, null, 2));
    
    console.log('✅ Business data successfully saved to src/data/businesses.json');
    console.log(`📊 Total businesses: ${processedBusinesses.length}`);
    
    // Log summary
    const withWebsites = processedBusinesses.filter(b => b.website).length;
    const withPhones = processedBusinesses.filter(b => b.phone).length;
    const avgRating = processedBusinesses.reduce((sum, b) => sum + b.rating, 0) / processedBusinesses.length;
    
    console.log(`📈 Summary:`);
    console.log(`   • ${withWebsites} businesses with websites`);
    console.log(`   • ${withPhones} businesses with phone numbers`);
    console.log(`   • Average rating: ${avgRating.toFixed(1)}/5.0`);
    
  } catch (error) {
    console.error('❌ FATAL ERROR:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

// Run the script
main(); 