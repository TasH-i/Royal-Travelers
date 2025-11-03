'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SCROLL_THRESHOLD = 10;

const TOURS_PACKAGES = [
    {
        id: 1,
        name: "Adventure Tours",
        description: "Thrilling expeditions for adventure seekers"
    },
    {
        id: 2,
        name: "Beach Getaways",
        description: "Relaxing beach packages with luxury amenities"
    },
    {
        id: 3,
        name: "Cultural Tours",
        description: "Explore rich cultural heritage and traditions"
    },
    {
        id: 4,
        name: "Mountain Expeditions",
        description: "Challenge yourself with mountain adventures"
    },
    {
        id: 5,
        name: "Luxury Packages",
        description: "Premium travel experiences for discerning travelers"
    },
    {
        id: 6,
        name: "Budget Friendly",
        description: "Affordable travel without compromising quality"
    }
] as const;

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'HOME', href: '/' },
        { name: 'TOURS & PACKAGES', href: '#', isDropdown: true },
        { name: 'ABOUT', href: '/about' },
        { name: 'DESTINATIONS', href: '/destinations' },
        { name: 'GALLERY', href: '/gallery' },
        { name: 'CONTACT', href: '/contact' },
    ];

    const isActive = (href: string) => {
        if (href === '#') return false;
        return pathname === href;
    };

    return (
<header className={`fixed top-0 z-90 w-full transition-all duration-300 ${
            isScrolled 
                ? 'bg-linear-to-br from-cyan-950 to-transparent backdrop-blur-sm' 
                : 'bg-transparent'
        }`}>            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 shrink-0 -mt-4">
                        <Image
                            src="/logo.webp"
                            alt="Royal Travelers Logo"
                            width={230}
                            height={230}
                            priority
                        />
                    </Link>

                    {/* Divider */}
                    <div className="hidden md:block w-0.5 h-6 bg-white opacity-50 mx-4"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 flex-1 ml-4">
                        {navItems.map((item) => (
                            item.isDropdown ? (
                                <div key={item.name} ref={dropdownRef} className="relative group">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="font-semibold cursor-pointer text-white hover:scale-105 transtition-all duration-700 transition flex items-center gap-2 text-sm"
                                    >
                                        {item.name}
                                        {isDropdownOpen ? (
                                            <ChevronUp />
                                        ) : (
                                            <ChevronDown />
                                        )}
                                    </button>

                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-full left-0 mt-0 w-64 rounded-b-lg shadow-xl overflow-hidden bg-slate-900 border-t-2 border-brand-yellow">
                                            {TOURS_PACKAGES.map((tour, idx) => (
                                                <Link
                                                    key={tour.id}
                                                    href={`/tours/${tour.id}`}
                                                    className={`block px-4 py-3 text-white text-sm hover:opacity-80 transition ${idx !== TOURS_PACKAGES.length - 1 ? 'border-b border-white border-opacity-20' : ''
                                                        }`}
                                                    onClick={() => setIsDropdownOpen(false)}
                                                >
                                                    <div className="font-semibold">{tour.name}</div>
                                                    <p className="text-xs opacity-75">{tour.description}</p>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`font-semibold transition text-sm ${isActive(item.href) ? 'text-brand-yellow' : 'text-white hover:scale-110 transtition-all duration-700 transition'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </nav>

                    <div className="flex items-center gap-4 ml-auto">
                        {/* Book Your Tour Button */}
                        <button className="hidden sm:block px-6 py-2.5 rounded-full font-bold cursor-pointer text-white bg-brand-red hover:scale-110 transtition-all duration-700 transition text-sm">
                            Book Your Tour
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-white"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-brand-yellow border-opacity-30 bg-slate-900 bg-opacity-98">
                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <div key={item.name}>
                                    {item.isDropdown ? (
                                        <div>
                                            <button
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="w-full text-left px-4 py-2 font-semibold text-white hover:opacity-80 transition flex justify-between items-center text-sm"
                                            >
                                                {item.name}
                                                <ChevronDown />
                                            </button>

                                            {isDropdownOpen && (
                                                <div className="pl-4 bg-opacity-50">
                                                    {TOURS_PACKAGES.map((tour) => (
                                                        <Link
                                                            key={tour.id}
                                                            href={`/tours/${tour.id}`}
                                                            className="block px-4 py-2 text-xs text-white hover:opacity-80 transition"
                                                            onClick={() => {
                                                                setIsDropdownOpen(false);
                                                                setIsMobileMenuOpen(false);
                                                            }}
                                                        >
                                                            {tour.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-2 font-semibold transition text-sm ${isActive(item.href) ? 'text-brand-yellow' : 'text-white hover:opacity-80'
                                                }`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="w-5/6 mt-4 ml-4 px-6 py-2 rounded-full font-bold text-white bg-brand-red hover:scale-110  transition text-sm">
                            Book Your Tour
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}