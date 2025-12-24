"use client";

import { Card, CardBody, Button, Chip } from "@heroui/react";
import Link from "next/link";

export const metadata = {
  title: "Madurai to Kodaikanal Cab Service | Airport Taxi | Coimbatore to Kodaikanal | Palani to Kodaikanal | Dindigul to Kodaikanal",
  description:
    "Book Madurai to Kodaikanal cab service with experienced hill drivers. Safe airport pickup and comfortable travel at affordable prices.",
  keywords: [
    "Madurai to Kodaikanal cab",
    "airport taxi Madurai to Kodaikanal",
    "Madurai airport cab",
    "Kodaikanal cab from Madurai",
    "Madurai to Kodaikanal taxi service",
    "Coimbatore to Kodaikanal cab",
    "airport taxi Coimbatore to Kodaikanal",
    "Coimbatore airport cab",
    "Kodaikanal cab from Coimbatore",
    "Coimbatore to Kodaikanal taxi service",
    "Palani to Kodaikanal cab",
    "airport taxi Palani to Kodaikanal",
    "Palani airport cab",
    "Kodaikanal cab from Palani",
    "Palani to Kodaikanal taxi service",
    "Theni to Kodaikanal cab",
    "airport taxi Theni to Kodaikanal",
    "Theni airport cab",
    "Kodaikanal cab from Theni",
    "Theni to Kodaikanal taxi service",
    "Dindigul to Kodaikanal cab",
    "airport taxi Dindigul to Kodaikanal",
    "Dindigul airport cab",
    "Kodaikanal cab from Dindigul",
    "Dindigul to Kodaikanal taxi service",
  ],
};


type RouteItem = {
  title: string;
  duration: string;
  type: string;
  description: string;
  hasDetails?: boolean;
};

const routes: RouteItem[] = [
  {
    title: "Kodaikanal Local Sightseeing",
    duration: "1 Day",
    type: "Popular",
    description:
      "Cover Bryant Park, Coaker’s Walk, Pillar Rocks, and other must-visit attractions.",
    hasDetails: true,
  },
  {
    title: "Coimbatore ↔ Kodaikanal",
    duration: "One Way / Round Trip",
    type: "Airport Route",
    description:
      "Comfortable long-distance travel with experienced hill-route drivers.",
  },
  {
    title: "Madurai ↔ Kodaikanal",
    duration: "One Way / Round Trip",
    type: "Airport Route",
    description:
      "Reliable pickup and drop from Madurai Airport or city.",
  },
  {
    title: "Honeymoon Package",
    duration: "2–3 Days",
    type: "Special",
    description:
      "Romantic customized itinerary with sightseeing and leisure time.",
  },
];

export default function RoutesSection() {
  return (
    <section id="packages" className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Popular Routes & Packages
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Handpicked travel options loved by our customers.
          </p>
        </div>

        {/* Routes Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((route) => (
            <Card
              key={route.title}
              shadow="sm"
              radius="lg"
              className="border border-zinc-200 hover:shadow-md transition-shadow"
            >
              <CardBody className="flex flex-col gap-4 p-6">
                {/* Tag */}
                <Chip
                  size="sm"
                  color="success"
                  variant="flat"
                  className="w-fit text-[#33612B] font-semibold"
                >
                  {route.type}
                </Chip>

                {/* Title */}
                <h3 className="text-lg font-semibold text-zinc-900">
                  {route.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-zinc-600">
                  {route.description}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-700">
                    {route.duration}
                  </span>

                  {route.hasDetails && (
                    <Link href="/local-sightseeing">
                      <Button
                        radius="full"
                        size="sm"
                        className="text-[#33612B] font-semibold"
                      >
                        View Details
                      </Button>
                    </Link>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
