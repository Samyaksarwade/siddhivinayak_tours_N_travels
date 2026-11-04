export const PHONE_NUMBER = '9359834116';
export const PHONE_NUMBER_INTL = '+919359834116';
export const PHONE_DISPLAY = '+91 9359834116';
export const OWNER_NAME = 'Vijay U. Pawar';
export const WEBSITE_URL = 'https://www.siddhivinayaktravel.com';

/**
 * Creates a formatted WhatsApp URL with pre-filled message
 */
export function createWhatsAppUrl(message: string): string {
  const cleanPhone = '91' + PHONE_NUMBER.replace(/\D/g, '').slice(-10);
  const encodedMsg = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

/**
 * Creates a structured vehicle booking message
 */
export function getVehicleBookingMsg(vehicleName: string, capacity?: string): string {
  return `*Namaskar Siddhivinayak Tours & Travels!* 🙏
I am interested in booking:
🚐 *Vehicle:* ${vehicleName} ${capacity ? `(${capacity})` : ''}

Please share:
1. Availability & Tariff per km / day
2. AC & Pushback seat details
3. Booking confirmation procedure

Looking forward to your quick response!`;
}

/**
 * Creates a structured tour package enquiry message
 */
export function getTourPackageMsg(tourTitle: string, duration?: string, recommendedBus?: string): string {
  return `*Namaskar Siddhivinayak Tours & Travels!* 🙏
I would like to enquire about the tour package:
📍 *Tour:* ${tourTitle}
⏳ *Duration:* ${duration || 'As per package'}
🚌 *Preferred Vehicle:* ${recommendedBus || '20 Seater AC Bus / Urbania'}

Please provide the package itinerary, bus details, and all-inclusive quote. Thank you!`;
}

/**
 * Creates an instant quote calculator message
 */
export interface QuoteRequest {
  pickup: string;
  destination: string;
  vehicle: string;
  startDate: string;
  returnDate: string;
  passengers: string;
  tripType: string;
  customerName?: string;
  notes?: string;
}

export function getQuoteMsg(req: QuoteRequest): string {
  return `*Namaskar Siddhivinayak Tours & Travels!* 🙏
I need an instant fare quotation for my trip:

📍 *Pickup:* ${req.pickup || 'Pune'}
🎯 *Destination:* ${req.destination || 'Not specified'}
🚐 *Vehicle Required:* ${req.vehicle || 'New AC Bus 20 Seater'}
👥 *Passenger Count:* ${req.passengers || 'Group'}
🔄 *Trip Type:* ${req.tripType || 'Round Trip'}
📅 *Departure Date:* ${req.startDate || 'Upcoming'}
🏁 *Return Date:* ${req.returnDate || 'Same day / Next day'}
${req.customerName ? `👤 *Name:* ${req.customerName}` : ''}
${req.notes ? `📝 *Notes:* ${req.notes}` : ''}

Please share the best discounted quotation and confirm vehicle availability. Thank you!`;
}
