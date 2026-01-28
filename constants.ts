
import { Property, City } from './types';

export const CITIES: City[] = [
  { id: 'riyadh', name: { ar: 'الرياض', en: 'Riyadh' }, image: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800', count: 1240 },
  { id: 'jeddah', name: { ar: 'جدة', en: 'Jeddah' }, image: 'https://images.unsplash.com/photo-1590333336340-983a38805f42?auto=format&fit=crop&q=80&w=800', count: 850 },
  { id: 'dammam', name: { ar: 'الدمام', en: 'Dammam' }, image: 'https://images.unsplash.com/photo-1627440614110-944f39446d79?auto=format&fit=crop&q=80&w=800', count: 420 },
  { id: 'makkah', name: { ar: 'مكة المكرمة', en: 'Makkah' }, image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&q=80&w=800', count: 310 },
  { id: 'madinah', name: { ar: 'المدينة المنورة', en: 'Madinah' }, image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&q=80&w=800', count: 280 },
  { id: 'khobar', name: { ar: 'الخبر', en: 'Khobar' }, image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=800', count: 560 },
  { id: 'tabuk', name: { ar: 'تبوك', en: 'Tabuk' }, image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800', count: 150 },
  { id: 'abha', name: { ar: 'أبها', en: 'Abha' }, image: 'https://images.unsplash.com/photo-1601614131599-4c1df2803273?auto=format&fit=crop&q=80&w=800', count: 190 },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: { ar: 'فيلا فاخرة في حي حطين', en: 'Luxury Villa in Hittin' },
    description: { ar: 'فيلا مودرن مع مسبح خاص وتصاميم داخلية راقية.', en: 'Modern villa with private pool and premium interiors.' },
    price: 4500000,
    city: { ar: 'الرياض', en: 'Riyadh' },
    type: 'Villa',
    status: 'For Sale',
    beds: 5,
    baths: 6,
    area: 450,
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: '2',
    title: { ar: 'شقة فاخرة إطلالة بحرية', en: 'Premium Sea View Apartment' },
    description: { ar: 'شقة مطلة على كورنيش جدة بتشطيب سوبر لوكس.', en: 'Apartment overlooking Jeddah Corniche with super lux finishing.' },
    price: 120000,
    city: { ar: 'جدة', en: 'Jeddah' },
    type: 'Apartment',
    status: 'For Rent',
    beds: 3,
    baths: 3,
    area: 210,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  },
  {
    id: '3',
    title: { ar: 'أرض سكنية في حي الياسمين', en: 'Residential Land in Al Yasmin' },
    description: { ar: 'أرض مميزة بموقع استراتيجي قريب من كافة الخدمات.', en: 'Prime residential land in a strategic location near services.' },
    price: 3200000,
    city: { ar: 'الرياض', en: 'Riyadh' },
    type: 'Land',
    status: 'For Sale',
    area: 600,
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: '4',
    title: { ar: 'مكتب تجاري واسع', en: 'Spacious Commercial Office' },
    description: { ar: 'مكتب جاهز للاستخدام في قلب المركز المالي.', en: 'Ready-to-use office in the heart of the financial district.' },
    price: 85000,
    city: { ar: 'الرياض', en: 'Riyadh' },
    type: 'Office',
    status: 'For Rent',
    area: 120,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'],
    featured: false
  },
  {
    id: '5',
    title: { ar: 'فيلا كلاسيكية في الخبر', en: 'Classic Villa in Khobar' },
    description: { ar: 'تصميم أندلسي فاخر مع حديقة واسعة وموقف سيارات.', en: 'Luxury Andalusian design with large garden and parking.' },
    price: 5800000,
    city: { ar: 'الخبر', en: 'Khobar' },
    type: 'Villa',
    status: 'For Sale',
    beds: 6,
    baths: 5,
    area: 550,
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'],
    featured: true
  }
];

export const TRANSLATIONS = {
  ar: {
    heroTitle: "مستقبلك يبدأ من هنا",
    heroSub: "اكتشف أرقى العقارات في قلب المملكة العربية السعودية",
    searchPlaceholder: "ابحث عن مدينة، حي، أو نوع عقار...",
    city: "المدينة",
    propertyType: "نوع العقار",
    priceRange: "نطاق السعر",
    status: "الحالة",
    search: "بحث",
    featured: "عقارات مميزة",
    viewAll: "عرض الكل",
    cities: "تصفح حسب المدينة",
    aboutUs: "عن أركان",
    contactUs: "اتصل بنا",
    footerQuote: "أركان العقارية - رفيقك الموثوق في رحلة البحث عن مسكن الأحلام في المملكة.",
    sale: "للبيع",
    rent: "للايجار",
    sar: "ر.س",
    area: "المساحة",
    beds: "غرف نوم",
    baths: "دورات مياه",
    details: "التفاصيل",
    contactAgent: "تواصل مع الوكيل",
    all: "الكل"
  },
  en: {
    heroTitle: "Your Future Starts Here",
    heroSub: "Discover the finest properties in the heart of Saudi Arabia",
    searchPlaceholder: "Search by city, district, or property type...",
    city: "City",
    propertyType: "Property Type",
    priceRange: "Price Range",
    status: "Status",
    search: "Search",
    featured: "Featured Properties",
    viewAll: "View All",
    cities: "Browse by City",
    aboutUs: "About Arkan",
    contactUs: "Contact Us",
    footerQuote: "Arkan Real Estate - Your trusted partner in finding your dream home in the Kingdom.",
    sale: "For Sale",
    rent: "For Rent",
    sar: "SAR",
    area: "Area",
    beds: "Beds",
    baths: "Baths",
    details: "Details",
    contactAgent: "Contact Agent",
    all: "All"
  }
};
