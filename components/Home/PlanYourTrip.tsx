"use client";

import Button from "../ui/button";

export default function PlanYourTrip() {
    const features = [
        {
            icon: "/icons/1.webp",
            title: "Flexible Dates & Custom Routes",
        },
        {
            icon: "/icons/2.webp",
            title: "Russian-Speaking Support",
        },
        {
            icon: "/icons/3.webp",
            title: "Transparent Pricing, No Hidden Fees",
        },
    ];

    return (
        <section className="bg-[#06252c] text-white py-4 md:py-16 px-6 md:px-12 text-center">
            {/* ======================== MOBILE VIEW ======================== */}
            <div className="md:hidden space-y-8 mb-8">
                {/* Heading */}
                <div>
                    <p className="text-slate-300 font-semibold text-xs mb-2">Plan Your Trip</p>
                    <h2 className="text-2xl font-bold mb-4">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Whether you're planning your first trip or returning to explore more, our team
                        is here to make it effortless.
                    </p>
                </div>

                {/* Feature Cards - Stacked */}
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="border border-dashed border-gray-400 py-6 px-4 hover:border-slate-400/60 transition-colors duration-300 rounded-lg"
                        >
                            <div className="flex items-center gap-4 text-left">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-yellow shrink-0">
                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                        className="w-6 h-6 object-contain"
                                    />
                                </div>
                                <h3 className="text-sm font-semibold text-white leading-snug">
                                    {feature.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
 
                {/* Buttons - Stacked */}
                <div className="space-x-2">
                        <button className="bg-brand-pink hover:bg-brand-red text-white font-medium px-4 py-2 rounded-full transition-colors duration-300">
                            Explore More
                        </button>
                        <Button href="/Explore">Request a Custom Tour</Button>
                    </div>
            </div>

            {/* ======================== TABLET & DESKTOP VIEW ======================== */}
            <div className="hidden md:block mb-12">
                <div className="lg:max-w-1/2 mx-auto">
                    {/* Heading */}
                    <p className="text-slate-300 font-semibold! mb-3">Plan Your Trip</p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Journey?
                    </h2>
                    <p className="text-slate-400 mx-auto mb-14">
                        Whether you're planning your first trip or returning to explore more, our team
                        is here to make it effortless.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="border border-dashed border-gray-400 py-8 px-4 hover:border-slate-400/60 transition-colors duration-300"
                            >
                                <div className="flex flex-col items-center text-center gap-5">
                                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-yellow">
                                        <img
                                            src={feature.icon}
                                            alt={feature.title}
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-md! tracking-[2px]! font-semibold text-white leading-snug mt-6">
                                        {feature.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-x-4">
                        <button className="bg-brand-pink hover:bg-brand-red text-white font-medium px-8 py-2 rounded-full transition-colors duration-300">
                            Explore More
                        </button>
                        <Button href="/Explore">Request a Custom Tour</Button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex w-[95%] border-b border-gray-500 py-8 md:py-12 lg:py-16 mx-auto"></div>
        </section>
    );
}