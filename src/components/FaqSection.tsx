import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const whatsappFaqUrl = createWhatsAppUrl(
    'Namaskar Siddhivinayak Tours & Travels! I have a question regarding bus booking and payment terms. Can you please assist me?'
  );

  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-orange-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Everything you need to know about our luxury buses, facilities, booking process, and pricing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-navy hover:text-orange-600 transition"
                >
                  <div>
                    <span>{item.question}</span>
                    <div className="text-xs text-orange-600 font-marathi font-medium mt-0.5">
                      {item.marathiQuestion}
                    </div>
                  </div>
                  <div className="p-1 rounded-full bg-slate-100 text-slate-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-extrabold text-sm sm:text-base text-brand-navy">
              Have another question not listed here?
            </div>
            <div className="text-xs text-slate-500">
              Speak directly with our booking desk on WhatsApp for prompt answers.
            </div>
          </div>

          <a
            href={whatsappFaqUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-md shadow-emerald-600/20 transition whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
