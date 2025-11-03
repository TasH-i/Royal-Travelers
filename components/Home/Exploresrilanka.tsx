import Button from "../ui/button";
import FeatureCard from "../ui/Featurecard";

interface Feature {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export default function ExploreSriLanka() {
    const features: Feature[] = [
        {
            id: 1,
            icon: '/icons/1.webp',
            title: 'Authentic Experiences',
            description: "Discover Sri Lanka's timeless charm - ancient temples, lush tea hills, and golden beaches, guided by locals who know it best.",
        },
        {
            id: 2,
            icon: '/icons/2.webp',
            title: 'Trusted by Travellers',
            description: 'Over 1,000 happy guests from Russia & beyond have explored Sri Lanka with us - thanks to our care, comfort, and reliability.',
        },
        {
            id: 3,
            icon: '/icons/3.webp',
            title: 'Our Promise',
            description: 'Personalized tours, transparent prices, & hand-picked stays — crafted to help you experience Sri Lanka with ease and joy.',
        },
    ];

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat relative sm:h-auto"
            style={{ backgroundImage: 'url(/Home/ExploreSL/img05.webp)' }}
        >
            {/* Dark overlay for better text readability */}
            {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/30 to-slate-950/50"></div> */}

            {/* Content */}
            <div className="relative z-10">
                {/* Features Section */}
                <div className="px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>

                {/* bottom right text area Section */}
                <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-18 pb-12 sm:pb-16 md:pb-18">
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="hidden lg:block">

                            </div>
                            <div className="space-y-6 sm:space-y-8">
                                <div>
                                    <p className="text-white text-xs sm:text-sm font-bold mb-2">Welcome to Royal Travellers</p>
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight">
                                        <span className="text-white">Experience the
                                            of Island Living</span>
                                    </h1>
                                </div>

                                <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-justify md:text-left">
                                    We specialize in creating immersive travel experiences across Sri Lanka - from yoga
                                    retreats & cultural adventures to wildlife safaris and coastal relaxation. Our goal
                                    is to help you uncover the island's true beauty, with comfort and authenticity at
                                    every step.
                                </p>
                                <div className="mt-8 sm:mt-14"><Button href="/Explore">Explore More</Button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}