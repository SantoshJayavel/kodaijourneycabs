import LocalSightseeingPage from '../../components/LocalSightseeingPage'

interface RouteDetails {
    title: string;
    duration: string;
    type: string;
    description: string;
}

const routeData: Record<string, RouteDetails> = {
    "kodaikanal-local-sightseeing": {
        title: "Kodaikanal Local Sightseeing",
        duration: "1 Day",
        type: "Popular",
        description:
            "Explore Kodaikanal’s top attractions including Bryant Park, Coaker’s Walk, Pillar Rocks, and more. Ideal for families, couples, and solo travelers.",
    },
    "coimbatore-kodaikanal": {
        title: "Coimbatore ↔ Kodaikanal",
        duration: "One Way / Round Trip",
        type: "Airport Route",
        description:
            "Stress-free hill travel with professional drivers experienced in ghat roads. Available for one-way and round trips.",
    },
    "madurai-kodaikanal": {
        title: "Madurai ↔ Kodaikanal",
        duration: "One Way / Round Trip",
        type: "Airport Route",
        description:
            "Reliable airport pickups and drops with on-time service and comfortable vehicles.",
    },
    "honeymoon-package": {
        title: "Honeymoon Package",
        duration: "2–3 Days",
        type: "Special",
        description:
            "A romantic getaway designed for couples with customized itineraries, leisure time, and scenic locations.",
    },
};

export default async function RoutePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const route = routeData[slug];

    if (!route) {
        return <div className="p-10">Route not found</div>;
    }

    if (slug === "kodaikanal-local-sightseeing") {
        return <LocalSightseeingPage />;
    }

    return (
        <>
            <section className="bg-[#33612B] py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h1 className="text-3xl font-semibold text-white">
                        {route.title}
                    </h1>
                    <p className="mt-3 text-white/80">
                        {route.duration} • {route.type}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <p className="text-lg leading-7 text-zinc-700">
                        {route.description}
                    </p>
                </div>
            </section>
        </>
    );
}
