import React, { useState } from 'react';
import { 
  Bus, 
  MapPin, 
  Calendar, 
  Users, 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl, getQuoteMsg } from '../utils/whatsapp';

export const WhatsAppBookingCard: React.FC = () => {
  const [pickup, setPickup] = useState('Pune');
  const [destination, setDestination] = useState('');
  const [vehicle, setVehicle] = useState('New AC Bus 20 Seater');
  const [startDate, setStartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('18-20');
  const [tripType, setTripType] = useState('Round Trip');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = getQuoteMsg({
      pickup,
      destination: destination || 'Custom Destination',
      vehicle,
      startDate: startDate || 'Upcoming',
      returnDate: returnDate || 'Same/Next day',
      passengers,
      tripType,
      customerName,
      notes
    });
    window.open(createWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="quote" className="py-16 lg:py-24 bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Direct WhatsApp Quotation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Plan Your Journey in 60 Seconds
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Fill in your trip details below. Our WhatsApp system will format a complete booking request and connect you instantly with proprietor <span className="text-orange-400 font-bold">Vijay Pawar</span>.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Trip Type Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {['Round Trip Outstation', 'One Way Drop', 'Local City (8h/80km)', 'Multi-Day Maharashtra Tour'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  className={`py-2 px-3.5 rounded-xl text-xs font-bold transition ${
                    tripType === type
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {/* Pickup */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  Pickup Point
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, PCMC, Kothrud, Hinjewadi"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mahabaleshwar, Shirdi, Goa, Ashtavinayak"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  required
                />
              </div>

              {/* Vehicle */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Bus className="w-3.5 h-3.5 text-blue-600" />
                  Select Bus / Traveller
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full text-xs sm:text-sm font-bold text-brand-navy rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                >
                  <option value="⭐ New AC Bus 20 Seater (Banner Special - JBL Sound)">
                    ⭐ New AC Bus 20 Seater (Banner Special)
                  </option>
                  <option value="Force Urbania 17 Seater Luxury">Force Urbania 17 Seater Luxury</option>
                  <option value="Force Urbania 13 Seater VIP">Force Urbania 13 Seater VIP</option>
                  <option value="Luxury Tempo Traveller 17 Seater">Luxury Tempo Traveller 17 Seater</option>
                  <option value="Deluxe Tempo Traveller 26 Seater">Deluxe Tempo Traveller 26 Seater</option>
                  <option value="Executive Mini Bus 32 Seater">Executive Mini Bus 32 Seater</option>
                  <option value="Super Deluxe Coach 45/50 Seater">Super Deluxe Coach 45/50 Seater</option>
                  <option value="Toyota Innova Crysta / Ertiga (6-7 Seater)">Innova Crysta / Ertiga (6-7 Seater)</option>
                </select>
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Departure Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  Passenger Count
                </label>
                <input
                  type="text"
                  placeholder="e.g. 18-20 Persons"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Notes / Preferences
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need roof luggage carrier, early morning 4 AM start, senior citizens on board"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-xs sm:text-sm font-medium rounded-xl border border-slate-300 bg-slate-50 p-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero spam &bull; Direct quotation from owner Vijay Pawar on WhatsApp</span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send Booking Request to WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
