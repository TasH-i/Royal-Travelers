"use client";

import { useState } from "react";
import Button from "../ui/button";
import ReviewCard from "../ui/ReviewCard";

export default function TestimonialsSection() {
    const reviews = [
        {
            image: "/Home/Testimonials/img1.webp",
            name: "Ivan & Maria",
            location: "Moscow",
            review:
                "Our trip was pure adventure and relaxation. From temples to beaches — unforgettable! We can't wait to travel with Royal Travellers again!",
            rating: 4,
        },
        {
            image: "/Home/Testimonials/img2.webp",
            name: "Vladimir & Elena",
            location: "St. Petersburg",
            review:
                "The guides were friendly, knowledgeable, and always ready to help. We loved the tea plantations, the scenic train ride, and the safari — every day brought something new and exciting.",
            rating: 5,
        },
        {
            image: "/Home/Testimonials/img3.webp",
            name: "Anna Petrova",
            location: "Moscow",
            review:
                "Everything was perfectly organized — from hotels to activities at the beach. We were amazed by Sri Lanka's beauty and the team's hospitality.",
            rating: 5,
        },
        {
            image: "/Home/Testimonials/img4.webp",
            name: "Oleg & Natalia",
            location: "Kazan",
            review:
                "Royal Travellers made our honeymoon magical — the attention to detail and local experiences were beyond expectations.",
            rating: 5,
        },
        {
            image: "/Home/Testimonials/img5.webp",
            name: "Denis & Irina",
            location: "Yekaterinburg",
            review:
                "It was the most organized trip we've ever had. From the mountains to the sea, everything was smooth and memorable!",
            rating: 5,
        },
        {
            image: "/Home/Testimonials/img6.webp",
            name: "Sergey & Olga",
            location: "Krasnodar",
            review:
                "Amazing coordination and very friendly team! Every day was a new adventure filled with joy and culture.",
            rating: 5,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const itemsPerSlide = 3;
    const totalSlides = reviews.length - itemsPerSlide + 1;
    
    // Mobile state
    const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const nextMobileSlide = () => {
        setCurrentMobileSlide((prev) => (prev + 1) % reviews.length);
    };

    const prevMobileSlide = () => {
        setCurrentMobileSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <section className="bg-[#06252c] md:py-20 px-6 md:px-12 text-center text-white">
            <div className="max-w-screen">
                {/* Heading */}
                <p className="text-slate-300 font-semibold! mb-3">Client Testimonials</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What Our Travelers Say
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                    Real experiences from happy guests who explored Sri Lanka with Royal
                    Travellers.
                </p>

                <div className="py-12">
                    <Button href="/Explore">Explore Packages</Button>
                </div>

                {/* ======================== MOBILE VIEW ======================== */}
                <div className="md:hidden">
                    {/* Mobile Review Carousel - Single Item */}
                    <div className="relative overflow-hidden mb-8">
                        <div 
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentMobileSlide * 100}%)`,
                            }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="shrink-0 w-full">
                                    <ReviewCard {...review} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Navigation & Info */}
                    <div className="space-y-6">
                        {/* Description Text */}
                        <div className="text-white text-opacity-80">
                            <p className="text-sm leading-relaxed tracking-wide px-2">
                                Every journey tells a story — hear from travelers who discovered the
                                beauty, culture, and kindness of Sri Lanka through experiences crafted
                                by Royal Travellers.
                            </p>
                        </div>

                        {/* Mobile Navigation Arrows */}
                        <div className="flex items-center justify-between gap-3 px-2">
                            <button
                                onClick={prevMobileSlide}
                                className="w-10 h-10 rounded-full cursor-pointer border border-white border-opacity-50 text-white flex items-center justify-center hover:border-opacity-100 hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Previous slide"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Dot Indicators */}
                            <div className="flex gap-2 justify-center flex-1">
                                {reviews.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentMobileSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentMobileSlide
                                                ? "bg-white w-6"
                                                : "bg-white bg-opacity-40 hover:bg-opacity-60"
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextMobileSlide}
                                className="w-10 h-10 rounded-full border cursor-pointer border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Next slide"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Slide Counter */}
                        <p className="text-slate-400 text-xs">
                            {currentMobileSlide + 1} / {reviews.length}
                        </p>
                    </div>
                </div>

                {/* ======================== TABLET & DESKTOP VIEW ======================== */}
                <div className="hidden md:block">
                    {/* Review Carousel */}
                    <div className="relative overflow-hidden">
                        <div 
                            className="flex gap-6 md:gap-8 transition-transform duration-500 ease-out"
                            style={{
                                transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)`,
                            }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="shrink-0 w-1/3">
                                    <ReviewCard {...review} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows & Description */}
                    <div className=" bottom-6 md:bottom-10 pt-12 left-0 right-0 z-20 flex items-center justify-between px-4 md:px-[3vh] lg:px-[24vh]">
                        {/* Left Description */}
                        <div className="text-white text-opacity-80 max-w-sm lg:max-w-xl">
                            <p className="text-sm md:text-base leading-relaxed tracking-wide">
                                Every journey tells a story — hear from travelers who discovered the
                                beauty, culture, and kindness of Sri Lanka through experiences crafted
                                by Royal Travellers.
                            </p>
                        </div>

                        {/* Middle Horizontal Line */}
                        <div className="flex-1 mx-4 md:mx-8 border-t border-white border-opacity-30" />

                        {/* Right Navigation Arrows */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full cursor-pointer border border-white border-opacity-50 text-white flex items-center justify-center hover:border-opacity-100 hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Previous slide"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="w-12 md:w-14 h-12 md:h-14 rounded-full border cursor-pointer border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                                aria-label="Next slide"
                            >
                                <svg
                                    className="w-5 md:w-6 h-5 md:h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}