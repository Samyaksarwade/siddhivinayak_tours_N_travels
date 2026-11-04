import React from 'react';
import { 
  Bus, 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Clock, 
  Heart,
  Sparkles
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, OWNER_NAME, WEBSITE_URL, createWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const genericWhatsAppUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Tours & Travels! I would like to book a bus for an upcoming tour. Please share available options.'
  );

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-20 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Slogan */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 p-1 flex items-center justify-center">
                <img 
                  src="/images/ganesh-logo.svg" 
                  alt="Siddhivinayak Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <div className="text-xl font-black text-white tracking-tight">
                  Siddhivinayak <span className="text-orange-500 italic text-sm">tours & travels</span>
                </div>
                <div className="text-xs text-orange-400 font-marathi font-medium">
                  सिद्धिविनायक टुअर्स ॲण्ड ट्रॅव्हल्स
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted travel partner for luxury group mobility in Pune and Maharashtra. 
              Featuring our flagship <span className="text-orange-400 font-bold">New AC Bus 20 Seater</span> with JBL sound system, 
              chilled climate-controlled dual AC, and 100% ergonomic pushback seats.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <div className="text-orange-400 font-bold text-xs uppercase tracking-wider">
                ॥ श्री सिद्धिविनायक ॥ &bull; Safe Journey... Happy Journey...
              </div>
              <p className="font-marathi text-xs text-slate-300 italic">
                &ldquo;प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे...&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#star-bus" className="hover:text-orange-400 transition text-orange-400 font-bold">New 20 Seater Bus</a></li>
              <li><a href="#fleet" className="hover:text-orange-400 transition">Our Fleet</a></li>
              <li><a href="#facilities" className="hover:text-orange-400 transition">Facilities & JBL Sound</a></li>
              <li><a href="#tours" className="hover:text-orange-400 transition">Tour Packages</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="#quote" className="hover:text-orange-400 transition">Instant Quote</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Pune to Mahabaleshwar 20-Seater Bus</li>
              <li>Pune to Shirdi & Shani Shingnapur Tour</li>
              <li>Complete 8 Ashtavinayak Darshan Yatra</li>
              <li>Pune to Goa Coastal Holiday Bus</li>
              <li>Pune to Mumbai Airport 24/7 Drop</li>
              <li>Pune to Lonavala & Imagica Day Picnic</li>
              <li>Bhimashankar & Trimbakeshwar Jyotirlinga</li>
              <li>Wedding Baraat & Corporate Transport</li>
            </ul>
          </div>

          {/* Contact Details from Banner */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Direct Contact & Booking
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-orange-600/20 text-orange-400 flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="text-[10px] text-slate-500">Call / WhatsApp (Vijay Pawar)</div>
                  <a href={`tel:${PHONE_NUMBER_INTL}`} className="font-bold text-white hover:text-orange-400 transition text-sm">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="text-[10px] text-slate-500">WhatsApp Booking Desk</div>
                  <a href={genericWhatsAppUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">
                    Chat Now on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Globe className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="text-[10px] text-slate-500">Official Website</div>
                  <div className="font-medium text-slate-300">www.siddhivinayaktravel.com</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </span>
                <div>
                  <div className="text-[10px] text-slate-500">Operating Hours</div>
                  <div className="font-medium text-slate-300">24 Hours / 7 Days a Week</div>
                </div>
              </div>
            </div>

            {/* Quick Action WhatsApp Button */}
            <div className="pt-2">
              <a
                href={genericWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-semibold">Siddhivinayak Tours & Travels</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Travel with Trust &bull; Safe Journey... Happy Journey...</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
