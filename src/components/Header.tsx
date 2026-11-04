import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ChevronRight,
  Bus,
  Sparkles,
  Volume2
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const genericWhatsAppUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Tours & Travels! I would like to enquire about renting an AC Bus / Tempo Traveller for our upcoming trip. Please share details and rates.'
  );

  // Marquee item list for smooth continuous scrolling from Left to Right
  const marqueeItems = [
    '॥ श्री सिद्धिविनायक प्रसन्न ॥',
    '🚌 नवीन २० सीटर लक्झरी एसी बस बुकिंग सुरू! (New AC Bus 20 Seater)',
    '🔊 JBL Pro साऊंड सिस्टीम & ऑल पुशबॅक सीट्स',
    '📞 कॉल / WhatsApp: +91 9359834116 (Vijay Pawar)',
    '📍 पुणे • PCMC • मुंबई • महाबळेश्वर • शिर्डी • गोवा • अष्टविनायक',
    '✨ "प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे..."',
    '🛡️ 100% On-Time Pickup Guarantee • Safe Journey... Happy Journey...'
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-navy text-white shadow-xl border-b border-orange-500/30 transition-all">
      {/* 1. Moving Header Line from Left to Right - GENUINELY TRANSPARENT (NOT WHITE!) with High-Visibility Text */}
      <div 
        className="bg-transparent border-b border-white/10 py-1.5 overflow-hidden select-none w-full"
        title="Siddhivinayak Tours and Travels Announcements"
      >
        <div className="flex animate-marquee-ltr space-x-8 whitespace-nowrap">
          {/* First loop track */}
          <div className="flex items-center space-x-8 shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={`m1-${idx}`} className="flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wide">
                <span className="text-amber-400 font-black">★</span>
                <span className="text-orange-200">{item.split(' ')[0]}</span>
                <span className="text-white drop-shadow-sm font-medium">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </span>
            ))}
          </div>

          {/* Duplicate loop track for seamless continuous loop */}
          <div className="flex items-center space-x-8 shrink-0">
            {marqueeItems.map((item, idx) => (
              <span key={`m2-${idx}`} className="flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wide">
                <span className="text-amber-400 font-black">★</span>
                <span className="text-orange-200">{item.split(' ')[0]}</span>
                <span className="text-white drop-shadow-sm font-medium">
                  {item.split(' ').slice(1).join(' ')}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Top Info & Contact Bar (Transparent background with clean separator) */}
      <div className="bg-transparent border-b border-white/10 text-xs sm:text-sm py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Slogan & Auspicious Inscription */}
          <div className="flex items-center gap-2.5 text-orange-200">
            <span className="font-bold text-orange-400 tracking-wide font-marathi">
              ॥ श्री सिद्धिविनायक ॥
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="italic font-medium hidden sm:inline text-white">
              Safe Journey... Happy Journey...
            </span>
            <span className="hidden lg:inline bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
              Travel with Trust
            </span>
          </div>

          {/* Quick Contact & Working Hours */}
          <div className="flex items-center gap-4 sm:gap-6 text-slate-200 text-xs">
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>24/7 Available in Pune & Outstation</span>
            </div>
            <a 
              href={`tel:${PHONE_NUMBER_INTL}`} 
              className="flex items-center gap-1.5 hover:text-orange-400 transition font-extrabold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a 
              href={genericWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation Bar with Logo & Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/20 p-1 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform backdrop-blur-sm">
              <img 
                src="/images/ganesh-logo.svg" 
                alt="Siddhivinayak Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
              />
            </div>
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors">
                  Siddhivinayak
                </span>
                <span className="text-xs sm:text-sm font-bold text-orange-400 italic">
                  tours & travels
                </span>
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-orange-200 font-marathi tracking-wider">
                सिद्धिविनायक टुअर्स ॲण्ड ट्रॅव्हल्स
              </div>
            </div>
          </a>

          {/* Desktop Nav Links (Laptop / Large Screens) */}
          <nav className="hidden xl:flex items-center gap-5 text-xs font-bold text-slate-200">
            <a href="#home" className="hover:text-orange-400 transition-colors py-1">Home</a>
            <a href="#star-bus" className="hover:text-orange-400 transition-colors flex items-center gap-1 text-orange-400 font-black">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping"></span>
              20-Seater Bus
            </a>
            <a href="#fare-calculator" className="hover:text-orange-400 transition-colors py-1 text-amber-300 font-extrabold flex items-center gap-1">
              <span>⚡ Live Fare Calc</span>
            </a>
            <a href="#fleet" className="hover:text-orange-400 transition-colors py-1">Our Fleet</a>
            <a href="#seat-layout" className="hover:text-orange-400 transition-colors py-1">Seat Layout</a>
            <a href="#facilities" className="hover:text-orange-400 transition-colors py-1">Facilities</a>
            <a href="#tariff" className="hover:text-orange-400 transition-colors py-1">Rate Card</a>
            <a href="#tours" className="hover:text-orange-400 transition-colors py-1">Tour Packages</a>
            <a href="#gallery" className="hover:text-orange-400 transition-colors py-1">Gallery</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors py-1 font-black text-orange-400">Contact Us</a>
          </nav>

          {/* Call & WhatsApp Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a 
              href={`tel:${PHONE_NUMBER_INTL}`} 
              className="px-3.5 py-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs flex items-center gap-1.5 transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call: 9359834116</span>
            </a>
            <a 
              href={genericWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-600/30 hover:scale-105 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="xl:hidden p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 transition border border-white/15"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation (Mobile Screens) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-900 border-t border-white/15 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-fadeIn text-white">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-200">
            <a 
              href="#home" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#star-bus" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg bg-orange-600/20 text-orange-300 font-bold flex items-center justify-between border border-orange-500/30"
            >
              <span className="flex items-center gap-2">
                <Bus className="w-4 h-4 text-orange-400" />
                New 20 Seater AC Bus (Banner Special)
              </span>
              <ChevronRight className="w-4 h-4 text-orange-400" />
            </a>
            <a 
              href="#fare-calculator" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg bg-emerald-950/40 text-emerald-300 font-extrabold flex items-center justify-between border border-emerald-500/30"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Live Fare Calculator (Rate Estimator)
              </span>
              <ChevronRight className="w-4 h-4 text-emerald-400" />
            </a>
            <a 
              href="#fleet" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Our Fleet (Buses & Travellers)</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#seat-layout" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>2x1 Bus Seat Layout Blueprint</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#facilities" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Facilities & JBL Sound Simulator</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#tariff" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Tariff & Rates Card</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#tours" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Tour Packages & Yatras</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#gallery" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg hover:bg-white/10 hover:text-orange-400 flex items-center justify-between"
            >
              <span>Photo Gallery</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              className="px-3 py-2.5 rounded-lg bg-orange-600 text-white font-extrabold flex items-center justify-between shadow-md"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </a>
          </nav>

          {/* Mobile Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            <a 
              href={`tel:${PHONE_NUMBER_INTL}`} 
              className="w-full py-2.5 rounded-xl border border-white/20 bg-white/10 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Now</span>
            </a>
            <a 
              href={genericWhatsAppUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-center text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
