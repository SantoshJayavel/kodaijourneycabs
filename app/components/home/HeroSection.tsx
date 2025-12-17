"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[85vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604537466608-109fa2f16c3b')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          Reliable Cab Services in Kodaikanal
        </h1>

        <p className="mt-6 text-lg text-zinc-200 sm:text-xl">
          Local Sightseeing • Outstation Trips • Airport Transfers • Custom
          Packages
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            as={Link}
            href="/contact"
            color="success"
            radius="full"
            size="lg"
            className="font-medium px-8"
          >
            Book Your Ride
          </Button>

          <Button
            as="a"
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            variant="bordered"
            radius="full"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black px-8"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
