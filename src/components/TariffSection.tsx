import React from 'react';
import { 
  BadgeCheck, 
  HelpCircle, 
  MessageCircle, 
  Info, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Sparkles,
  Receipt
} from 'lucide-react';
import { TARIFF_DATA } from '../data/tariffData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const TariffSection: React.FC = () => {
  return (
    <section id="tariff" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Receipt className="w-4 h-4 text-orange-600" />
            <span>Transparent Pricing & Tariffs</span>
          </div>
          <h2 id="tariff-table-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Clear, Honest & Budget-Friendly Rates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No hidden costs. Best guaranteed rates in Pune for luxury 20-Seater AC Bus, Force Urbania, and Tempo Travellers.
          </p>
        </div>

        {/* Responsive Table Wrapper per modern-web-guidance */}
        <div 
          tabIndex={0} 
          role="region" 
          aria-labelledby="tariff-table-heading"
          className="rounded-2xl border border-slate-200 shadow-sm overflow-x-auto bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <caption className="sr-only">Siddhivinayak Tours and Travels Bus Rental Tariff and Rate Card</caption>
            
            <thead className="bg-slate-900 text-white sticky top-0 z-10">
              <tr>
                <th scope="col" className="p-4 font-bold tracking-wider">Bus / Vehicle Model</th>
                <th scope="col" className="p-4 font-bold tracking-wider">Seats</th>
                <th scope="col" className="p-4 font-bold tracking-wider">Outstation Rate</th>
                <th scope="col" className="p-4 font-bold tracking-wider">Local (8h / 80km)</th>
                <th scope="col" className="p-4 font-bold tracking-wider">Extra / km</th>
                <th scope="col" className="p-4 font-bold tracking-wider">Driver Bhatta</th>
                <th scope="col" className="p-4 font-bold tracking-wider text-right">Quick Booking</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
              {TARIFF_DATA.map((t) => {
                const whatsappUrl = createWhatsAppUrl(
                  `Namaskar Siddhivinayak Tours & Travels! I am interested in booking *${t.vehicle}* (${t.capacity}). Rate: ${t.ratePerKm}. Please confirm availability and send quote.`
                );

                return (
                  <tr 
                    key={t.id} 
                    className={`hover:bg-slate-50 transition-colors ${
                      t.isStar ? 'bg-orange-50/40 font-semibold' : ''
                    }`}
                  >
                    <th scope="row" className="p-4 font-bold text-brand-navy">
                      <div>
                        <span>{t.vehicle}</span>
                        <div className="text-[11px] text-orange-600 font-marathi font-medium">
                          {t.marathiVehicle}
                        </div>
                      </div>
                    </th>

                    <td className="p-4 whitespace-nowrap">
                      <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-bold text-xs">
                        {t.seats} Seats
                      </span>
                    </td>

                    <td className="p-4 font-extrabold text-orange-600 whitespace-nowrap">
                      {t.ratePerKm}
                    </td>

                    <td className="p-4 whitespace-nowrap text-brand-navy font-bold">
                      {t.localPackage}
                    </td>

                    <td className="p-4 whitespace-nowrap text-slate-500">
                      {t.extraKmRate}
                    </td>

                    <td className="p-4 whitespace-nowrap text-slate-500">
                      {t.driverAllowance}
                    </td>

                    <td className="p-4 text-right whitespace-nowrap">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-sm transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Terms & Notes Banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-navy">Minimum Outstation Run</div>
              <p className="mt-0.5 text-slate-500">300 km calendar day basis (12:00 AM to 11:59 PM). Unused km cannot be carried forward.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <Receipt className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-navy">Toll, Parking & State Tax</div>
              <p className="mt-0.5 text-slate-500">Actual toll taxes, parking entry fees, and interstate permits are payable directly or bundled on request.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-brand-navy">Fixed Package Discount</div>
              <p className="mt-0.5 text-slate-500">Contact us on WhatsApp for all-inclusive lumpsum quotes for Mahabaleshwar, Shirdi, Goa, & Ashtavinayak.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
