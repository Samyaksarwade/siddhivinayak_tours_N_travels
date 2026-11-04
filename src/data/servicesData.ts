export interface ServiceItem {
  id: string;
  title: string;
  marathiTitle: string;
  badge: string;
  iconName: string;
  image: string;
  description: string;
  features: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'tour-packages',
    title: 'Custom Tour Packages & Sightseeing',
    marathiTitle: 'टूर पॅकेजेस आणि प्रेक्षणीय स्थळे',
    badge: 'Popular',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    description: 'Custom-crafted holiday itineraries across Maharashtra, Goa, Karnataka, and North India. We plan the best routes, safe rest stops, and scenic points so you relax completely.',
    features: [
      'Tailor-made multi-day or single-day sightseeing plans',
      'Flexible departure and pickup locations from Pune / PCMC',
      'Knowledgeable drivers who know local tourist gems',
      'Zero rush; explore places at your own relaxed pace'
    ]
  },
  {
    id: 'family-group-tours',
    title: 'Family & Group Picnics',
    marathiTitle: 'कौटुंबिक आणि ग्रुप सहली',
    badge: 'Comfort First',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80',
    description: 'Create unforgettable memories together with your entire family. With comfortable 20-seater and 17-seater pushback buses, grandparents and children travel with equal ease.',
    features: [
      'Spacious aisles & soft recliners for senior citizens',
      'JBL sound system for family singing and Antakshari',
      'Child-safe doors, sanitization & clean upholstery',
      'Safe driving speed adhering to all highway guidelines'
    ]
  },
  {
    id: 'corporate-trips',
    title: 'Corporate Trips & Team Offsites',
    marathiTitle: 'कॉर्पोरेट सहली आणि इव्हेंट्स',
    badge: 'Professional',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    description: 'Punctual, professional transport for IT offsites, leadership retreats, conferences, and factory visits. Complete GST invoicing, corporate agreements, and vetted chauffeurs.',
    features: [
      'Clean executive vehicles (Urbania & 20-Seater AC Bus)',
      'GST tax invoices with clear billing breakdowns',
      'On-time reporting at IT Parks (Hinjewadi, Magarpatta, Kharadi)',
      'High-speed USB charging for mobile laptops & smartphones'
    ]
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers (Pune & Mumbai)',
    marathiTitle: 'विमानतळ पिकअप व ड्रॉप',
    badge: '24/7 Service',
    iconName: 'Plane',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80',
    description: 'Guaranteed 24x7 transfers to Pune Lohegaon Airport and Mumbai Chhatrapati Shivaji Maharaj International Airport (T1/T2). Never fear flight delays or midnight arrivals.',
    features: [
      'Flight tracking to adjust for landing delays automatically',
      'Curbside luggage loading and courteous driver assistance',
      'Expressway toll handled smoothly without passenger delays',
      'Late-night and early-morning scheduled departures'
    ]
  },
  {
    id: 'school-college-trips',
    title: 'School & College Educational Trips',
    marathiTitle: 'शाळा व कॉलेज सहली',
    badge: 'High Safety',
    iconName: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    description: 'Approved buses for student educational excursions, science center visits, historical fort explorations, and college industrial visits (IVs) across India.',
    features: [
      'RTO verified commercial fitness certificates',
      'Speed governor limited to regulatory limits',
      'First-aid supplies and fire extinguishers on board',
      'Patient drivers accustomed to handling student groups'
    ]
  },
  {
    id: 'wedding-special-events',
    title: 'Wedding & Special Event Transportation',
    marathiTitle: 'लग्न समारंभ व विशेष कार्यक्रम',
    badge: 'Celebrations',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&auto=format&fit=crop&q=80',
    description: 'Seamless logistics for your big day! From Baraat processions and guest pickups at railway stations to outstation wedding transfers, we keep celebrations moving in harmony.',
    features: [
      'Multiple bus coordination for large guest lists',
      'Decorated bus availability upon advance request',
      'JBL sound system ready for Baraat dance and dhol beats',
      'Courteous chauffeurs dressed neatly for auspicious functions'
    ]
  }
];
