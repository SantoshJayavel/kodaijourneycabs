"use client";

import Image from "next/image";

const galleryImages = [
    "/images/1.webp",
    "/images/2.webp",
    "/images/3.webp",
    "/images/4.webp",
    "/images/5.webp",
    "/images/6.webp",
    "/images/7.webp",
    "/images/8.webp",
];

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-12 bg-white">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center mb-4 text-[#33612B]">
                Explore Kodai Journey
            </h1>

            {/* Description */}
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                A visual journey through misty hills, pine forests, waterfalls, and
                serene lakes that make Kodaikanal truly magical.
            </p>

            {/* Masonry Grid */}
            <div
                className="
          columns-1
          sm:columns-2
          md:columns-3
          lg:columns-4
          gap-6
        "
            >
                {galleryImages.map((src, index) => (
                    <div
                        key={index}
                        className="mb-6 break-inside-avoid overflow-hidden rounded-xl"
                    >
                        <Image
                            src={src}
                            alt={`Kodai Journey ${index + 1}`}
                            width={600}
                            height={800}
                            className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
