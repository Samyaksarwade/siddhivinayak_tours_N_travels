import React, { useState } from 'react';
import { 
  Bus, 
  Armchair, 
  Volume2, 
  Snowflake, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { createWhatsAppUrl, getVehicleBookingMsg } from '../utils/whatsapp';

interface Seat {
  number: number;
  label: string;
  type: 'window' | 'aisle' | 'single' | 'back';
  row: number;
}

export const BusSeatLayout: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null);

  // 20-Seater arrangement: 5 rows of 2x1 (15 seats) + 1 back row of 5 seats = 20 seats
  const leftPairs = [
    [{ number: 1, label: 'Window', type: 'window', row: 1 }, { number: 2, label: 'Aisle', type: 'aisle', row: 1 }],
    [{ number: 4, label: 'Window', type: 'window', row: 2 }, { number: 5, label: 'Aisle', type: 'aisle', row: 2 }],
    [{ number: 7, label: 'Window', type: 'window', row: 3 }, { number: 8, label: 'Aisle', type: 'aisle', row: 3 }],
    [{ number: 10, label: 'Window', type: 'window', row: 4 }, { number: 11, label: 'Aisle', type: 'aisle', row: 4 }],
    [{ number: 13, label: 'Window', type: 'window', row: 5 }, { number: 14, label: 'Aisle', type: 'aisle', row: 5 }],
  ];

  const rightSingles = [
    { number: 3, label: 'Single Window', type: 'single', row: 1 },
    { number: 6, label: 'Single Window', type: 'single', row: 2 },
    { number: 9, label: 'Single Window', type: 'single', row: 3 },
    { number: 12, label: 'Single Window', type: 'single', row: 4 },
    { number: 15, label: 'Single Window', type: 'single', row: 5 },
  ];

  const backRow = [
    { number: 16, label: 'Rear Window', type: 'back', row: 6 },
    { number: 17, label: 'Rear Center-Left', type: 'back', row: 6 },
    { number: 18, label: 'Rear Center', type: 'back', row: 6 },
    { number: 19, label: 'Rear Center-Right', type: 'back', row: 6 },
    { number: 20, label: 'Rear Window', type: 'back', row: 6 },
  ];

  const whatsappUrl = createWhatsAppUrl(
    selectedSeat 
      ? `Namaskar Siddhivinayak Tours & Travels! I am looking at your 20-Seater AC Bus seating plan and interested in booking for our group. Please share tariff and availability.`
      : getVehicleBookingMsg('New AC Bus 20 Seater with JBL Sound', '20 Seater 2x1 Pushback')
  );

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Armchair className="w-4 h-4 text-orange-600" />
            <span>Interactive Seating Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            20-Seater Luxury 2x1 Pushback Layout
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            See the exact interior seating arrangement of our flagship 20-Seater AC bus. 
            Enjoy maximum legroom with our spacious 2x1 configuration, wide center aisle, and rear luggage bay.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coach Frame / Seating Blueprint Graphic */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-300 shadow-xl relative">
            {/* Bus Roof Outline */}
            <div className="border-4 border-slate-800 rounded-t-[50px] rounded-b-[24px] bg-slate-100 p-4 sm:p-6 relative max-w-lg mx-auto shadow-inner">
              {/* Front Cabin Windshield */}
              <div className="bg-slate-800 text-white rounded-t-[36px] py-3 px-6 text-center text-xs font-black uppercase tracking-widest flex items-center justify-between mb-6 shadow">
                <span className="flex items-center gap-1.5 text-orange-400">
                  <Bus className="w-4 h-4" /> Front Cabin
                </span>
                <span className="text-[10px] text-slate-300 font-normal">Windshield View</span>
              </div>

              {/* Driver Seat & Entry Door */}
              <div className="flex items-center justify-between pb-6 border-b-2 border-dashed border-slate-300 mb-6 px-2">
                {/* Passenger Entry Door */}
                <div className="border-2 border-emerald-600 bg-emerald-50 text-emerald-800 text-[11px] font-black px-3 py-2 rounded-xl flex items-center gap-1 shadow-sm">
                  <span>Passenger Door ➔</span>
                </div>

                {/* Driver Cockpit */}
                <div className="border-2 border-slate-700 bg-slate-900 text-white text-[11px] font-bold px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <div className="w-4 h-4 rounded-full border-2 border-orange-400 flex items-center justify-center text-[9px] font-black">
                    ◎
                  </div>
                  <span>Chauffeur</span>
                </div>
              </div>

              {/* JBL Front Sound & AC Header */}
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-4 px-2">
                <span className="flex items-center gap-1 text-purple-700">
                  <Volume2 className="w-3.5 h-3.5" /> JBL Pro Speakers
                </span>
                <span className="flex items-center gap-1 text-blue-600">
                  <Snowflake className="w-3.5 h-3.5" /> Arctic Dual AC Louvers
                </span>
              </div>

              {/* Seating Grid (Rows 1 to 5) */}
              <div className="space-y-4">
                {leftPairs.map((pair, rowIdx) => {
                  const single = rightSingles[rowIdx];
                  return (
                    <div key={rowIdx} className="flex items-center justify-between gap-3">
                      {/* Left Pair (2 Seats) */}
                      <div className="flex items-center gap-2">
                        {pair.map((st) => {
                          const isSelected = selectedSeat?.number === st.number;
                          return (
                            <button
                              key={st.number}
                              type="button"
                              onClick={() => setSelectedSeat(st as Seat)}
                              className={`w-11 h-12 sm:w-13 sm:h-14 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-orange-600 text-white border-orange-700 shadow-md scale-105 ring-2 ring-orange-300'
                                  : 'bg-white text-slate-800 border-slate-300 hover:border-orange-500 hover:bg-orange-50/50 shadow-sm'
                              }`}
                            >
                              <Armchair className="w-4 h-4" />
                              <span className="text-[11px] font-black mt-0.5">{st.number}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Center Walking Aisle */}
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider select-none px-1">
                        Aisle
                      </div>

                      {/* Right Single Recliner (1 Seat) */}
                      <div>
                        {(() => {
                          const isSelected = selectedSeat?.number === single.number;
                          return (
                            <button
                              type="button"
                              onClick={() => setSelectedSeat(single as Seat)}
                              className={`w-11 h-12 sm:w-13 sm:h-14 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                isSelected
                                  ? 'bg-orange-600 text-white border-orange-700 shadow-md scale-105 ring-2 ring-orange-300'
                                  : 'bg-white text-slate-800 border-slate-300 hover:border-orange-500 hover:bg-orange-50/50 shadow-sm'
                              }`}
                            >
                              <Armchair className="w-4 h-4" />
                              <span className="text-[11px] font-black mt-0.5">{single.number}</span>
                            </button>
                          );
                        })()}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Back Row (5 Seats) */}
              <div className="pt-6 border-t-2 border-dashed border-slate-300 mt-6">
                <div className="text-[10px] text-slate-500 font-bold text-center mb-2 uppercase tracking-wider">
                  Back Row (5 Pushback Seats)
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {backRow.map((st) => {
                    const isSelected = selectedSeat?.number === st.number;
                    return (
                      <button
                        key={st.number}
                        type="button"
                        onClick={() => setSelectedSeat(st as Seat)}
                        className={`h-12 rounded-xl border flex flex-col items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-orange-600 text-white border-orange-700 shadow-md scale-105 ring-2 ring-orange-300'
                            : 'bg-white text-slate-800 border-slate-300 hover:border-orange-500 hover:bg-orange-50/50 shadow-sm'
                        }`}
                      >
                        <Armchair className="w-4 h-4" />
                        <span className="text-[11px] font-black mt-0.5">{st.number}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rear Luggage Boot & Emergency Exit */}
              <div className="mt-6 pt-3 border-t-2 border-slate-400 bg-slate-800 text-white p-3 rounded-b-xl flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-amber-400">
                  <ShieldCheck className="w-4 h-4" /> Massive Luggage Boot
                </span>
                <span className="text-red-400 text-[11px]">
                  Emergency Door Exit 🚨
                </span>
              </div>
            </div>
          </div>

          {/* Seat Details & Features Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                  Seat Inspector
                </span>
                <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-600 font-bold">
                  20 Seater Coach
                </span>
              </div>

              {selectedSeat ? (
                <div className="space-y-3 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-orange-600/30">
                      {selectedSeat.number}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-base text-brand-navy">
                        Seat #{selectedSeat.number} ({selectedSeat.label})
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        Row {selectedSeat.row} &bull; 100% Pushback Recliner
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fitted with ergonomic soft-cushioned foam, high headrest, calf support, 
                    dedicated overhead AC louver, reading lamp, and USB fast phone charger.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-orange-50/70 rounded-2xl border border-orange-100 text-xs text-orange-950 space-y-1">
                  <p className="font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-orange-600" /> Click any seat to inspect
                  </p>
                  <p className="text-orange-900/80">
                    All 20 seats are premium pushback recliners. Single seats on the right side offer privacy, while pairs on the left are ideal for couples and families.
                  </p>
                </div>
              )}

              {/* Layout Highlights List */}
              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>2x1 Seating Layout:</strong> Extra wide walking aisle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>135° Recline Angle:</strong> Fatigue-free sleep on ghats</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Overhead Luggage Racks:</strong> Ample storage space</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>JBL Sound Placement:</strong> Balanced acoustics</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve 20-Seater on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
