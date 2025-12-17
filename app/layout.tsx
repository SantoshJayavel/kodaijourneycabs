import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/providers/HeroUIProvider";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kodaijourneycabs",
  description: "Reliable Cab Services in Kodaikanal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#99D95F]">
          <Providers>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </Providers>
      </body>
    </html>
  );
}
