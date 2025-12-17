"use client";

import { Card, CardBody } from "@heroui/react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  location: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Arun Kumar",
    location: "Chennai",
    review:
      "Excellent service! The driver was punctual and very knowledgeable about Kodaikanal. Highly recommended.",
  },
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    review:
      "Clean vehicle, smooth ride, and friendly driver. Made our family trip completely stress-free.",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    review:
      "Booked airport pickup and sightseeing package. Everything was perfectly managed.",
  },
  {
    name: "Sneha Iyer",
    location: "Coimbatore",
    review:
      "Very professional service. Transparent pricing and excellent customer support.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Trusted by travelers across India.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <Card
              key={item.name}
              shadow="sm"
              radius="lg"
              className="border border-zinc-200 hover:shadow-md transition-shadow"
            >
              <CardBody className="flex flex-col gap-4 p-6">
                {/* Rating */}
                <div className="flex gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-yellow-500"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-sm leading-6 text-zinc-600">
                  “{item.review}”
                </p>

                {/* User */}
                <div className="mt-auto">
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {item.location}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
