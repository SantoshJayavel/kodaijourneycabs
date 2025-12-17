import BookingSection from "./components/home/BookingSection";
import FleetSection from "./components/home/FleetSection";
import HeroSection from "./components/home/HeroSection";
import RoutesSection from "./components/home/RoutesSection";
import ServicesSection from "./components/home/ServiceSection";
import TestimonialsSection from "./components/home/TestimonialsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <RoutesSection />
      <TestimonialsSection />
      <BookingSection/>
    </>
  );
}
