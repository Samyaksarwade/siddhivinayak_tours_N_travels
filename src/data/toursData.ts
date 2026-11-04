export interface TourPackage {
  id: string;
  title: string;
  marathiTitle: string;
  duration: string;
  distance: string;
  image: string;
  tag: string;
  popular: boolean;
  highlights: string[];
  recommendedBus: string;
  description: string;
  routeHighlights: string;
}

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'pune-mahabaleshwar',
    title: 'Pune to Mahabaleshwar & Panchgani Tour',
    marathiTitle: 'पुणे ते महाबळेश्वर आणि पाचगणी',
    duration: '2 Days / 3 Days',
    distance: 'Approx 125 km (One Way)',
    tag: 'Hill Station Favorite',
    popular: true,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Venna Lake Boating & Horse Riding',
      'Old Mahabaleshwar Mandir & Panchganga',
      'Arthur Seat, Wilson Point & Kate Point',
      'Panchgani Table Land & Parsi Point',
      'Mapro Garden Strawberry Festival & Shopping'
    ],
    recommendedBus: 'New AC Bus 20 Seater / Force Urbania 17',
    description: 'Breathe the cool mountain mist! Perfect weekend escape with family or friends in our chilled AC bus with smooth ghat navigation.',
    routeHighlights: 'Scenic journey through Shirwal, Wai, and breathtaking Pasarni Ghat.'
  },
  {
    id: 'pune-shirdi',
    title: 'Pune to Shirdi Sai Baba & Shani Shingnapur',
    marathiTitle: 'पुणे ते शिर्डी साईबाबा आणि शनी शिंगणापूर',
    duration: '1 Day / 2 Days',
    distance: 'Approx 185 km (One Way)',
    tag: 'Holy Pilgrimage Yatra',
    popular: true,
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Shirdi Sai Baba Samadhi Mandir VIP Darshan',
      'Dwarkamai, Chavadi & Gurusthan',
      'Shani Shingnapur Sacred Temple & Oil Offering',
      'Clean vegetarian food stop recommendations',
      'Early morning Aarti schedule synchronization'
    ],
    recommendedBus: 'New AC Bus 20 Seater / 26 Seater Tempo Traveller',
    description: 'Experience divine blessings of Sai Baba. Travel with peaceful bhajans playing on our JBL sound system and reclining seats for elderly family members.',
    routeHighlights: 'Smooth highway drive via Ahmednagar highway with planned hygienic halts.'
  },
  {
    id: 'ashtavinayak-darshan',
    title: 'Complete Ashtavinayak Darshan Yatra',
    marathiTitle: 'संपूर्ण अष्टविनायक दर्शन यात्रा',
    duration: '2 Days / 3 Days (Customizable)',
    distance: 'Approx 650 km (Full Circuit)',
    tag: 'Sacred Ganpati Circuit',
    popular: true,
    image: 'https://images.unsplash.com/photo-1599818816933-5b8f10b7a840?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Mayureshwar (Morgaon) & Siddhivinayak (Siddhatek)',
      'Ballaleshwar (Pali) & Varadvinayak (Mahad)',
      'Chintamani (Theur) & Girijatmaj (Lenyadri)',
      'Vighnahar (Ozar) & Mahaganapati (Ranjangaon)',
      'Comfortable stays and hassle-free mandir halts'
    ],
    recommendedBus: 'New AC Bus 20 Seater (Ideal for Joint Family Darshan)',
    description: 'Seek the blessings of Lord Ganesha at all 8 sacred shrines. With Siddhivinayak Tours & Travels, your spiritual yatra is conducted with reverence, punctuality, and utmost comfort.',
    routeHighlights: 'Covers Pune, Raigad, and Ahmednagar districts across peaceful rural landscapes.'
  },
  {
    id: 'pune-goa',
    title: 'Pune to Goa Coastal Holiday Express',
    marathiTitle: 'पुणे ते गोवा बीच व्हॅकेशन',
    duration: '3 Nights / 4 Days',
    distance: 'Approx 460 km (One Way)',
    tag: 'Friends & Party Special',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'North Goa: Baga, Calangute, Anjuna & Fort Aguada',
      'South Goa: Colva, Palolem & Basilica of Bom Jesus',
      'Sunset River Cruise on Mandovi River',
      'Water sports: Jet Ski, Parasailing, Banana ride',
      'Full JBL party audio inside the bus'
    ],
    recommendedBus: 'Force Urbania 17 Seater / New AC Bus 20 Seater',
    description: 'Road trip to the sunshine state with non-stop music, chilled AC, and generous boot space for all party gear and luggage.',
    routeHighlights: 'Expressway via Kolhapur, Nipani, and the scenic Amboli Ghat.'
  },
  {
    id: 'pune-mumbai-airport',
    title: 'Pune to Mumbai & International Airport Transfer',
    marathiTitle: 'पुणे ते मुंबई विमानतळ ट्रान्सफर',
    duration: 'Fixed One Way / Round Trip (24/7)',
    distance: 'Approx 150 km',
    tag: '24/7 Guaranteed Punctual',
    popular: false,
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Mumbai Chhatrapati Shivaji Airport (T1 & T2) Drop / Pickup',
      'Mumbai Gateway of India, Marine Drive & Bandra-Worli Sea Link',
      'Doorstep pickup in Pune, PCMC, Hinjewadi, Wakad & Hadapsar',
      'Expressway toll handled transparently',
      'Zero delay guarantee for scheduled international flights'
    ],
    recommendedBus: 'Innova Crysta / Force Urbania 13/17 / 20 Seater Bus',
    description: 'Stress-free connection to Mumbai Airport. Professional chauffeurs track your flight timings to ensure prompt curbside reception.',
    routeHighlights: 'Smooth transit on the Mumbai-Pune Yashwantrao Chavan Expressway.'
  },
  {
    id: 'pune-lonavala-imagica',
    title: 'Pune to Lonavala, Khandala & Imagica',
    marathiTitle: 'पुणे ते लोणावळा, खंडाळा आणि इमेजिका',
    duration: '1 Day / 2 Days',
    distance: 'Approx 65 km (One Way)',
    tag: 'Quick Weekend Getaway',
    popular: false,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Tiger Leap, Lion Point & Sunset Point',
      'Bhushi Dam & Karla / Bhaja Buddhist Caves',
      'Adlabs Imagica Theme & Water Park thrilling rides',
      'Authentic Lonavala Chikki & Fudge shopping',
      'Day picnic for school, college & family groups'
    ],
    recommendedBus: 'New AC Bus 20 Seater / 26 Seater Tempo Traveller',
    description: 'A fun-filled, quick getaway right around the corner. Perfect for birthday bashes, college reunions, and day picnics.',
    routeHighlights: 'Fast 1-hour cruise via Pune-Mumbai expressway.'
  },
  {
    id: 'bhimashankar-trimbakeshwar',
    title: 'Pune to Bhimashankar & Trimbakeshwar Jyotirlinga',
    marathiTitle: 'भीमाशंकर आणि त्र्यंबकेश्वर ज्योतिर्लिंग दर्शन',
    duration: '2 Days / 3 Days',
    distance: 'Approx 480 km (Round Trip)',
    tag: 'Holy Shiva Jyotirlinga',
    popular: false,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    highlights: [
      'Bhimashankar Ancient Jyotirlinga in Sahyadri Hills',
      'Trimbakeshwar Shiva Mandir in Nashik',
      'Panchavati, Sita Gufa & Ramkund Holy Bath',
      'Muktidham & Kalaram Mandir',
      'Spiritual devotional atmosphere with safe hill driving'
    ],
    recommendedBus: 'New AC Bus 20 Seater / Force Urbania 17',
    description: 'Pay homage at two of the sacred 12 Jyotirlingas in Maharashtra. Handled by chauffeurs experienced in narrow mountain ghat ascents.',
    routeHighlights: 'Breathtaking Sahyadri wildlife sanctuary trails and scenic Nashik highways.'
  }
];
