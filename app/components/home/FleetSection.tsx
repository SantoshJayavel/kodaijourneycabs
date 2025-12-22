"use client";

import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";

const fleet = [
  {
    name: "Hatchback",
    passengers: "3–4 Passengers",
    luggage: "2 Bags",
    image: "/fleet/hatchback.png",
  },
  {
    name: "Sedan",
    passengers: "4 Passengers",
    luggage: "3 Bags",
    image: "/fleet/sSedan.png",
  },
  {
    name: "SUV",
    passengers: "6–7 Passengers",
    luggage: "4 Bags",
    image: "/fleet/suv.png",
  },
  {
    name: "Tempo Traveller",
    passengers: "12–15 Passengers",
    luggage: "Ample Space",
    image: "/fleet/mini-van.png",
  },
];

export default function FleetSection() {

  const message = encodeURIComponent(
    "Hi, I would like to book a cab from Kodai Journey"
  );

  return (
    <section id="fleet" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Our Fleet
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Choose from a wide range of clean and well-maintained vehicles.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((vehicle) => (
            <Card
              key={vehicle.name}
              shadow="sm"
              radius="lg"
              className="border border-zinc-200"
            >
              <CardBody className="p-0 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 w-full flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={200}
                    height={150}
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {vehicle.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600">
                    {vehicle.passengers} • {vehicle.luggage}
                  </p>

                  <Button
                    as="a"
                    href={`https://wa.me/919952227577?text=${message}`}
                    target="_blank"
                    radius="full"
                    size="sm"
                    className="mt-5 text-[#33612B]"
                  >
                    Book Now
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
