export interface TariffItem {
  id: string;
  vehicle: string;
  marathiVehicle: string;
  capacity: string;
  seats: number;
  ratePerKm: string;
  minKmDay: string;
  localPackage: string; // 8 Hr / 80 Km
  extraKmRate: string;
  extraHrRate: string;
  driverAllowance: string;
  nightCharges: string;
  isStar?: boolean;
}

export const TARIFF_DATA: TariffItem[] = [
  {
    id: 'new-ac-bus-20-seater',
    vehicle: '⭐ New AC Bus 20 Seater (Banner Special)',
    marathiVehicle: 'नवीन २० सीटर एसी बस',
    capacity: '20 Passengers + 1 Driver',
    seats: 20,
    ratePerKm: '₹26 - ₹28 / km',
    minKmDay: '300 km / day',
    localPackage: '₹6,500 (8h / 80km)',
    extraKmRate: '₹26 / km',
    extraHrRate: '₹300 / hr',
    driverAllowance: '₹500 / day',
    nightCharges: '₹300 (after 10 PM)',
    isStar: true
  },
  {
    id: 'force-urbania-17',
    vehicle: 'Force Urbania 17 Seater Luxury',
    marathiVehicle: 'फोर्स अर्बानिया १७ सीटर',
    capacity: '17 Passengers + 1 Driver',
    seats: 17,
    ratePerKm: '₹28 - ₹30 / km',
    minKmDay: '300 km / day',
    localPackage: '₹7,000 (8h / 80km)',
    extraKmRate: '₹28 / km',
    extraHrRate: '₹350 / hr',
    driverAllowance: '₹500 / day',
    nightCharges: '₹300 (after 10 PM)'
  },
  {
    id: 'force-urbania-13',
    vehicle: 'Force Urbania 13 Seater VIP',
    marathiVehicle: 'फोर्स अर्बानिया १३ सीटर',
    capacity: '13 Passengers + 1 Driver',
    seats: 13,
    ratePerKm: '₹25 - ₹27 / km',
    minKmDay: '300 km / day',
    localPackage: '₹6,000 (8h / 80km)',
    extraKmRate: '₹25 / km',
    extraHrRate: '₹300 / hr',
    driverAllowance: '₹500 / day',
    nightCharges: '₹300 (after 10 PM)'
  },
  {
    id: 'tempo-traveller-17',
    vehicle: 'Luxury Tempo Traveller 17 Seater',
    marathiVehicle: 'लक्झरी टेम्पो ट्रॅव्हलर १७ सीटर',
    capacity: '17 Passengers + 1 Driver',
    seats: 17,
    ratePerKm: '₹22 - ₹24 / km',
    minKmDay: '300 km / day',
    localPackage: '₹5,200 (8h / 80km)',
    extraKmRate: '₹22 / km',
    extraHrRate: '₹250 / hr',
    driverAllowance: '₹400 / day',
    nightCharges: '₹300 (after 10 PM)'
  },
  {
    id: 'tempo-traveller-26',
    vehicle: 'Deluxe Tempo Traveller 26 Seater',
    marathiVehicle: 'डिलक्स टेम्पो ट्रॅव्हलर २६ सीटर',
    capacity: '26 Passengers + 1 Driver',
    seats: 26,
    ratePerKm: '₹28 - ₹32 / km',
    minKmDay: '300 km / day',
    localPackage: '₹7,500 (8h / 80km)',
    extraKmRate: '₹28 / km',
    extraHrRate: '₹350 / hr',
    driverAllowance: '₹500 / day',
    nightCharges: '₹300 (after 10 PM)'
  },
  {
    id: 'mini-bus-32',
    vehicle: 'Executive Mini Bus 32 Seater AC',
    marathiVehicle: 'एक्झिक्युटिव्ह मिनी बस ३२ सीटर',
    capacity: '32 Passengers + 2 Crew',
    seats: 32,
    ratePerKm: '₹35 - ₹38 / km',
    minKmDay: '300 km / day',
    localPackage: '₹9,500 (8h / 80km)',
    extraKmRate: '₹35 / km',
    extraHrRate: '₹400 / hr',
    driverAllowance: '₹600 / day',
    nightCharges: '₹400 (after 10 PM)'
  },
  {
    id: 'innova-crysta',
    vehicle: 'Toyota Innova Crysta & Ertiga (6-7 Seater)',
    marathiVehicle: 'टोयोटा इनोव्हा व अर्टिगा',
    capacity: '6 to 7 Passengers',
    seats: 7,
    ratePerKm: '₹16 - ₹18 / km',
    minKmDay: '300 km / day',
    localPackage: '₹3,500 (8h / 80km)',
    extraKmRate: '₹16 / km',
    extraHrRate: '₹200 / hr',
    driverAllowance: '₹400 / day',
    nightCharges: '₹250 (after 10 PM)'
  }
];
