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
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Packages", id: "packages" },
  { name: "Contact", id: "contact" },
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
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className={clsx(
        "sticky top-0 z-50 transition-all",
        "py-4 md:py-5",
        "bg-[#33612B]",
        scrolled && "shadow-sm border-b border-zinc-200/60"
      )}
    >
      {/* MOBILE TOGGLE */}
      <NavbarContent justify="start" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight text-white"
          >
            Kodai Journey
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* BRAND */}
      <NavbarBrand>
        <AcmeLogo />
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
            <button
              onClick={() => handleScroll(link.id)}
              className={clsx(
                "text-sm font-medium transition-colors",
                pathname === "/" && "cursor-pointer",
                "text-white hover:text-gray-200"
              )}
            >
              {link.name}
            </button>
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

      {/* MOBILE MENU */}
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

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};