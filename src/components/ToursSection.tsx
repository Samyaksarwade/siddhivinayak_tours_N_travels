import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Calendar, 
  Bus, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { TOURS_DATA, TourPackage } from '../data/toursData';
import { createWhatsAppUrl, getTourPackageMsg } from '../utils/whatsapp';

export const ToursSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'popular' | 'pilgrimage' | 'holiday'>('all');

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (filter === 'popular') return tour.popular;
    if (filter === 'pilgrimage') return tour.id.includes('shirdi') || tour.id.includes('ashtavinayak') || tour.id.includes('bhimashankar');
    if (filter === 'holiday') return tour.id.includes('mahabaleshwar') || tour.id.includes('goa') || tour.id.includes('lonavala');
    return true;
  });

  return (
    <section id="tours" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Compass className="w-4 h-4 text-orange-600" />
            <span>Maharashtra & Outstation Tours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Popular Tour Packages on Rent
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Hand-curated itineraries for family vacations, devotional darshans, and weekend escapes. 
            Enjoy seamless travel in our <span className="text-orange-600 font-bold">20-Seater AC Luxury Bus</span> with expert drivers.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {[
            { id: 'all', label: 'All Packages' },
            { id: 'popular', label: '🔥 Most Popular' },
            { id: 'pilgrimage', label: '🕉️ Devotional & Yatras' },
            { id: 'holiday', label: '🏖️ Hill Stations & Beaches' }
          ].map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setFilter(btn.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                filter === btn.id
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => {
            const whatsappUrl = createWhatsAppUrl(
              getTourPackageMsg(tour.title, tour.duration, tour.recommendedBus)
            );

            return (
              <div 
                key={tour.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-900 group">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-600 text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow">
                        {tour.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-brand-navy font-bold text-xs px-2.5 py-1 rounded-md shadow flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-600" />
                        {tour.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="text-[11px] text-orange-300 font-marathi font-medium">
                        {tour.marathiTitle}
                      </div>
                      <h3 className="text-lg font-black tracking-tight leading-snug">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3.5">
                    <div className="text-xs text-slate-500 flex items-center gap-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{tour.distance}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Sightseeing Points */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Sightseeing Points:
                      </div>
                      {tour.highlights.slice(0, 3).map((hl, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recommended Vehicle */}
                    <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-2 text-xs text-orange-900 font-medium">
                      <Bus className="w-4 h-4 text-orange-600 shrink-0" />
                      <div className="truncate">
                        <span className="font-bold">Recommended: </span>
                        {tour.recommendedBus}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire Package on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
