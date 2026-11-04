import React, { useState } from 'react';
import { MessageCircle, Phone, X, Bus, Sparkles, Send } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl, getVehicleBookingMsg } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const starBusWhatsAppUrl = createWhatsAppUrl(
    getVehicleBookingMsg('New AC Bus 20 Seater with JBL Sound', '20 Seater + 1 Driver')
  );

  const quickQuoteUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Travels! I would like to get an instant fare quote for an upcoming trip from Pune. Please share pricing and bus options.'
  );

  const directChatUrl = createWhatsAppUrl(
    'Namaskar Vijay Sir! I am visiting your website and would like to speak directly regarding booking a bus for our group.'
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end pointer-events-auto">
      {/* Quick Popup Card when WhatsApp button is clicked */}
      {isOpen && (
        <div 
          className="mb-3 w-72 sm:w-88 bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden animate-slideUp text-slate-900"
          role="dialog"
          aria-label="WhatsApp quick chat"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-3.5 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-xs sm:text-sm leading-tight">Siddhivinayak Travels</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                  Online &bull; Vijay U. Pawar
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 text-white transition"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick options */}
          <div className="p-3.5 bg-slate-50 space-y-2.5">
            <p className="text-xs text-slate-600 font-medium">
              Namaskar! Select an option below for instant WhatsApp response:
            </p>

            <div className="space-y-1.5">
              <a
                href={starBusWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full p-2.5 rounded-xl bg-white hover:bg-orange-50 border border-slate-200 hover:border-orange-300 text-left text-xs font-bold text-brand-navy flex items-center justify-between transition shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>Book 20-Seater AC Bus</span>
                </span>
                <Send className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <a
                href={quickQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-left text-xs font-bold text-brand-navy flex items-center justify-between transition shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Get Fare Quotation</span>
                </span>
                <Send className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>

              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full p-2.5 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left text-xs font-bold text-brand-navy flex items-center justify-between transition shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Chat with Vijay Pawar</span>
                </span>
                <Send className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </a>
            </div>
          </div>

          <div className="p-2.5 bg-white border-t border-slate-100 text-center text-[10px] text-slate-500">
            Call: <a href={`tel:${PHONE_NUMBER_INTL}`} className="font-bold text-slate-800 hover:text-orange-600">{PHONE_DISPLAY}</a>
          </div>
        </div>
      )}

      {/* Floating Buttons Group (Clean, Non-overlapping pill layout) */}
      <div className="flex items-center gap-2">
        {/* Quick Call Pill */}
        <a
          href={`tel:${PHONE_NUMBER_INTL}`}
          className="px-3.5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs flex items-center gap-2 shadow-xl border border-slate-700 transition active:scale-95"
          title={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span className="hidden sm:inline">Call Us</span>
        </a>

        {/* Floating WhatsApp Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl pulse-whatsapp transition-all duration-300 transform hover:scale-105 flex items-center justify-center focus:outline-none"
          aria-label="Open WhatsApp chat options"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="sr-only">Open WhatsApp chat</span>
        </button>
      </div>
    </div>
  );
};
