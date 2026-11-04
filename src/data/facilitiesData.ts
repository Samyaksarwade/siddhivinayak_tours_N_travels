export interface Facility {
  id: string;
  title: string;
  marathiTitle: string;
  badgeText: string;
  icon: string;
  description: string;
  highlights: string[];
  bannerHighlight: boolean;
}

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'powerful-ac',
    title: 'Powerful AC (Arctic Dual Cooling)',
    marathiTitle: 'पॉवरफुल एसी',
    badgeText: 'Instant Cooling',
    icon: 'Snowflake',
    bannerHighlight: true,
    description: 'High-tonnage dual compressor air conditioning engineered for Indian summers. Delivers uniform chilled airflow to every seat row within seconds, even during 44°C outdoor heat.',
    highlights: [
      'Dual compressors for front and passenger cabins',
      'Individual adjustable ceiling louvers at every seat',
      'Anti-dust and pollen cabin filters',
      'Temperature climate controlled for total comfort'
    ]
  },
  {
    id: 'jbl-sound',
    title: 'JBL Sound System (JBL SOUND 🔊)',
    marathiTitle: 'जेबीएल साऊंड सिस्टीम',
    badgeText: 'Party on Wheels',
    icon: 'Speaker',
    bannerHighlight: true,
    description: 'Equipped with original JBL high-fidelity speakers and crisp surround audio. Sing along with your group, play bhajans during temple yatras, or groove to your favorite Bollywood tracks.',
    highlights: [
      'Original JBL acoustics with punchy bass & clarity',
      'Instant Bluetooth & Aux smartphone connectivity',
      'Wireless / wired microphone for karaoke & announcements',
      'Volume control optimized for front and rear passengers'
    ]
  },
  {
    id: 'pushback-seats',
    title: 'All Pushback Reclining Seats',
    marathiTitle: 'सर्व पुशबॅक सीट्स',
    badgeText: 'Zero Fatigue Travel',
    icon: 'Armchair',
    bannerHighlight: true,
    description: '100% of our seats are ergonomic luxury pushback recliners. Ample calf support, cushioned headrests, and extended legroom ensure you wake up fresh and energetic at your destination.',
    highlights: [
      'High-grade leatherette cushioning with soft foam',
      'Adjustable back recline angle up to 135 degrees',
      'Spacious aisle distance to avoid knee cramp',
      'Foldable armrests and individual magazine pockets'
    ]
  },
  {
    id: 'safe-journey',
    title: 'Safe & Comfortable Journey',
    marathiTitle: 'सुरक्षित आणि सुखकर प्रवास',
    badgeText: 'Safe Journey... Happy Journey',
    icon: 'ShieldCheck',
    bannerHighlight: true,
    description: 'Safety is our highest pledge. Every vehicle undergoes rigorous 25-point mechanical inspections, brake checks, and sanitization before hitting the highway.',
    highlights: [
      'Anti-lock Braking System (ABS) & Speed Limiter installed',
      'Heavy-duty parabolic suspension for smooth bumps dampening',
      'Emergency exits, glass hammers & fire extinguishers on board',
      'Live GPS satellite tracking for family peace of mind'
    ]
  },
  {
    id: 'experienced-driver',
    title: 'Experienced & Courteous Drivers',
    marathiTitle: 'अनुभवी ड्रायव्हर',
    badgeText: '10+ Years Road Exp',
    icon: 'UserCheck',
    bannerHighlight: true,
    description: 'Our chauffeurs are certified, police-verified, and master navigators of Western Ghats (Khandala, Amba Ghat, Mahabaleshwar Pasarni Ghat, Tamhini Ghat) and interstate highways.',
    highlights: [
      'Police-verified with valid commercial badges',
      'Fluent in Marathi, Hindi & basic English',
      'Polite, patient, non-smoking & courteous conduct',
      'Expertise in local sightseeing spots & clean family eateries'
    ]
  },
  {
    id: 'luggage-space',
    title: 'Spacious Luggage Space & Boot',
    marathiTitle: 'मोकळी लगेज जागा',
    badgeText: 'Ample Boot Space',
    icon: 'Luggage',
    bannerHighlight: true,
    description: 'Pack without stress! Generous dedicated rear luggage compartment, overhead parcel shelves for handbags, and an all-weather roof carrier with waterproof tarpaulin protection.',
    highlights: [
      'Large rear boot accommodating 15-25 heavy suitcases',
      'Overhead interior parcel racks for jackets and snacks',
      'Heavy-duty roof rack for extra big baggage',
      'Zero cabin clutter so passengers stretch legs freely'
    ]
  },
  {
    id: 'on-time-service',
    title: '100% On-Time Service Guarantee',
    marathiTitle: 'वेळेवर सेवा',
    badgeText: 'Zero Delay',
    icon: 'Clock',
    bannerHighlight: true,
    description: 'We value your precious time. Whether it is an early 4:00 AM airport pickup or a strict temple aarti schedule, your bus arrives 15 minutes before reporting time, guaranteed.',
    highlights: [
      'Guaranteed 15-minute advance arrival at pickup point',
      'Proactive route navigation to avoid traffic jams',
      '24/7 dispatch desk coordinating with the driver',
      'Transparent milestone communication on WhatsApp'
    ]
  },
  {
    id: 'charging-ports',
    title: 'Mobile Fast Charging Ports',
    marathiTitle: 'मोबाईल चार्जिंग पॉईंट्स',
    badgeText: 'Stay Connected',
    icon: 'Zap',
    bannerHighlight: false,
    description: 'Never worry about battery drain during long tours. Dedicated USB charging ports accessible from seats ensure your phones, cameras, and tablets remain 100% charged.',
    highlights: [
      'High-speed USB charging points throughout the coach',
      'Compatible with Android & iPhone devices',
      'Surge-protected vehicle electrical system',
      'Keeps your travel photos and reels uninterrupted'
    ]
  }
];
