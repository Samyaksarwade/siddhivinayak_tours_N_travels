import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Calendar, 
  Bus, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock
} from 'lucide-react';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const DynamicFareCalculator: React.FC = () => {
  // Preset popular routes
  const presetRoutes = [
    { name: 'Pune ➔ Mahabaleshwar & Panchgani', km: 260, days: 2, note: 'Round Trip via Pasarni Ghat' },
    { name: 'Pune ➔ Shirdi Sai Baba Darshan', km: 400, days: 2, note: 'Round Trip via Ahmednagar Highway' },
    { name: 'Pune ➔ Ashtavinayak 8 Temples Yatra', km: 680, days: 3, note: 'Complete 8 Mandirs Sacred Circuit' },
    { name: 'Pune ➔ Goa Coastal Holiday', km: 950, days: 4, note: 'Round Trip via Kolhapur & Amboli' },
    { name: 'Pune ➔ Mumbai Airport Transfer', km: 160, days: 1, note: 'Expressway Drop via Tollway' },
    { name: 'Pune ➔ Lonavala & Imagica', km: 140, days: 1, note: '1-Day Fun Day Picnic' },
  ];

  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [distanceKm, setDistanceKm] = useState<number>(presetRoutes[0].km);
  const [numDays, setNumDays] = useState<number>(presetRoutes[0].days);
  const [selectedVehicle, setSelectedVehicle] = useState<'bus20' | 'urbania17' | 'tempo17'>('bus20');

  const handleSelectPreset = (idx: number) => {
    setSelectedPresetIndex(idx);
    setDistanceKm(presetRoutes[idx].km);
    setNumDays(presetRoutes[idx].days);
  };

  // Pricing formula:
  // Minimum km per day = 300 km
  // Billable km = Math.max(distanceKm, numDays * 300)
  const minKm = numDays * 300;
  const billableKm = Math.max(distanceKm, minKm);

  const vehicleRates = {
    bus20: { name: '⭐ New AC Bus 20 Seater (Banner Special)', ratePerKm: 27, bhattaPerDay: 500, seats: 20 },
    urbania17: { name: 'Force Urbania 17 Seater Luxury', ratePerKm: 29, bhattaPerDay: 500, seats: 17 },
    tempo17: { name: 'Luxury Tempo Traveller 17 Seater', ratePerKm: 23, bhattaPerDay: 400, seats: 17 },
  };

  const activeVehicle = vehicleRates[selectedVehicle];
  const kmCost = billableKm * activeVehicle.ratePerKm;
  const bhattaCost = numDays * activeVehicle.bhattaPerDay;
  const totalEstimatedFare = kmCost + bhattaCost;

  const whatsappMessage = `*Namaskar Siddhivinayak Tours & Travels!* 🙏
I used your Website Fare Calculator for:
📍 *Route / Distance:* ${distanceKm} km (${presetRoutes[selectedPresetIndex]?.name || 'Custom Route'})
⏳ *Duration:* ${numDays} Days
🚐 *Vehicle:* ${activeVehicle.name}
💰 *Estimated Fare:* Approx ₹${totalEstimatedFare.toLocaleString('en-IN')} (Includes ${billableKm} km + ₹${bhattaCost} Driver Bhatta)

Please confirm exact final quote, toll estimate, and booking availability.`;

  const whatsappUrl = createWhatsAppUrl(whatsappMessage);

  return (
    <section id="fare-calculator" className="py-16 lg:py-24 bg-gradient-to-b from-orange-50/50 via-white to-slate-50 relative overflow-hidden">
      {/* Decorative Traditional Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-sm border border-orange-200">
            <Calculator className="w-4 h-4 text-orange-600" />
            <span>Interactive Live Rate Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Calculate Your Trip Fare Instantly
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            No guessing games. Select your route or adjust kilometers below to see real-time estimated charges for the 
            <span className="text-orange-600 font-bold"> 20-Seater AC Bus</span> and Travellers.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-orange-200 shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Quick Route Preset Pills */}
          <div className="mb-8">
            <label className="block text-xs font-black text-brand-navy uppercase tracking-wider mb-3">
              Popular Routes (Click to Auto-Calculate):
            </label>
            <div className="flex flex-wrap gap-2">
              {presetRoutes.map((route, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectPreset(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedPresetIndex === idx
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-102 ring-2 ring-orange-300'
                      : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-orange-50 hover:border-orange-300'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{route.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ml-1 ${
                    selectedPresetIndex === idx ? 'bg-orange-700 text-white' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {route.km} km
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Vehicle Chooser Buttons */}
              <div>
                <label className="block text-xs font-black text-brand-navy uppercase tracking-wider mb-2">
                  1. Choose Vehicle:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setSelectedVehicle('bus20')}
                    className={`p-3 rounded-xl border text-left transition ${
                      selectedVehicle === 'bus20'
                        ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-400/40 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded">
                        Star Coach
                      </span>
                      <span className="text-xs font-bold text-slate-500">20 Seats</span>
                    </div>
                    <div className="font-extrabold text-xs text-brand-navy mt-1">New 20 Seater AC Bus</div>
                    <div className="text-[11px] text-orange-600 font-bold mt-0.5">₹27 / km</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVehicle('urbania17')}
                    className={`p-3 rounded-xl border text-left transition ${
                      selectedVehicle === 'urbania17'
                        ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-400/40 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded">
                        Luxury
                      </span>
                      <span className="text-xs font-bold text-slate-500">17 Seats</span>
                    </div>
                    <div className="font-extrabold text-xs text-brand-navy mt-1">Force Urbania 17</div>
                    <div className="text-[11px] text-blue-600 font-bold mt-0.5">₹29 / km</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedVehicle('tempo17')}
                    className={`p-3 rounded-xl border text-left transition ${
                      selectedVehicle === 'tempo17'
                        ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-400/40 shadow-sm'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-100 px-1.5 py-0.5 rounded">
                        Economical
                      </span>
                      <span className="text-xs font-bold text-slate-500">17 Seats</span>
                    </div>
                    <div className="font-extrabold text-xs text-brand-navy mt-1">Tempo Traveller 17</div>
                    <div className="text-[11px] text-emerald-600 font-bold mt-0.5">₹23 / km</div>
                  </button>
                </div>
              </div>

              {/* Distance Slider */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-600" />
                    Total Travel Distance:
                  </label>
                  <span className="text-base font-black text-brand-navy bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                    {distanceKm} km
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="10"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                  <span>100 km (Local/Nearby)</span>
                  <span>500 km (Weekend Trip)</span>
                  <span>1200 km (Long Tour)</span>
                </div>
              </div>

              {/* Days Stepper */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" /> Number of Days:
                  </div>
                  <div className="text-[11px] text-slate-500">Standard min 300 km/day outstation</div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setNumDays(Math.max(1, numDays - 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-black text-slate-700 hover:bg-slate-100 flex items-center justify-center shadow-sm"
                  >
                    -
                  </button>
                  <span className="font-black text-base text-brand-navy min-w-[32px] text-center">
                    {numDays} {numDays === 1 ? 'Day' : 'Days'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setNumDays(Math.min(10, numDays + 1))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-300 font-black text-slate-700 hover:bg-slate-100 flex items-center justify-center shadow-sm"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Price Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-2xl relative border-2 border-orange-500/40">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Real-Time Fare Estimate
                </span>
                <span className="text-[10px] bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                  Guaranteed Rate
                </span>
              </div>

              {/* Total Price Display */}
              <div className="py-5 text-center bg-white/5 rounded-2xl my-4 border border-white/10">
                <div className="text-xs text-slate-300">Estimated Total Vehicle Rental</div>
                <div className="text-3xl sm:text-4xl font-black text-white mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">
                  ₹{totalEstimatedFare.toLocaleString('en-IN')}*
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  For {activeVehicle.name} ({activeVehicle.seats} Pushback Seats)
                </div>
              </div>

              {/* Cost Breakdown Details */}
              <div className="space-y-2 text-xs py-2 border-b border-white/10">
                <div className="flex justify-between text-slate-300">
                  <span>Billable Distance ({billableKm} km @ ₹{activeVehicle.ratePerKm}/km):</span>
                  <span className="font-bold text-white">₹{kmCost.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Driver Bhatta ({numDays} days @ ₹{activeVehicle.bhattaPerDay}/day):</span>
                  <span className="font-bold text-white">₹{bhattaCost.toLocaleString('en-IN')}</span>
                </div>
                {minKm > distanceKm && (
                  <div className="text-[10px] text-amber-300 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                    ℹ️ Note: Minimum standard billing of 300 km/day applied ({numDays * 300} km).
                  </div>
                )}
              </div>

              <div className="text-[10px] text-slate-400 py-2">
                *Toll tax, parking tickets, and interstate permits payable at actuals or can be bundled.
              </div>

              {/* Direct WhatsApp Booking Button */}
              <div className="pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/40 transition transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book with This Fare on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
