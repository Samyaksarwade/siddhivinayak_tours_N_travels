import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sunil Jagtap & Family',
      location: 'Kothrud, Pune',
      tour: 'Ashtavinayak Darshan 8 Temples Tour',
      vehicle: 'New AC Bus 20 Seater',
      rating: 5,
      date: 'October 2026',
      comment: 'We booked the 20-Seater AC Bus for our 3-generation family Ashtavinayak Yatra. The bus was sparkling clean! The pushback seats were a blessing for my 72-year-old mother. The JBL sound system played Ganpati bhajans crystal clear throughout the journey. Driver Santosh was very polite and punctual. Highly recommended!',
    },
    {
      id: 2,
      name: 'Mahesh Deshmukh (Infosys Team)',
      location: 'Hinjewadi, Pune',
      tour: 'Corporate Offsite to Mahabaleshwar',
      vehicle: 'Force Urbania 17 Seater',
      rating: 5,
      date: 'September 2026',
      comment: 'Organized a 2-day team outing for 15 colleagues. Booking via WhatsApp with Vijay Pawar was super smooth. The Urbania was brand new, AC was freezing cold even during the afternoon heat, and we connected our phone to the sound system for non-stop music. Zero hassle on the Pasarni ghat.',
    },
    {
      id: 3,
      name: 'Pooja & Rohan Kulkarni',
      location: 'Pimpri-Chinchwad (PCMC)',
      tour: 'Marriage Guest & Baraat Transportation',
      vehicle: '20 Seater AC Bus + Tempo Traveller',
      rating: 5,
      date: 'August 2026',
      comment: 'Siddhivinayak Travels managed all our wedding guest transfers from Pune Railway Station to the wedding lawn in Alandi. Vijay ji personally ensured both buses arrived 20 minutes before time. Courteous chauffeurs and very reasonable rates. Travel with Trust indeed!',
    },
    {
      id: 4,
      name: 'Anand Patil & Friends',
      location: 'Hadapsar, Pune',
      tour: 'Pune to Goa 4-Day Coastal Road Trip',
      vehicle: 'New AC Bus 20 Seater with JBL Sound',
      rating: 5,
      date: 'September 2026',
      comment: 'What a road trip! 18 friends traveling together to Goa. The JBL speakers and subwoofer kept the party alive for all 10 hours. The massive roof luggage carrier accommodated all our bags easily. We will never book any other travels for our group tours!',
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Real Traveler Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Loved by Families & Corporates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Over 1,000+ completed group trips across Maharashtra with an average rating of 4.9/5 stars.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-brand-navy">
                    {rev.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {rev.location} &bull; <span className="text-orange-600 font-semibold">{rev.tour}</span>
                  </p>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    {rev.vehicle}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-600/30">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <div className="font-extrabold text-brand-navy text-base">
                Safe Journey... Happy Journey... &bull; 100% Punctual Service
              </div>
              <div className="text-xs text-slate-600 font-marathi">
                &ldquo;प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे...&rdquo;
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <a
              href="#quote"
              className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs transition"
            >
              Book Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
