import React, { useState } from 'react';
import { 
  Bus, 
  Users, 
  Snowflake, 
  Armchair, 
  Luggage, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  Sparkles,
  CheckCircle2,
  Volume2
} from 'lucide-react';
import { FLEET_DATA, Vehicle } from '../data/fleetData';
import { createWhatsAppUrl, getVehicleBookingMsg } from '../utils/whatsapp';

interface FleetSectionProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Fleet' },
    { id: 'star', label: '⭐ 20-Seater Star' },
    { id: 'urbania', label: 'Force Urbania' },
    { id: 'tempo', label: 'Tempo Travellers' },
    { id: 'minibus', label: 'Mini Buses & Coaches' },
    { id: 'cab', label: 'Innova & Cabs' }
  ];

  const filteredVehicles = activeCategory === 'all' 
    ? FLEET_DATA 
    : FLEET_DATA.filter(v => v.category === activeCategory);

  return (
    <section id="fleet" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Bus className="w-4 h-4 text-orange-600" />
            <span>Our Complete Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Choose Your Ideal Travel Bus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From 6-seater executive cabs to 20-seater luxury buses and 50-seater tour coaches. 
            All vehicles are equipped with chilled AC, pushback seats, and verified drivers.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => {
            const bookingWhatsAppUrl = createWhatsAppUrl(
              getVehicleBookingMsg(vehicle.name, vehicle.capacity)
            );

            return (
              <div
                key={vehicle.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl ${
                  vehicle.isStar 
                    ? 'border-orange-500 ring-2 ring-orange-500/20 shadow-orange-500/10' 
                    : 'border-slate-200'
                }`}
              >
                <div>
                  {/* Vehicle Media Card */}
                  <div className="relative h-56 overflow-hidden bg-slate-900 group">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Tag Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {vehicle.tag && (
                        <span className={`text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md ${
                          vehicle.isStar 
                            ? 'bg-orange-600 text-white' 
                            : 'bg-brand-navy/90 text-white backdrop-blur-sm'
                        }`}>
                          {vehicle.tag}
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-brand-navy font-black text-xs px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-orange-600" />
                        {vehicle.seatsCount} Seats
                      </span>
                    </div>

                    {/* Card Title on Image */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] text-orange-300 font-marathi font-medium">
                        {vehicle.marathiName}
                      </div>
                      <h3 className="text-lg font-black tracking-tight leading-snug drop-shadow-sm">
                        {vehicle.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    {/* Key Attributes Row */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Armchair className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span className="truncate">{vehicle.seatingConfig}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Snowflake className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">Powerful AC</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span className="truncate">JBL / Stereo</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Luggage className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">Ample Luggage</span>
                      </div>
                    </div>

                    {/* Features Snippet */}
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {vehicle.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best For Tag */}
                    <div className="text-[11px] text-slate-500 pt-1">
                      <span className="font-bold text-slate-700">Ideal For: </span>
                      {vehicle.bestFor.slice(0, 2).join(' • ')}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(vehicle.id)}
                      className="py-2.5 px-3 rounded-xl border border-slate-300 text-brand-navy hover:bg-slate-50 font-bold text-xs transition flex items-center justify-center gap-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={bookingWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs transition flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
