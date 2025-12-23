const itinerary = [
    {
        day: "Day 1",
        title: "Classic Kodaikanal",
        places: [
            "Coaker’s Walk",
            "Upper Lake View",
            "Moire Point",
            "Pine Tree Forest",
            "Guna Caves",
            "Pillar Rocks",
            "Green Valley View",
            "Bryant Park",
            "Lake Boating",
        ],
    },
    {
        day: "Day 2",
        title: "Nature & Villages",
        places: [
            "Observatory Pine Forest",
            "Rose Garden",
            "Gundar Falls",
            "Poombarai Village View",
            "Poombarai Village",
            "Mahalakshmi Temple",
            "Kuzhadai Velapper Temple",
            "Palani View",
            "Mannavanur Sheep Farm",
            "Mannavanur Lake",
        ],
    },
    {
        day: "Day 3",
        title: "Valleys & Views",
        places: [
            "Silent Valley View",
            "Fire Tower",
            "Berijam Lake View",
            "Caps Fly Valley",
            "Herbal Forest",
            "Berijam Lake",
            "Shopping",
            "Lake Boating",
        ],
    },
    {
        day: "Day 4",
        title: "Waterfalls & Trek",
        places: [
            "La Saleth Church",
            "500 Years Old Tree",
            "Vattakanal Falls",
            "Pambar Falls",
            "Mountain Beauty",
            "Dolphin Nose",
            "Echo Rock",
        ],
    },
];


export default function LocalSightseeingPage() {
    return (
        <>
            {/* Sub Hero */}
            <section className="relative h-[60vh] min-h-[420px] text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/gallery/5.webp')",
                    }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                    <div className="max-w-5xl">
                        <h1 className="text-4xl md:text-5xl font-semibold">
                            Kodaikanal Local Sightseeing
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white/90">
                            Day-wise curated itinerary covering the best of Kodaikanal.
                            <br />
                            Starting time: <strong>9:30 AM</strong>
                        </p>
                    </div>
                </div>
            </section>


            {/* Itinerary */}
            <section className="py-20 bg-zinc-50">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid gap-10 md:grid-cols-2">
                        {itinerary.map((day) => (
                            <div
                                key={day.day}
                                className="rounded-2xl bg-white p-8 shadow-sm border border-zinc-200"
                            >
                                <h3 className="text-xl font-semibold text-zinc-900">
                                    {day.day}
                                </h3>
                                <p className="mt-1 text-sm text-zinc-500">
                                    {day.title}
                                </p>

                                <ul className="mt-6 space-y-2 text-sm text-zinc-700">
                                    {day.places.map((place) => (
                                        <li key={place} className="flex gap-2">
                                            <span className="text-[#33612B]">•</span>
                                            {place}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-2xl font-semibold text-zinc-900">
                        Ready to Explore Kodaikanal?
                    </h2>
                    <p className="mt-3 text-zinc-600">
                        Comfortable cabs • Local drivers • Flexible timing
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href="tel:+919952227577"
                            className="rounded-full bg-[#33612B] px-8 py-3 text-white font-semibold"
                        >
                            Book Now
                        </a>
                        <a
                            href="https://wa.me/919952227577"
                            target="_blank"
                            className="rounded-full border border-[#33612B] px-8 py-3 text-[#33612B] font-semibold"
                        >
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
