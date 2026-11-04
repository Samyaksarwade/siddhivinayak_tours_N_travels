import React, { useState } from 'react';
import { 
  Bus, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  Volume2, 
  Snowflake, 
  Armchair, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl, getQuoteMsg } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  // Quick booking quote state
  const [pickup, setPickup] = useState('Pune');
  const [destination, setDestination] = useState('Mahabaleshwar');
  const [vehicle, setVehicle] = useState('New AC Bus 20 Seater (Banner Special)');
  const [startDate, setStartDate] = useState('');
  const [passengers, setPassengers] = useState('18-20');
  const [tripType, setTripType] = useState('Round Trip');

  const handleInstantQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = getQuoteMsg({
      pickup,
      destination,
      vehicle,
      startDate: startDate || 'Upcoming Date',
      returnDate: 'As per itinerary',
      passengers,
      tripType
    });
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  const genericWhatsAppUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Tours & Travels! I want to enquire about booking the 20 Seater AC Bus for our trip. Please share availability and best package rates.'
  );

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-brand-navy to-slate-900 text-white pt-8 pb-16 lg:py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FF6B00_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Marathi Motto Marquee / Banner Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm font-medium text-orange-200 font-marathi">
              ॥ श्री सिद्धिविनायक ॥ &bull; &ldquo;प्रवास फक्त एक ठिकाणापर्यंत नाही... तर आठवणींच्या सफरीपर्यंत आहे...&rdquo;
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headlines, Star Badges & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Star Highlight Tag */}
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-lg shadow-lg shadow-orange-600/30">
              <Bus className="w-4 h-4" />
              <span>NEW AC BUS 20 SEATER ON RENT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-tight">
              Safe Journey... <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Happy Journey...
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <span className="text-white font-semibold">Siddhivinayak Tours & Travels</span>. 
              Experience the gold standard in group travel across Maharashtra with our brand-new fleet of 
              <span className="text-orange-400 font-bold"> 20-Seater AC Luxury Buses</span>, 
              Force Urbania, and Tempo Travellers. Equipped with powerful dual AC, 
              JBL premium surround sound, and 100% ergonomic pushback seats.
            </p>

            {/* Banner Key Feature Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                  <Snowflake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Powerful AC</div>
                  <div className="text-[10px] text-slate-400">Arctic Cooling</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                  <Volume2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">JBL Sound</div>
                  <div className="text-[10px] text-slate-400">Bluetooth & Mic</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-orange-500/20 text-orange-400">
                  <Armchair className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">All Pushback</div>
                  <div className="text-[10px] text-slate-400">Plush Recliners</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Safe & Comfy</div>
                  <div className="text-[10px] text-slate-400">100% Sanitized</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Expert Driver</div>
                  <div className="text-[10px] text-slate-400">Western Ghats Pro</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-2.5 flex items-center gap-2.5 text-left">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">On-Time Always</div>
                  <div className="text-[10px] text-slate-400">24/7 Available</div>
                </div>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href={genericWhatsAppUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base flex items-center justify-center gap-3 shadow-lg shadow-emerald-600/40 hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

              <a 
                href={`tel:${PHONE_NUMBER_INTL}`} 
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base flex items-center justify-center gap-2.5 backdrop-blur-md transition-colors"
              >
                <Phone className="w-5 h-5 text-orange-400" />
                <span>Call: {PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Trust Footnote */}
            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1 text-amber-400">
                ★★★★★ <span className="text-white font-semibold">4.9/5</span>
              </span>
              <span>•</span>
              <span>1000+ Completed Tours</span>
              <span>•</span>
              <span>Owner: Digital Vijay U. Pawar</span>
            </div>
          </div>

          {/* Right Column: Instant WhatsApp Fare Calculator Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 relative">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Quick Booking & Fare Enquiry
                  </span>
                  <h3 className="text-xl font-black text-brand-navy">Get Instant WhatsApp Quote</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleInstantQuote} className="space-y-4 pt-4">
                {/* Trip Type Selector */}
                <div className="grid grid-cols-3 gap-2 text-xs font-bold text-center">
                  {['Round Trip', 'One Way', 'Local (8h/80km)'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setTripType(type)}
                      className={`py-2 px-2 rounded-lg border transition ${
                        tripType === type 
                          ? 'bg-brand-navy text-white border-brand-navy shadow-sm' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                {/* Pickup & Destination */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-600" /> Pickup City / Area
                    </label>
                    <select
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="w-full text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 p-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="Pune (City / PCMC)">Pune (City / PCMC)</option>
                      <option value="Hinjewadi / Wakad">Hinjewadi / Wakad</option>
                      <option value="Kothrud / Swargate">Kothrud / Swargate</option>
                      <option value="Hadapsar / Kharadi">Hadapsar / Kharadi</option>
                      <option value="Pune Airport / Railway Station">Pune Airport / Station</option>
                      <option value="Mumbai / Navi Mumbai">Mumbai / Navi Mumbai</option>
                      <option value="Other Location">Other Location</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 p-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    >
                      <option value="Mahabaleshwar & Panchgani">Mahabaleshwar & Panchgani</option>
                      <option value="Shirdi & Shani Shingnapur">Shirdi & Shani Shingnapur</option>
                      <option value="Ashtavinayak Darshan (8 Temples)">Ashtavinayak Darshan</option>
                      <option value="Goa Beach Vacation">Goa Beach Vacation</option>
                      <option value="Mumbai Airport / City">Mumbai Airport / City</option>
                      <option value="Lonavala & Khandala">Lonavala & Khandala</option>
                      <option value="Bhimashankar & Trimbakeshwar">Bhimashankar / Trimbak</option>
                      <option value="Custom Outstation Destination">Custom Outstation</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Bus className="w-3.5 h-3.5 text-orange-600" /> Select Bus / Traveller
                  </label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 p-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none font-bold text-brand-navy"
                  >
                    <option value="⭐ New AC Bus 20 Seater (Banner Special - JBL Sound)">
                      ⭐ New AC Bus 20 Seater (Banner Special - JBL Sound)
                    </option>
                    <option value="Force Urbania 17 Seater Luxury">Force Urbania 17 Seater Luxury</option>
                    <option value="Force Urbania 13 Seater VIP">Force Urbania 13 Seater VIP</option>
                    <option value="Luxury Tempo Traveller 17 Seater">Luxury Tempo Traveller 17 Seater</option>
                    <option value="Deluxe Tempo Traveller 26 Seater">Deluxe Tempo Traveller 26 Seater</option>
                    <option value="Executive Mini Bus 32 Seater">Executive Mini Bus 32 Seater</option>
                    <option value="Super Deluxe Coach 45/50 Seater">Super Deluxe Coach 45/50 Seater</option>
                    <option value="Innova Crysta / Ertiga (6-7 Seater)">Innova Crysta / Ertiga (6-7 Seater)</option>
                  </select>
                </div>

                {/* Dates & Passengers */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" /> Travel Date
                    </label>
                    <input 
                      type="date" 
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 p-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-500" /> Approx Passengers
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 15-20 people" 
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full text-xs font-medium rounded-lg border border-slate-200 bg-slate-50 p-2.5 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Request on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>

                <div className="text-center">
                  <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 
                    Instant reply within 5 mins &bull; 100% Best price guarantee
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
