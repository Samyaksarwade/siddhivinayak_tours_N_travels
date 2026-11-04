import React from 'react';
import { 
  Bus, 
  Volume2, 
  Snowflake, 
  Armchair, 
  ShieldCheck, 
  UserCheck, 
  Luggage, 
  Clock, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Zap, 
  Award,
  Sparkles
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl, getVehicleBookingMsg } from '../utils/whatsapp';

interface StarBusSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export const StarBusSection: React.FC<StarBusSectionProps> = ({ onSelectVehicle }) => {
  const whatsappUrl = createWhatsAppUrl(
    getVehicleBookingMsg('New AC Bus 20 Seater (Banner Special with JBL Sound)', '20 Seater + 1 Driver')
  );

  return (
    <section id="star-bus" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Featured Star Vehicle &bull; Banner Special</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            The Brand New <span className="text-orange-600">20 Seater AC Bus</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Equipped with original <span className="text-brand-navy font-bold">JBL Sound</span>, 
            <span className="text-brand-navy font-bold"> 100% Pushback Seats</span>, and arctic dual air-conditioning. 
            Engineered for pure group comfort on outstation trips, family holidays, weddings, and pilgrimages.
          </p>
        </div>

        {/* Highlight Card with Visuals and Specs */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Media Column (Banner & Exterior/Interior Highlights) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-brand-navy to-slate-900 p-6 sm:p-8 flex flex-col justify-between text-white relative">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-orange-500 text-white font-black text-xs px-3 py-1 rounded-md tracking-wider uppercase">
                    ⭐ Official Star Coach
                  </span>
                  <span className="text-xs text-orange-300 font-semibold font-marathi">
                    ॥ श्री सिद्धिविनायक ॥
                  </span>
                </div>

                {/* Banner Image Preview Card */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group cursor-pointer"
                     onClick={() => onSelectVehicle('new-ac-bus-20-seater')}>
                  <img 
                    src="/images/siddhivinayak-banner.jpg" 
                    alt="Siddhivinayak Tours and Travels 20 Seater AC Bus Banner" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                    <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-orange-400" />
                      Click to view full specifications & photo gallery
                    </p>
                  </div>
                </div>

                {/* Marathi Quote Box */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                  <p className="font-marathi text-sm text-orange-200 italic text-center">
                    &ldquo;प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे...&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-300 text-center mt-1">
                    Safe Journey... Happy Journey... &bull; Travel with Trust
                  </p>
                </div>
              </div>

              {/* Quick Specs Chips */}
              <div className="grid grid-cols-3 gap-2 pt-6 text-center text-xs">
                <div className="bg-white/10 rounded-lg p-2.5">
                  <div className="text-orange-400 font-bold text-base">20+1</div>
                  <div className="text-slate-300 text-[11px]">Seat Capacity</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5">
                  <div className="text-orange-400 font-bold text-base">JBL Pro</div>
                  <div className="text-slate-300 text-[11px]">Sound System</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2.5">
                  <div className="text-orange-400 font-bold text-base">2x1</div>
                  <div className="text-slate-300 text-[11px]">Pushback Layout</div>
                </div>
              </div>
            </div>

            {/* Right Column: Facilities & Booking Actions */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Vehicle Profile</div>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-navy mt-1">
                    Force 20-Seater Luxury AC Coach
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Customized with highest attention to traveler comfort. Whether navigating tight hairpin turns in Mahabaleshwar or speeding across Mumbai-Pune expressway, the ride stays whisper-smooth.
                  </p>
                </div>

                {/* Banner 7 Key Badges List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/70 border border-orange-100">
                    <div className="p-2 rounded-lg bg-orange-600 text-white shrink-0">
                      <Snowflake className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">Powerful AC</div>
                      <div className="text-[11px] text-slate-600">Dual Arctic cooling with individual overhead vents</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50/70 border border-orange-100">
                    <div className="p-2 rounded-lg bg-orange-600 text-white shrink-0">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">JBL Sound System</div>
                      <div className="text-[11px] text-slate-600">Crisp surround audio with Bluetooth & PA mic</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                      <Armchair className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">All Pushback Seats</div>
                      <div className="text-[11px] text-slate-600">Ergonomic reclining seats with head & calf support</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50/70 border border-blue-100">
                    <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                      <Luggage className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">Spacious Luggage Space</div>
                      <div className="text-[11px] text-slate-600">Deep trunk + overhead parcel shelves + roof rack</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="p-2 rounded-lg bg-slate-800 text-white shrink-0">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">Experienced Driver</div>
                      <div className="text-[11px] text-slate-600">Polite, verified, 10+ yrs Western Ghats master</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="p-2 rounded-lg bg-slate-800 text-white shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-brand-navy">On Time Service</div>
                      <div className="text-[11px] text-slate-600">15-minute advance arrival at your doorstep</div>
                    </div>
                  </div>
                </div>

                {/* Extra Features Pill Row */}
                <div className="flex flex-wrap gap-2 text-xs text-slate-600 pt-1">
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                    <Zap className="w-3.5 h-3.5 text-amber-500" /> USB Fast Charging at Every Row
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> GPS Tracked & ABS Brakes
                  </span>
                  <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                    <Award className="w-3.5 h-3.5 text-blue-600" /> 100% Sanitized Before Every Trip
                  </span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="pt-8 border-t border-slate-100 mt-6 flex flex-col sm:flex-row gap-3">
                <a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book 20-Seater on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectVehicle('new-ac-bus-20-seater')}
                  className="py-3.5 px-5 rounded-xl border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white font-bold text-sm transition"
                >
                  View Details & Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
