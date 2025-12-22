"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#33612B]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <Image
            src="/images/Logo.png"
            alt="Kodai Journey Logo"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
          <h3 className="text-lg font-semibold text-white">
            Kodai Journey Tours & Travels
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/80">
            Trusted cab services in Kodaikanal for local, outstation and airport
            travel.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <button onClick={() => handleScroll("home")}
                className="cursor-pointer hover:text-white transition">Home</button>
            </li>
            <li>
              <button onClick={() => handleScroll("services")}
                className="cursor-pointer hover:text-white transition">Services</button>
            </li>
            <li>
              <button onClick={() => handleScroll("packages")}
                className="cursor-pointer hover:text-white transition">Packages</button>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <button onClick={() => handleScroll("contact")}
                className="cursor-pointer hover:text-white transition">Contact</button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>Local Sightseeing</li>
            <li>Outstation Trips</li>
            <li>Airport Pickup</li>
            <li>Custom Packages</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>📞 +91 99522 27577</li>
            <li>💬 WhatsApp Available</li>
            <li>📍 Kodaikanal, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Kodaijourney. All rights reserved.
      </div>
    </footer>
  );
}
