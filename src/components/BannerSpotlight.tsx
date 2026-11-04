import React from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Globe, 
  User, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2,
  Award,
  Bus
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, OWNER_NAME, WEBSITE_URL, createWhatsAppUrl } from '../utils/whatsapp';

export const BannerSpotlight: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Namaskar Vijay Pawar Sir! I saw the Siddhivinayak Tours and Travels banner and would like to speak directly regarding booking an AC Bus for our upcoming family/corporate tour.'
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Banner Image Display Column */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/30 shadow-2xl group">
                <img 
                  src="/images/siddhivinayak-banner.jpg" 
                  alt="Official Banner of Siddhivinayak Tours and Travels" 
                  className="w-full h-auto object-cover group-hover:scale-102 transition duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/90 backdrop-blur-md border border-white/20 text-orange-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <Award className="w-3.5 h-3.5 text-orange-400" />
                  <span>Official Verified Banner</span>
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Owner Contact
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  Siddhivinayak Tours & Travels
                </h3>
                <p className="text-orange-200 font-marathi text-sm mt-1">
                  सिद्धिविनायक टुअर्स ॲण्ड ट्रॅव्हल्स
                </p>
              </div>

              {/* Slogan and Marathi Quote */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="text-orange-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span>॥ श्री सिद्धिविनायक ॥</span>
                  <span>&bull;</span>
                  <span className="text-white italic">Safe Journey... Happy Journey...</span>
                </div>
                <p className="text-sm font-marathi text-slate-200 italic leading-relaxed">
                  &ldquo;प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे...&rdquo;
                </p>
              </div>

              {/* Contact Information from Banner */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Proprietor / Contact Person</div>
                    <div className="font-extrabold text-white text-base">Digital Vijay U. Pawar</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Call & WhatsApp</div>
                    <a 
                      href={`tel:${PHONE_NUMBER_INTL}`} 
                      className="font-extrabold text-white text-base hover:text-orange-400 transition"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Official Web Portal</div>
                    <div className="font-extrabold text-white text-base">www.siddhivinayaktravel.com</div>
                  </div>
                </div>
              </div>

              {/* Connect Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Vijay Pawar</span>
                </a>

                <a 
                  href={`tel:${PHONE_NUMBER_INTL}`} 
                  className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
