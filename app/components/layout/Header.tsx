"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
} from "@heroui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", id: "home", type: "scroll" },
  { name: "Services", id: "services", type: "scroll" },
  { name: "Packages", id: "packages", type: "scroll" },
  { name: "Gallery", id: "gallery", href: "/gallery", type: "route" },
  { name: "Contact", id: "contact", type: "scroll" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };



  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      shouldHideOnScroll={true}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={clsx(
        "sticky top-0 z-50 transition-all",
        "py-4 md:py-5",
        "bg-[#33612B]",
        scrolled && "shadow-sm border-b border-zinc-200/60"
      )}
    >

      {/* BRAND */}
      <NavbarBrand>
        <KodaiJourneyLogo />
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold tracking-tight text-white"
        >
          Kodai Journey
        </Link>
      </NavbarBrand>

      {/* DESKTOP NAV */}
      <NavbarContent className="hidden md:flex gap-8" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.name}>
            {link.type === "scroll" ? (
              <button
                onClick={() => handleScroll(link.id!)}
                className={clsx(
                  "text-sm font-medium transition-colors",
                  pathname === "/" && "cursor-pointer",
                  "text-white hover:text-gray-200"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                href={link.href!}
                className="text-sm font-medium text-white hover:text-gray-200 transition-colors"
              >
                {link.name}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* RIGHT ACTIONS */}
      <NavbarContent justify="end" className="gap-3">
        <Button
          as={Link}
          href="/contact"
          color="success"
          radius="full"
          className="hidden sm:flex px-7 py-2.5 font-medium shadow-sm"
        >
          Book Now
        </Button>
      </NavbarContent>

      <NavbarMenu className="pt-6">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.name}>
            <button
              onClick={() => handleScroll(link.id)}
              className={clsx(
                "text-sm font-medium transition-colors",
                pathname === "/" && "cursor-pointer",
                "text-white"
              )}
            >
              {link.name}
            </button>
          </NavbarMenuItem>
        ))}

        <NavbarMenuItem className="mt-4">
          <Button
            as={Link}
            href="/contact"
            radius="full"
            className="w-full font-medium"
          >
            Book Now
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export const KodaiJourneyLogo = () => {
  return (
    <Image
      src="/images/Logo.png"
      alt="Acme Logo"
      width={80}
      height={80}
      priority
    />
  );
};