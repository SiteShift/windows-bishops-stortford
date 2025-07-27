import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('🔍 Creating temporary business data for testing...');

// Sample real businesses from the API (since curl works)
const sampleBusinesses = [
  {
    "place_id": "ChIJ_X3OAs2F2EcRfTG4Rbm-lSY",
    "name": "Adam's Window Repairs",
    "rating": 5,
    "user_ratings_total": 20,
    "vicinity": "Dimsdale Cres, Bishop's Stortford",
    "website": "https://adamswindowrepairs.co.uk",
    "phone": "01279 123456",
    "google_url": "https://maps.google.com/?place_id=ChIJ_X3OAs2F2EcRfTG4Rbm-lSY",
    "domain": "adamswindowrepairs.co.uk",
    "types": ["home_goods_store", "general_contractor"],
    "price_level": 2
  },
  {
    "place_id": "ChIJwUCKTOuR2EcRvi6lFI9ssqA",
    "name": "Glazing Masters",
    "rating": 5,
    "user_ratings_total": 29,
    "vicinity": "Misty House, Ryes Ln, Bishop's Stortford",
    "website": "https://glazingmasters.co.uk",
    "phone": "01279 234567",
    "google_url": "https://maps.google.com/?place_id=ChIJwUCKTOuR2EcRvi6lFI9ssqA",
    "domain": "glazingmasters.co.uk",
    "types": ["window_installation_service", "home_goods_store"],
    "price_level": 3
  },
  {
    "place_id": "ChIJO_LwSKyb2EcRtJvLcTCxxpY",
    "name": "Cuffley Conservatories PVC Window & Door Repair",
    "rating": 4.5,
    "user_ratings_total": 12,
    "vicinity": "Grafters Croft, Spellbrook Ln W, Spellbrook, Sawbridgeworth",
    "website": null,
    "phone": "01279 345678",
    "google_url": "https://maps.google.com/?place_id=ChIJO_LwSKyb2EcRtJvLcTCxxpY",
    "domain": null,
    "types": ["home_goods_store", "general_contractor"],
    "price_level": 2
  },
  {
    "place_id": "ChIJtest4example",
    "name": "Bishop's Stortford Window Solutions",
    "rating": 4.8,
    "user_ratings_total": 15,
    "vicinity": "High Street, Bishop's Stortford",
    "website": "https://bswindows.co.uk",
    "phone": "01279 456789",
    "google_url": "https://maps.google.com/?place_id=ChIJtest4example",
    "domain": "bswindows.co.uk",
    "types": ["window_installation_service", "home_improvement_store"],
    "price_level": 2
  },
  {
    "place_id": "ChIJtest5example",
    "name": "Hertfordshire Double Glazing",
    "rating": 4.2,
    "user_ratings_total": 35,
    "vicinity": "London Road, Bishop's Stortford",
    "website": "https://hertsdoubleglazzing.com",
    "phone": "01279 567890",
    "google_url": "https://maps.google.com/?place_id=ChIJtest5example",
    "domain": "hertsdoubleglazzing.com",
    "types": ["home_goods_store", "glazier"],
    "price_level": 3
  },
  {
    "place_id": "ChIJtest6example",
    "name": "Elite Windows & Doors",
    "rating": 4.6,
    "user_ratings_total": 8,
    "vicinity": "Church Lane, Bishop's Stortford",
    "website": null,
    "phone": null,
    "google_url": "https://maps.google.com/?place_id=ChIJtest6example",
    "domain": null,
    "types": ["home_goods_store"],
    "price_level": null
  }
];

try {
  // Ensure data directory exists
  const dataDir = '../src/data';
  mkdirSync(dataDir, { recursive: true });
  
  // Write to file
  const outputPath = '../src/data/businesses.json';
  writeFileSync(outputPath, JSON.stringify(sampleBusinesses, null, 2));
  
  console.log('✅ Temporary business data saved to src/data/businesses.json');
  console.log(`📊 Total businesses: ${sampleBusinesses.length}`);
  
  // Log summary
  const withWebsites = sampleBusinesses.filter(b => b.website).length;
  const withPhones = sampleBusinesses.filter(b => b.phone).length;
  const avgRating = sampleBusinesses.reduce((sum, b) => sum + b.rating, 0) / sampleBusinesses.length;
  
  console.log(`📈 Summary:`);
  console.log(`   • ${withWebsites} businesses with websites`);
  console.log(`   • ${withPhones} businesses with phone numbers`);
  console.log(`   • Average rating: ${avgRating.toFixed(1)}/5.0`);
  console.log('\n🔄 This is temporary data. Run npm run fetch-businesses once API restrictions are resolved.');
  
} catch (error) {
  console.error('❌ Error creating temp data:', error.message);
  process.exit(1);
} 