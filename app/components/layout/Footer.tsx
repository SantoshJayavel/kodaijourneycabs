export default function Footer() {
  return (
    <footer className="bg-[#33612B]">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white">
            Kodai Journey Tours & Travels
          </h3>
          <p className="mt-3 text-sm leading-6">
            Trusted cab services in Kodaikanal for local  , outstation and airport
            travel.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Packages</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-white">Services</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Local Sightseeing</li>
            <li>Outstation Trips</li>
            <li>Airport Pickup</li>
            <li>Custom Packages</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>📞 +91 99522 27577</li>
            <li>💬 WhatsApp Available</li>
            <li>📍 Kodaikanal, Tamil Nadu</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs">
        © {new Date().getFullYear()} Kodaijourney. All rights reserved.
      </div>
    </footer>
  );
}
