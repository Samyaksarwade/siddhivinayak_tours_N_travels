import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DynamicFareCalculator } from './components/DynamicFareCalculator';
import { StarBusSection } from './components/StarBusSection';
import { InteractiveExperience } from './components/InteractiveExperience';
import { BusSeatLayout } from './components/BusSeatLayout';
import { BannerSpotlight } from './components/BannerSpotlight';
import { FleetSection } from './components/FleetSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { TariffSection } from './components/TariffSection';
import { ToursSection } from './components/ToursSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { WhatsAppBookingCard } from './components/WhatsAppBookingCard';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { VehicleModal } from './components/VehicleModal';

export const App: React.FC = () => {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);

  const handleSelectVehicle = (vehicleId: string) => {
    setSelectedVehicleId(vehicleId);
  };

  const handleCloseModal = () => {
    setSelectedVehicleId(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 pb-20 sm:pb-0 relative">
      {/* Navigation Header with Transparent Moving Header Line from Left to Right */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero with Banner & Quick Booking */}
        <Hero />

        {/* Dynamic Live Fare & Distance Calculator */}
        <DynamicFareCalculator />

        {/* Featured Star Vehicle: New 20-Seater AC Bus with JBL Sound & Pushback Seats */}
        <StarBusSection onSelectVehicle={handleSelectVehicle} />

        {/* Interactive Experience: JBL Sound Equalizer, Arctic AC Dial & Pushback Recline Demo */}
        <InteractiveExperience />

        {/* Interactive 2x1 Bus Seating Blueprint */}
        <div id="seat-layout">
          <BusSeatLayout />
        </div>

        {/* Authentic Official Banner Spotlight & Owner Vijay U. Pawar */}
        <BannerSpotlight />

        {/* Complete Fleet of Buses & Travellers */}
        <FleetSection onSelectVehicle={handleSelectVehicle} />

        {/* Facilities Breakdown (Powerful AC, JBL Sound, Pushback, etc.) */}
        <FacilitiesSection />

        {/* Transparent Tariff & Rates Card */}
        <TariffSection />

        {/* Popular Maharashtra & Outstation Tour Packages */}
        <ToursSection />

        {/* Core Services (Weddings, Corporate, Tours, Airport Transfers) */}
        <ServicesSection />

        {/* Photo Gallery & Fleet Views */}
        <GallerySection />

        {/* Interactive Full WhatsApp Booking & Quote Form */}
        <WhatsAppBookingCard />

        {/* Real Customer Testimonials */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Dedicated Clear Contact Section (Unobstructed & Never Overridden) */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Non-intrusive Floating WhatsApp & Call Buttons (Bottom Right) */}
      <FloatingWhatsApp />

      {/* Accessible Native Vehicle Specifications Modal Dialog */}
      <VehicleModal 
        vehicleId={selectedVehicleId} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default App;
