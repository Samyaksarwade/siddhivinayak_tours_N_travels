import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  User, 
  MapPin, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, OWNER_NAME, WEBSITE_URL, createWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const whatsappUrl = createWhatsAppUrl(
    'Namaskar Vijay Pawar Sir! I am contacting you from the Siddhivinayak Tours & Travels website. I want to inquire about renting an AC bus/traveller for our group.'
  );

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 border border-orange-200">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Direct Proprietor Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Get in Touch with Siddhivinayak Travels
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Speak directly with owner <span className="text-orange-600 font-bold">Vijay Pawar</span> for customized quotes, instant bookings, and zero-brokerage travel arrangements.
          </p>
        </div>

        {/* Contact Cards Grid (Properly spaced, never overlapping) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* 1. Direct Phone Call Card */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-orange-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-600 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-brand-navy">Call Directly</h3>
                <p className="text-xs text-slate-500 mt-0.5">24/7 Immediate Response</p>
              </div>
              <div className="pt-2">
                <a 
                  href={`tel:${PHONE_NUMBER_INTL}`} 
                  className="text-lg font-black text-brand-navy hover:text-orange-600 transition tracking-tight"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">Single-tap direct call to booking desk</p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <a 
                href={`tel:${PHONE_NUMBER_INTL}`} 
                className="w-full py-2.5 px-4 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* 2. Direct WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-brand-navy">WhatsApp Chat</h3>
                <p className="text-xs text-slate-500 mt-0.5">Instant Quote in 5 Mins</p>
              </div>
              <div className="pt-2">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-black text-emerald-700 hover:text-emerald-800 transition tracking-tight"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-[11px] text-slate-500 mt-1">Send dates & route for quick quotation</p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-sm shadow-emerald-600/20"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 3. Owner & Booking Desk */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-blue-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-brand-navy">Proprietor</h3>
                <p className="text-xs text-slate-500 mt-0.5">Authorized Fleet Operator</p>
              </div>
              <div className="pt-2">
                <div className="text-lg font-black text-brand-navy">Digital Vijay U. Pawar</div>
                <p className="text-[11px] text-slate-500 mt-1 font-marathi">सिद्धिविनायक टुअर्स ॲण्ड ट्रॅव्हल्स</p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <span className="w-full py-2.5 px-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Travel Business</span>
              </span>
            </div>
          </div>

          {/* 4. Service Locations & Coverage */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-amber-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-brand-navy">Service Areas</h3>
                <p className="text-xs text-slate-500 mt-0.5">Pune & All Maharashtra</p>
              </div>
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-800 leading-relaxed">
                  Pune, PCMC, Mumbai, Mahabaleshwar, Shirdi, Goa & Outstation
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Doorstep pickup across all Pune suburbs</p>
              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100">
              <div className="w-full py-2.5 px-3 rounded-xl bg-orange-50 text-orange-800 font-bold text-xs flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5 text-orange-600" />
                <span>24x7 Pickup Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pune Suburbs Doorstep Pickup Banner */}
        <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-orange-400 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-4 h-4" /> Comprehensive Local Coverage
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Doorstep Bus Pickup Anywhere in Pune & PCMC
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We provide prompt, on-time reporting at Kothrud, Swargate, Hinjewadi, Wakad, Baner, Aundh, Hadapsar, Magarpatta, Viman Nagar, Kharadi, Nigdi, Bhosari, Chakan, as well as Pune Railway Station & Pune Airport.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={`tel:${PHONE_NUMBER_INTL}`}
              className="py-3 px-6 rounded-xl border-2 border-white/20 hover:bg-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {PHONE_DISPLAY}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
