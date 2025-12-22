"use client";
import { Button } from "@heroui/react";
import BookingSection from "./components/home/BookingSection";
import FleetSection from "./components/home/FleetSection";
import HeroSection from "./components/home/HeroSection";
import RoutesSection from "./components/home/RoutesSection";
import ServicesSection from "./components/home/ServiceSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import WhatsApp from "../public/whatsapp.svg";
import Image from "next/image";

export default function Home() {

  const mobile = "9952227577";

  const message = encodeURIComponent(
    "Hi, I would like to book a cab from Kodai Journey 🚕"
  );

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <RoutesSection />
      <TestimonialsSection />
      <BookingSection />
      <Button
        isIconOnly
        as="a"
        href={`https://wa.me/91${mobile}?text=${message}`}
        target="_blank"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 shadow-xl bg-green-500 hover:bg-green-600 flex items-center justify-center"
        radius="full"
        size="lg"
      >
        <Image className="text-white" src={WhatsApp} alt="WhatsApp" width={32} height={32} />
      </Button>
    </>
  );
}
