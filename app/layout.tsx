import "./globals.css";
import Providers from "@/app/providers/HeroUIProvider";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: {
    default: "Kodai Journey Tours & Travels | Cab Service in Kodaikanal | Coimbatore to Kodaikanal Taxi | Madurai to Kodaikanal Cab | Palani to Kodaikanal Cab",
    template: "%s | Kodai Journey Tours & Travels",
  },
  description:
    "Reliable cab services in Kodaikanal for local sightseeing, airport transfers, and outstation travel. Affordable pricing with experienced drivers.",
  keywords: [
    "Kodaikanal cab service",
    "Kodaikanal taxi",
    "Kodai Journey",
    "local sightseeing cab Kodaikanal",
    "airport taxi Kodaikanal",
    "cab rental kodaikanal",
    "outstation cab Kodaikanal",
    "Kodaikanal tour packages",
    "Kodaikanal travel agency",
    "cab service near me",
    "Coimbatore to Kodaikanal cab",
    "Madurai to Kodaikanal cab",
    "Palani to Kodaikanal cab",
    "Dindigul to Kodaikanal cab",
    "Theni to Kodaikanal cab",
  ],
  metadataBase: new URL("https://kodaijourney.com"),

  openGraph: {
    title: "Kodai Journey Tours & Travels",
    description:
      "Affordable and reliable cab services in Kodaikanal for sightseeing and airport transfers.",
    url: "https://kodaijourney.com",
    siteName: "Kodai Journey",
    images: ["/images/5.webp"],
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript">
          {`(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "uqbpiercnv");
          }`}
        </script>
      </head>
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
