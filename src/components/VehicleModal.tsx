import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Users, 
  Snowflake, 
  Volume2, 
  Armchair, 
  Luggage, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Phone,
  Sparkles,
  Zap
} from 'lucide-react';
import { FLEET_DATA, Vehicle } from '../data/fleetData';
import { PHONE_DISPLAY, PHONE_NUMBER_INTL, createWhatsAppUrl, getVehicleBookingMsg } from '../utils/whatsapp';

interface VehicleModalProps {
  vehicleId: string | null;
  onClose: () => void;
}

export const VehicleModal: React.FC<VehicleModalProps> = ({ vehicleId, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const vehicle = FLEET_DATA.find(v => v.id === vehicleId);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (vehicleId) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [vehicleId]);

  // Handle click on backdrop for light-dismiss
  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      onClose();
    }
  };

  if (!vehicle) return null;

  const whatsappBookingUrl = createWhatsAppUrl(
    getVehicleBookingMsg(vehicle.name, vehicle.capacity)
  );

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="vehicle-dialog-title"
      className="p-0 rounded-3xl max-w-3xl w-[92vw] shadow-2xl border border-slate-200 bg-white text-slate-900 m-auto focus:outline-none"
    >
      <div className="flex flex-col max-h-[88vh]">
        {/* Header with image & close button */}
        <div className="relative h-60 sm:h-72 bg-slate-900 overflow-hidden shrink-0">
          <img 
            src={vehicle.image} 
            alt={vehicle.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition shadow-md"
            aria-label="Close dialog"
            autoFocus
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {vehicle.isStar && (
              <span className="bg-orange-600 text-white text-xs font-black px-3 py-1 rounded-md uppercase tracking-wider shadow">
                ⭐ Star Vehicle
              </span>
            )}
            <span className="bg-white/90 text-brand-navy font-bold text-xs px-3 py-1 rounded-md shadow flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-orange-600" />
              {vehicle.capacity}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs text-orange-300 font-marathi font-medium">
              {vehicle.marathiName}
            </div>
            <h2 id="vehicle-dialog-title" className="text-xl sm:text-2xl font-black">
              {vehicle.name}
            </h2>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-sm text-slate-600 leading-relaxed">
            {vehicle.description}
          </p>

          {/* Key Amenities Grid */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Onboard Amenities & Comfort
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 flex items-start gap-3">
                <Snowflake className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-brand-navy">Air Conditioning</div>
                  <div className="text-xs text-slate-600">{vehicle.acType}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 flex items-start gap-3">
                <Volume2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-brand-navy">Sound & Entertainment</div>
                  <div className="text-xs text-slate-600">{vehicle.audioSystem}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
                <Armchair className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-brand-navy">Seating Arrangement</div>
                  <div className="text-xs text-slate-600">{vehicle.seatingConfig}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <Luggage className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-brand-navy">Luggage Storage</div>
                  <div className="text-xs text-slate-600">{vehicle.luggageCapacity}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Technical & Safety Specifications
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Charging Ports:</span>
                <span className="font-semibold text-slate-800">{vehicle.specs.chargingPorts}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Audio System:</span>
                <span className="font-semibold text-slate-800">{vehicle.specs.entertainment}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-200">
                <span className="text-slate-500">Safety System:</span>
                <span className="font-semibold text-slate-800">{vehicle.specs.safety}</span>
              </div>
              {vehicle.specs.suspension && (
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Suspension Type:</span>
                  <span className="font-semibold text-slate-800">{vehicle.specs.suspension}</span>
                </div>
              )}
            </div>
          </div>

          {/* Best Suited For */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Recommended Use Cases
            </h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.bestFor.map((item, idx) => (
                <span 
                  key={idx}
                  className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 shrink-0 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Book this {vehicle.name} on WhatsApp</span>
          </a>

          <a
            href={`tel:${PHONE_NUMBER_INTL}`}
            className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-slate-300 bg-white text-brand-navy hover:bg-slate-100 font-bold text-sm flex items-center justify-center gap-2 transition"
          >
            <Phone className="w-4 h-4 text-orange-600" />
            <span>Call: {PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </dialog>
  );
};
