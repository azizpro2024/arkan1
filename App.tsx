
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropertyCard from './components/PropertyCard';
import CityGrid from './components/CityGrid';
import Footer from './components/Footer';
import { PROPERTIES } from './constants';
import { Property } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { X, ChevronRight, ChevronLeft, Send } from 'lucide-react';

const MainContent: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const featuredProperties = PROPERTIES.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-[#f8f9fa] selection:bg-[#006c35] selection:text-white">
      <Navbar />
      <Hero />

      {/* Featured Properties */}
      <section className="py-24 bg-[#f4f4f4]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">{lang === 'ar' ? 'عروضنا المميزة' : 'Our Exclusive Offers'}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2">{t.featured}</h2>
            </div>
            <button className="bg-white border-2 border-[#006c35] text-[#006c35] font-bold px-8 py-3 rounded-full hover:bg-[#006c35] hover:text-white transition-all mt-6 md:mt-0">
              {t.viewAll}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelect={setSelectedProperty}
              />
            ))}
          </div>
        </div>
      </section>

      {/* City Directory */}
      <CityGrid />

      {/* Why Choose Arkan Section */}
      <section className="py-24 bg-[#006c35] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{lang === 'ar' ? 'لماذا تختار أركان؟' : 'Why Choose Arkan?'}</h2>
            <p className="text-white/80 text-lg leading-relaxed">{lang === 'ar' ? 'نحن نقدم تجربة عقارية فريدة تجمع بين التكنولوجيا الحديثة والخبرة المحلية العميقة في السوق السعودي.' : 'We provide a unique real estate experience combining modern technology with deep local expertise in the Saudi market.'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { titleAr: 'ثقة ومصداقية', titleEn: 'Trust & Integrity', descAr: 'جميع العقارات المدرجة تخضع لعملية تدقيق صارمة لضمان صحة البيانات.', descEn: 'All listed properties undergo strict verification to ensure data accuracy.' },
              { titleAr: 'تغطية شاملة', titleEn: 'Wide Coverage', descAr: 'نتواجد في أكثر من ٢٠ مدينة حول المملكة لنصل إليك أينما كنت.', descEn: 'We operate in 20+ cities across the Kingdom to reach you wherever you are.' },
              { titleAr: 'استشارات مهنية', titleEn: 'Professional Advisory', descAr: 'فريق من الخبراء العقاريين لمساعدتك في اتخاذ القرار الاستثماري الصحيح.', descEn: 'A team of real estate experts to help you make the right investment decision.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-16 h-16 bg-[#d4af37] rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold">{i + 1}</div>
                <h4 className="text-xl font-bold mb-4">{lang === 'ar' ? item.titleAr : item.titleEn}</h4>
                <p className="text-white/70 leading-relaxed">{lang === 'ar' ? item.descAr : item.descEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details Modal (Simulation) */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-y-auto no-scrollbar relative">
            <button 
              onClick={() => setSelectedProperty(null)}
              className="absolute top-6 right-6 z-10 bg-white shadow-lg p-2 rounded-full text-slate-900 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[400px] lg:h-auto">
                <img 
                  src={selectedProperty.images[0]} 
                  className="w-full h-full object-cover" 
                  alt={selectedProperty.title[lang]} 
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="text-[#d4af37] font-bold uppercase tracking-widest text-xs mb-2 block">{selectedProperty.type} • {selectedProperty.city[lang]}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{selectedProperty.title[lang]}</h2>
                <div className="flex items-center space-x-6 rtl:space-x-reverse mb-8">
                  <div className="text-3xl font-bold text-[#006c35]">
                    {selectedProperty.price.toLocaleString()} <span className="text-lg font-medium">{t.sar}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {selectedProperty.description[lang]}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-10">
                   <div className="bg-[#f8f9fa] p-4 rounded-2xl text-center">
                      <span className="text-slate-400 text-xs block mb-1 uppercase tracking-wider">{t.area}</span>
                      <span className="text-lg font-bold text-slate-800">{selectedProperty.area} م²</span>
                   </div>
                   {selectedProperty.beds && (
                    <div className="bg-[#f8f9fa] p-4 rounded-2xl text-center">
                      <span className="text-slate-400 text-xs block mb-1 uppercase tracking-wider">{t.beds}</span>
                      <span className="text-lg font-bold text-slate-800">{selectedProperty.beds}</span>
                    </div>
                   )}
                   {selectedProperty.baths && (
                    <div className="bg-[#f8f9fa] p-4 rounded-2xl text-center">
                      <span className="text-slate-400 text-xs block mb-1 uppercase tracking-wider">{t.baths}</span>
                      <span className="text-lg font-bold text-slate-800">{selectedProperty.baths}</span>
                    </div>
                   )}
                </div>

                <div className="bg-[#006c35]/5 p-8 rounded-3xl border border-[#006c35]/10">
                  <h4 className="text-xl font-bold mb-6 text-slate-900">{t.contactAgent}</h4>
                  <div className="flex flex-col space-y-4">
                    <input type="text" placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'} className="bg-white p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c35]" />
                    <input type="email" placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} className="bg-white p-4 rounded-xl border border-slate-200 focus:outline-none focus:border-[#006c35]" />
                    <button className="bg-[#006c35] text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 rtl:space-x-reverse shadow-lg hover:shadow-xl transition-all">
                      <Send size={18} />
                      <span>{lang === 'ar' ? 'إرسال الاستفسار' : 'Send Inquiry'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
