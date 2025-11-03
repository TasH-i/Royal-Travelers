'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Button from '../ui/button';

const HERO_CONTENT = [
    {
        id: 1,
        title: 'Sri Lanka Awaits',
        subtitle: 'LEAP BEYOND LIMITS',
        description: 'Experience ancient temples, golden beaches, and serene nature — all in one unforgettable journey.',
        media: '/Home/Hero/img01.webp'
    },
    {
        id: 2,
        title: 'Mountain Escapes',
        subtitle: 'DISCOVER HEIGHTS',
        description: 'Trek through misty mountains and witness breathtaking views that will change your perspective.',
        media: '/Home/Hero/img02.webp'
    },
    {
        id: 3,
        title: 'Beach Paradise',
        subtitle: 'RELAX AND UNWIND',
        description: 'Golden sands, crystal clear waters, and sunsets that paint the sky in vibrant hues.',
        media: '/Home/Hero/img03.webp'
    },
    {
        id: 4,
        title: 'Cultural Journey',
        subtitle: 'IMMERSE YOURSELF',
        description: 'Connect with ancient traditions, local communities, and the soul of the island.',
        media: '/Home/Hero/img04.webp'
    }
];

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlay(false);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_CONTENT.length);
        setIsAutoPlay(false);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_CONTENT.length) % HERO_CONTENT.length);
        setIsAutoPlay(false);
    };

    const current = HERO_CONTENT[currentSlide];

    return (
        <section className="relative w-full h-[65vh] lg:h-screen" style={{ backgroundColor: '#021616' }}>
            {/* Background with gradient overlay */}
            {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black opacity-50 z-10"></div> */}

            {/* Main Background Image with smooth fade animation - DESKTOP */}
            <div className="absolute inset-0 overflow-hidden hidden lg:block">
                <motion.div
                    className="absolute inset-0 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    key={current.media}
                >
                    <img
                        src={current.media}
                        alt={current.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Mobile View - Smooth fade animation */}
            <div className="absolute inset-0 overflow-hidden lg:hidden">
                <motion.div
                    className="absolute inset-0 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    key={current.media}
                >
                    <img
                        src={current.media}
                        alt={current.title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            {/* Left Social Icons */}
            <div
                className="absolute z-50 left-8 top-1/2 transform -translate-y-1/2  hidden md:flex flex-col items-center gap-4 px-8 
  before:content-[''] before:w-px before:h-[8vh] before:bg-gray-300 before:opacity-40 
  after:content-[''] after:w-px after:h-[8vh] after:bg-gray-300 after:opacity-40"
            >
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-400 hover:border-blue-400 border-opacity-50 flex items-center justify-center hover:border-opacity-100 transition group cursor-pointer"
                >
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-400 hover:border-brand-yellow border-opacity-50 flex items-center justify-center hover:border-opacity-100 transition group cursor-pointer"
                >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                </a>

                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-400 hover:border-red-400 border-opacity-50 flex items-center justify-center hover:border-opacity-100 transition group cursor-pointer"
                >
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                </a>

                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-400 hover:border-blue-400 border-opacity-50 flex items-center justify-center hover:border-opacity-100 transition group cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-3 h-3 text-gray-400 group-hover:text-blue-400 transition"
                    >
                        <path d="M23.954 4.569a10.004 10.004 0 0 1-2.825.775 4.932 4.932 0 0 0 2.163-2.723 9.868 9.868 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.385 4.482A13.978 13.978 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.085 4.928 4.928 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646a9.936 9.936 0 0 0 2.411-2.534z" />
                    </svg>
                </a>
            </div>

            {/* Right Side Media Gallery - Vertical Lines with Images - DESKTOP ONLY */}
            <div className="absolute z-50 right-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-x-4 px-8">
                {HERO_CONTENT.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-3 mb-2">
                        {/* Image Thumbnail */}
                        <div
                            onClick={() => goToSlide(index)}
                            className={`relative overflow-hidden cursor-pointer transition-all duration-700 shrink-0 ${index === currentSlide
                                ? 'w-44 h-30 '
                                : 'w-44 h-30'
                                }`}
                        >
                            <img
                                src={item.media}
                                alt={`Slide ${item.id}`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            {/* <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-20"></div> */}
                        </div>
                        {/* Vertical Line */}
                        <div
                            className={`w-0.5 h-30  transition-all duration-300 ${index === currentSlide ? 'bg-red-600 h-30' : 'bg-white opacity-40'
                                }`}
                        ></div>
                    </div>
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col items-center justify-end pb-[10vh] md:pb-[15vh] lg:pb-[20vh] px-4 md:px-6">
                {/* Subtitle */}
                <motion.div 
                    className="mb-4 md:mb-6 text-center"
                    key={`subtitle-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-white text-opacity-80 tracking-[20px]! text-xs md:text-sm lg:text-base  font-light">
                        {current.subtitle}
                    </h3>
                </motion.div>

                {/* Title */}
                <motion.h1 
                    className="text-2xl md:text-4xl lg:text-7xl font-bold text-white text-center mb-4 md:mb-6 max-w-4xl leading-tight"
                    key={`title-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    {current.title}
                </motion.h1>

                {/* CTA Button */}
                <Button href="/Explore">Explore Packages</Button>
            </div>

            {/* Bottom Navigation - DESKTOP */}
            <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-20 hidden md:flex items-center justify-between px-4 md:px-[6vh] lg:px-[24vh]">
                {/* Left Description */}
                <motion.div 
                    className="text-white text-opacity-80 max-w-sm lg:max-w-xl"
                    key={`desc-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-sm md:text-base leading-relaxed tracking-wide">
                        {current.description}
                    </p>
                </motion.div>

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

            {/* Bottom Navigation - MOBILE */}
            <div className="absolute bottom-4 left-0 right-0 z-20 md:hidden flex items-center justify-between px-4">
                {/* Left Description - Mobile */}
                <motion.div 
                    className="text-white text-opacity-75 flex-1"
                    key={`mobile-desc-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xs leading-relaxed line-clamp-2">
                        {current.description}
                    </p>
                </motion.div>

                {/* Right Navigation Arrows - Mobile */}
                <div className="flex items-center gap-2 ml-3">
                    <button
                        onClick={prevSlide}
                        className="w-8 h-8 rounded-full cursor-pointer border border-white border-opacity-50 text-white flex items-center justify-center hover:border-opacity-100 hover:bg-white hover:text-black transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        <svg
                            className="w-4 h-4"
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
                        className="w-10 h-10 rounded-full border cursor-pointer border-white text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                        aria-label="Next slide"
                    >
                        <svg
                            className="w-4 h-4"
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
        </section>
    );
}