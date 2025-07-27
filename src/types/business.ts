export interface Business {
  place_id: string;
  name: string;
  rating: number;
  user_ratings_total: number;
  vicinity: string;
  website: string | null;
  phone: string | null;
  google_url: string;
  domain: string | null;
  types: string[];
  price_level: number | null;
}

export interface BusinessListProps {
  businesses: Business[];
  maxDisplayed?: number;
  showContactButton?: boolean;
} 