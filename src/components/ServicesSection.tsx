import React from 'react';
import { 
  Compass, 
  Users, 
  Briefcase, 
  Plane, 
  GraduationCap, 
  HeartHandshake, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/servicesData';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Plane': return <Plane className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>As Featured on Our Official Banner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
            Our Premium Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dedicated group transportation tailored for weddings, corporate offsites, airport drops, and family reunions.
          </p>
        </div>

        {/* Services Grid (6 Core Banner Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv) => {
            const whatsappUrl = createWhatsAppUrl(
              `Namaskar Siddhivinayak Tours & Travels! I want to enquire about your service: *${srv.title}*. Please share bus options and quote.`
            );

            return (
              <div
                key={srv.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 text-orange-600 flex items-center justify-center shadow-inner">
                      {getIcon(srv.iconName)}
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {srv.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-brand-navy">
                      {srv.title}
                    </h3>
                    <div className="text-xs text-orange-600 font-marathi font-medium mt-0.5">
                      {srv.marathiTitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {srv.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl border border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
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
