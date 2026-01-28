
export type PropertyType = 'Apartment' | 'Villa' | 'Land' | 'Building' | 'Office';
export type PropertyStatus = 'For Sale' | 'For Rent';

export interface Property {
  id: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  price: number;
  city: { ar: string; en: string };
  type: PropertyType;
  status: PropertyStatus;
  beds?: number;
  baths?: number;
  area: number;
  images: string[];
  featured?: boolean;
}

export interface City {
  id: string;
  name: { ar: string; en: string };
  image: string;
  count: number;
}

export type Language = 'ar' | 'en';
