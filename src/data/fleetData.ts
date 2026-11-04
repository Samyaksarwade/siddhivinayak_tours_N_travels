export interface Vehicle {
  id: string;
  name: string;
  marathiName: string;
  tag?: string;
  isStar?: boolean;
  category: 'star' | 'urbania' | 'tempo' | 'minibus' | 'cab';
  capacity: string;
  seatsCount: number;
  seatingConfig: string;
  luggageCapacity: string;
  acType: string;
  audioSystem: string;
  startingPrice: string;
  image: string;
  interiorImage?: string;
  features: string[];
  specs: {
    engine?: string;
    suspension?: string;
    chargingPorts: string;
    entertainment: string;
    safety: string;
  };
  bestFor: string[];
  description: string;
}

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'new-ac-bus-20-seater',
    name: 'New AC Bus 20 Seater',
    marathiName: 'नवीन २० सीटर एसी बस',
    tag: '⭐ Star Fleet - Banner Special',
    isStar: true,
    category: 'star',
    capacity: '20 Passengers + 1 Driver',
    seatsCount: 20,
    seatingConfig: '2x1 Luxury Pushback Layout with Extra Legroom',
    luggageCapacity: 'Huge Rear Boot + Overhead Racks + Roof Carrier',
    acType: 'Powerful High-Capacity Dual AC with Individual Louvers',
    audioSystem: 'Premium JBL Sound System with Bass & Bluetooth/Mic',
    startingPrice: 'Best Rate Guaranteed on WhatsApp',
    image: '/images/siddhivinayak-banner.jpg',
    interiorImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    features: [
      'Powerful Chilled AC (Fast Cooling)',
      'JBL Sound System with Bluetooth & Mic',
      '100% Pushback Reclining Seats',
      'Extra Spacious Luggage Boot & Carrier',
      'USB Mobile Fast Charging Sockets',
      'Experienced Mountain & Highway Driver',
      'Auspicious & Spotlessly Clean Interior',
      'Zero Breakdown Guarantee & On-Time Service'
    ],
    specs: {
      chargingPorts: 'Dedicated USB charger ports at every row',
      entertainment: 'JBL Pro Sound, Bluetooth, Aux & Wireless Mic',
      safety: 'ABS, Speed Governor, First Aid Kit & Fire Extinguisher',
      suspension: 'Heavy-duty Parabolic Smooth Suspension'
    },
    bestFor: [
      'Family & Group Picnics (Mahabaleshwar, Lonavala)',
      'Ashtavinayak Darshan 8 Ganpati Yatra',
      'Shirdi & Shani Shingnapur Pilgrimage',
      'Marriage Baraat & Guest Shuttle',
      'Corporate Team Outings & Offsites'
    ],
    description: 'Our flagship 20-Seater Luxury AC Bus featured on our official banner. Engineered with top-of-the-line JBL sound, plush reclining pushback seats, and arctic dual air-conditioning for the ultimate comfortable group journey.'
  },
  {
    id: 'force-urbania-17',
    name: 'Force Urbania 17 Seater Luxury',
    marathiName: 'फोर्स अर्बानिया १७ सीटर लक्झरी',
    tag: 'Ultra Luxury Minibus',
    category: 'urbania',
    capacity: '17 Passengers + 1 Driver',
    seatsCount: 17,
    seatingConfig: '2x1 Ergonomic Recliner Pushback Seats',
    luggageCapacity: 'Spacious Boot for 15+ Bags + Overhead Racks',
    acType: 'Dual Roof-Mounted Climate Control AC',
    audioSystem: 'JBL Sound System + Touchscreen Display',
    startingPrice: 'Affordable Per Km / Fixed Day Packages',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80',
    interiorImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    features: [
      'Mercedes-Derived Monocoque Body',
      'Panoramic Large View Windows',
      'JBL Surround Audio System',
      'Plush Pushback Calf-Support Seats',
      'Individual AC Vents & Reading Lamps',
      'Smoothest Ride in its Class'
    ],
    specs: {
      chargingPorts: 'Individual USB fast chargers',
      entertainment: 'JBL Hi-Fi Sound System with Bluetooth',
      safety: 'ESP, ABS + EBD, Dual Airbags',
      suspension: 'Independent Front Suspension for Ghat Roads'
    },
    bestFor: [
      'Pune to Goa Scenic Coastal Holiday',
      'Corporate VIP Travel & Executive Offsite',
      'Mumbai Airport Pickup & Drop',
      'Luxury Pilgrimage Tours'
    ],
    description: 'The world-class Force Urbania provides executive-class comfort with whisper-quiet cabin acoustics, wide panoramic windows, and smooth handling on both expressway and ghat routes.'
  },
  {
    id: 'force-urbania-13',
    name: 'Force Urbania 13 Seater VIP',
    marathiName: 'फोर्स अर्बानिया १३ सीटर व्हीआयपी',
    tag: 'VIP Executive',
    category: 'urbania',
    capacity: '13 Passengers + 1 Driver',
    seatsCount: 13,
    seatingConfig: 'Executive Recliners with Deep Cushioning',
    luggageCapacity: 'Extra Large Luggage Bay',
    acType: 'Powerful High-Output AC',
    audioSystem: 'JBL Audio with Subwoofer',
    startingPrice: 'Competitive Rate on WhatsApp',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?w=800&auto=format&fit=crop&q=80',
    features: [
      'Maximum Legroom and Recline',
      'JBL Sound with High Clarity',
      'Soft Ambient LED Cabin Lighting',
      'Clean Sanitized Interior with Sanitizer Dispenser',
      'Tinted Windows with Curtains'
    ],
    specs: {
      chargingPorts: 'Fast USB ports at each seat',
      entertainment: 'JBL Audio System',
      safety: 'Speed Governor, Seatbelts, First Aid Box',
      suspension: 'Independent Coil Suspension'
    },
    bestFor: [
      'Close Family Holidays (3-4 Families)',
      'Executive Airport Transfers',
      'VIP Pilgrimage & Darshan Tours',
      'Long-distance Interstate Travel'
    ],
    description: 'Designed for discerning travelers who desire aircraft-style comfort on the road. Perfect for smaller groups wanting premium seating with expansive personal room.'
  },
  {
    id: 'luxury-tempo-traveller-17',
    name: 'Luxury Tempo Traveller 17 Seater',
    marathiName: 'लक्झरी टेम्पो ट्रॅव्हलर १७ सीटर',
    tag: 'Most Popular for Tours',
    category: 'tempo',
    capacity: '17 Passengers + 1 Driver',
    seatsCount: 17,
    seatingConfig: '2x1 Luxury Pushback Layout',
    luggageCapacity: 'Dedicated Rear Trunk + Sturdy Roof Carrier',
    acType: 'Powerful Chilled Dual Air Conditioning',
    audioSystem: 'Music System with Aux/Bluetooth & Mic',
    startingPrice: 'Economical Group Rates',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    features: [
      'Comfortable Pushback Recliner Seats',
      'High-Power Dual Air Conditioning',
      'Party Music System with Mic for Singing',
      'Spacious Aisle for Easy Movement',
      'Sturdy Roof Carrier with Rainproof Tarpaulin'
    ],
    specs: {
      chargingPorts: 'Multi-pin charging board in cabin',
      entertainment: 'Stereo audio with Bluetooth & Mic',
      safety: 'Speed Limiter, Emergency Hammer, Fire Kit',
      suspension: 'Leaf spring with hydraulic shock absorbers'
    },
    bestFor: [
      'Pune to Mahabaleshwar Weekend Tours',
      'Shirdi & Shani Shingnapur Trips',
      'College Friend Getaways',
      'Family Wedding Functions'
    ],
    description: 'A time-tested traveler favorite! Roomy, sturdy, and equipped with chilled AC and reclining pushback seats to make any journey across Maharashtra fatigue-free.'
  },
  {
    id: 'luxury-tempo-traveller-26',
    name: 'Deluxe Tempo Traveller 26 Seater',
    marathiName: 'डिलक्स टेम्पो ट्रॅव्हलर २६ सीटर',
    tag: 'High Capacity Group Bus',
    category: 'tempo',
    capacity: '26 Passengers + 1 Driver',
    seatsCount: 26,
    seatingConfig: '2x2 Ergonomic Pushback Seats',
    luggageCapacity: 'Heavy-Duty Waterproof Roof Carrier + Boot',
    acType: 'High-Tonnage Ducted Air Conditioner',
    audioSystem: 'Surround Sound Audio System',
    startingPrice: 'Budget-Friendly Group Fare',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&auto=format&fit=crop&q=80',
    features: [
      '26 Pushback Seats with Padded Armrests',
      'Even Cooling across all rows',
      'Roof Carrier for 25+ Big Suitcases',
      'Comfortable Headrests & Leg Space',
      'Driver with 15+ Years Highway Experience'
    ],
    specs: {
      chargingPorts: 'Central charging station',
      entertainment: 'High-power speakers & Bluetooth',
      safety: 'GPS tracking, Speed Gov, First Aid',
      suspension: 'Reinforced Suspension for Maximum Stability'
    },
    bestFor: [
      'Baraat & Wedding Guest Transportation',
      'School & College Picnics',
      'Joint Family Religious Yatras',
      'Factory & Company Staff Day Outings'
    ],
    description: 'Accommodate your entire joint family or wedding party in a single comfortable vehicle. Eliminate multiple cars and travel together with joy and singing.'
  },
  {
    id: 'executive-mini-bus-32',
    name: 'Executive Mini Bus 32 Seater AC',
    marathiName: 'एक्झिक्युटिव्ह मिनी बस ३२ सीटर एसी',
    tag: 'Corporate & School Choice',
    category: 'minibus',
    capacity: '32 Passengers + 2 Crew',
    seatsCount: 32,
    seatingConfig: '2x2 High-Back Pushback Reclining Seats',
    luggageCapacity: 'Massive Underfloor Luggage Bins + Roof Carrier',
    acType: 'Commercial Ducted AC with High CFM',
    audioSystem: 'Public Address (PA) Mic & Music System',
    startingPrice: 'Best Quote on WhatsApp',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    features: [
      '32 Deluxe Pushback High-Back Seats',
      'Ducted Ceiling Air Conditioning',
      'Wide Center Walking Aisle',
      'PA System with Guide Microphone',
      'Large Luggage Storage Compartments'
    ],
    specs: {
      chargingPorts: 'Cabin USB charging hub',
      entertainment: 'PA System with Bluetooth Audio',
      safety: 'Emergency door, Speed governor, Fire safety',
      suspension: 'Air Assist / Multi-leaf Comfort Suspension'
    },
    bestFor: [
      'School & College Educational Trips',
      'Corporate Annual Conferences',
      'Large Wedding Barat Logistics',
      'Jyotirlinga & Long Distance Pilgrimages'
    ],
    description: 'Spacious 32-seater luxury mini bus engineered for large traveling groups. Provides ample headroom, full luggage storage underneath, and powerful cooling.'
  },
  {
    id: 'luxury-coach-45-50',
    name: 'Super Deluxe Coach Bus 45/50 Seater',
    marathiName: 'सुपर डिलक्स बस ४५/५० सीटर',
    tag: 'Mega Event & Industrial Tours',
    category: 'minibus',
    capacity: '45-50 Passengers + 2 Drivers',
    seatsCount: 50,
    seatingConfig: '2x2 Semi-Sleeper / Pushback Luxury Seating',
    luggageCapacity: 'Huge Belly Luggage Holds',
    acType: 'Full Cabin High-Capacity Chilled AC',
    audioSystem: 'Full Cinema Stereo & PA Announcement System',
    startingPrice: 'Corporate & Bulk Quotation',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80',
    features: [
      'Air Suspension for Smooth Highway Gliding',
      'Curtains & Reading Lights at Every Seat',
      'Underbelly Holds for 100+ Pieces of Luggage',
      'Emergency Window Exits & Safety Compliances',
      'Experienced Two-Driver Relay for Long Routes'
    ],
    specs: {
      chargingPorts: 'Individual USB sockets',
      entertainment: 'Overhead screen & mic setup',
      safety: 'RTO Certified, Speed Governed, Full Insurance',
      suspension: 'Pneumatic Air Suspension'
    },
    bestFor: [
      'Mega Weddings & Event Logistics',
      'Corporate Annual Offsites (Lonavala/Goa)',
      'Engineering College Industrial Visits',
      'All-India Tirupati / Rajasthan Yatras'
    ],
    description: 'When you need to transport an entire convention, sports team, or company division in sheer comfort. State-of-the-art climate control and unmatched luggage space.'
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta & Ertiga (6-7 Seater)',
    marathiName: 'इनोव्हा क्रिस्टा आणि अर्टिगा',
    tag: 'Executive Cab & Airport Drop',
    category: 'cab',
    capacity: '6 to 7 Passengers',
    seatsCount: 7,
    seatingConfig: 'Captain Seats / Pushback 7-Seater',
    luggageCapacity: 'Rear Boot for 4 Large Suitcases',
    acType: 'Automatic Dual-Zone Climate Control',
    audioSystem: 'Premium Touchscreen Audio',
    startingPrice: 'Affordable Per-Km / Outstation',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80',
    features: [
      'Captain Seat Luxury Option',
      'Chilled Automatic Climate Control',
      'Punctual Airport Pick & Drop',
      'Uniformed, Verified Chauffeur',
      'Clean & Fresh Cabin'
    ],
    specs: {
      chargingPorts: 'Dual 12V + USB Fast Charger',
      entertainment: 'Touchscreen Bluetooth Audio',
      safety: '7 Airbags, ABS with EBD, Hill Assist',
      suspension: 'Double Wishbone Front Suspension'
    },
    bestFor: [
      'Pune to Mumbai International Airport Drop',
      'Urgent Business Outstation Meetings',
      'Small Family Weekend Trips',
      'VIP City Travel'
    ],
    description: 'The undisputed gold standard for small group executive travel. Reliable, quiet, exceptionally comfortable, and driven by punctual, polite chauffeurs.'
  }
];
