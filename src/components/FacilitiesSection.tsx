import React, { useState } from 'react';
import { 
  Snowflake, 
  Volume2, 
  Armchair, 
  ShieldCheck, 
  UserCheck, 
  Luggage, 
  Clock, 
  Zap, 
  CheckCircle2, 
  MessageCircle,
  Sparkles,
  Phone
} from 'lucide-react';
import { FACILITIES_DATA, Facility } from '../data/facilitiesData';
import { createWhatsAppUrl, PHONE_DISPLAY, PHONE_NUMBER_INTL } from '../utils/whatsapp';

export const FacilitiesSection: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<Facility>(FACILITIES_DATA[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Snowflake': return <Snowflake className="w-5 h-5" />;
      case 'Speaker': return <Volume2 className="w-5 h-5" />;
      case 'Armchair': return <Armchair className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5" />;
      case 'Luggage': return <Luggage className="w-5 h-5" />;
      case 'Clock': return <Clock className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const whatsappInquiryUrl = createWhatsAppUrl(
    `Namaskar Siddhivinayak Tours & Travels! I am inquiring about the onboard facilities (Powerful AC, JBL Sound, Pushback seats) for your 20-Seater AC Bus. Please share vehicle availability.`
  );

  return (
    <section id="facilities" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Onboard Amenities & Comfort</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            World-Class Facilities on Every Trip
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From arctic cooling and party JBL sound to plush reclining pushback seats, 
            discover why families and corporates choose <span className="text-orange-600 font-bold">Siddhivinayak</span>.
          </p>
        </div>

        {/* Interactive Facilities Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Facilities Cards Grid (Left / Top) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FACILITIES_DATA.map((fac) => {
              const isSelected = selectedFacility.id === fac.id;
              return (
                <div
                  key={fac.id}
                  onClick={() => setSelectedFacility(fac)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer relative text-left ${
                    isSelected 
                      ? 'bg-orange-50/80 border-orange-500 shadow-lg shadow-orange-500/10 ring-2 ring-orange-400/30' 
                      : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {fac.bannerHighlight && (
                    <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider bg-orange-600 text-white px-2 py-0.5 rounded-md">
                      Banner Feature
                    </span>
                  )}

                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl transition ${
                      isSelected 
                        ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30' 
                        : 'bg-white text-brand-navy shadow-sm border border-slate-200'
                    }`}>
                      {getIcon(fac.icon)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base text-brand-navy leading-tight">
                        {fac.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 font-marathi">
                        {fac.marathiTitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Spotlight Box (Right) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Spotlight Details
              </span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                {selectedFacility.badgeText}
              </span>
            </div>

            <div className="py-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-600/30">
                  {getIcon(selectedFacility.icon)}
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedFacility.title}
                  </h3>
                  <div className="text-xs text-orange-300 font-marathi font-medium">
                    {selectedFacility.marathiTitle}
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedFacility.description}
              </p>

              {/* Highlights checklist */}
              <div className="space-y-2.5 pt-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Standard Specifications:
                </div>
                {selectedFacility.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* In-box Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a 
                href={whatsappInquiryUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask About Facilities on WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Phone className="w-3.5 h-3.5 text-orange-400" />
                <span>Direct Inquiries: <a href={`tel:${PHONE_NUMBER_INTL}`} className="text-white font-bold hover:underline">{PHONE_DISPLAY}</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
