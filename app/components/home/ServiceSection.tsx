"use client";

import { Card, CardBody } from "@heroui/react";
import {
  MapPin,
  Car,
  Plane,
  Package,
} from "lucide-react";

const services = [
  {
    title: "Local Sightseeing",
    description:
      "Explore Kodaikanal’s top attractions with experienced local drivers.",
    icon: MapPin,
  },
  {
    title: "Outstation Trips",
    description:
      "Comfortable and safe long-distance travel across Tamil Nadu & Kerala.",
    icon: Car,
  },
  {
    title: "Airport Transfers",
    description:
      "On-time pickup and drop to Coimbatore and Madurai airports.",
    icon: Plane,
  },
  {
    title: "Custom Packages",
    description:
      "Flexible travel plans tailored for families, couples, and groups.",
    icon: Package,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Reliable, comfortable, and affordable cab services tailored for
            your journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              shadow="sm"
              radius="lg"
              className="border border-zinc-200 hover:shadow-md transition-shadow"
            >
              <CardBody className="flex flex-col items-center text-center gap-4 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <service.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-6 text-zinc-600">
                  {service.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
