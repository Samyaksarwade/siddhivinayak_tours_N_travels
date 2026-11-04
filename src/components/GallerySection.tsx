import React, { useState } from 'react';
import { Sparkles, Camera, X, MessageCircle, Bus } from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface GalleryItem {
  id: string;
  title: string;
  category: 'bus' | 'interior' | 'amenities' | 'destinations';
  image: string;
  description: string;
}

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'New AC Bus 20 Seater Official Banner Coach',
      category: 'bus',
      image: '/images/siddhivinayak-banner.jpg',
      description: 'Official banner showcasing our brand-new Force 20-Seater luxury AC coach with custom body styling and graphics.'
    },
    {
      id: 'g2',
      title: 'Luxury 2x1 Pushback Recliner Seats',
      category: 'interior',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
      description: 'Plush leatherette pushback recliners with deep calf support, high headrests, and wide center aisle.'
    },
    {
      id: 'g3',
      title: 'JBL Pro Sound System & Bluetooth Karaoke',
      category: 'amenities',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
      description: 'Party surround acoustics with original JBL drivers, bluetooth smartphone pairing, and singing microphone.'
    },
    {
      id: 'g4',
      title: 'Scenic Pasarni Ghat to Mahabaleshwar',
      category: 'destinations',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
      description: 'Smooth mountain navigation through scenic Western Ghats and strawberry farms in Mahabaleshwar.'
    },
    {
      id: 'g5',
      title: 'Force Urbania Executive 17 Seater',
      category: 'bus',
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80',
      description: 'Mercedes-derived monocoque luxury minibus with panoramic touring windows and dual-zone climate control.'
    },
    {
      id: 'g6',
      title: 'Sacred Ashtavinayak & Shirdi Pilgrimages',
      category: 'destinations',
      image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&auto=format&fit=crop&q=80',
      description: 'Devotional temple yatras conducted with peace, comfort, and timely arrival for VIP darshans and aartis.'
    },
    {
      id: 'g7',
      title: 'Spacious Luggage Boot & Roof Carrier',
      category: 'amenities',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80',
      description: 'Massive trunk space that safely accommodates 20+ heavy suitcases with zero cabin clutter.'
    },
    {
      id: 'g8',
      title: 'Goa Coastal Highway Road Trip',
      category: 'destinations',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
      description: 'Travel to Goa beaches with uninterrupted music, fast phone chargers, and non-stop highway comfort.'
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const filterTabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'bus', label: '⭐ 20-Seater & Fleet' },
    { id: 'interior', label: 'Pushback Interiors' },
    { id: 'amenities', label: 'JBL Sound & Luggage' },
    { id: 'destinations', label: 'Tour Destinations' }
  ];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Camera className="w-4 h-4 text-orange-600" />
            <span>Visual Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Photo Gallery & Fleet Views
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real snapshots of our luxury buses, pushback seating comfort, and tour journeys across Maharashtra.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                activeCategory === tab.id
                  ? 'bg-brand-navy text-white shadow-md shadow-brand-navy/20 scale-105'
                  : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 relative h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest mb-1">
                  Click to Expand
                </span>
                <h4 className="font-extrabold text-sm leading-snug drop-shadow-sm group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-white/20 animate-slideUp text-slate-900 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72 sm:h-96 bg-slate-900">
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition shadow"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-black text-brand-navy">
                  {activeImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeImage.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={createWhatsAppUrl(`Namaskar Siddhivinayak Tours & Travels! I saw the photo: "${activeImage.title}" on your website and would like to enquire about booking.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveImage(null)}
                    className="py-3 px-5 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
