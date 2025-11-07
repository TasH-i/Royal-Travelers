"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface DestinationImage {
    image_id: number;
    image: string;
    image_title: string;
    image_description: string;
}

interface Destination {
    destination_id: number;
    destination_name: string;
    short_description: string;
    description: string;
    images: DestinationImage[];
}

const DESTINATIONS: Destination[] = [
    {
        destination_id: 1,
        destination_name: "Nuwara Eliya",
        short_description: "Mountain retreats & tea plantations",
        description: "Scenic train rides & mountain adventures.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1599956810904-066d853cb341?w=800&h=600&fit=crop",
                image_title: "Scenic Train Ride",
                image_description: "Experience the iconic train journey through misty mountains and lush greenery.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
                image_title: "Tea Plantations",
                image_description: "Walk through verdant tea gardens and learn the art of tea production.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Mountain Views",
                image_description: "Breathtaking vistas of mist-covered peaks and valleys.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1565008576549-bdea513c1b93?w=800&h=600&fit=crop",
                image_title: "Colonial Architecture",
                image_description: "Historic colonial buildings reflecting Sri Lanka's heritage.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Misty Mornings",
                image_description: "Magical dawn views amidst the cool mountain air.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Local Culture",
                image_description: "Interact with local communities and experience authentic mountain life.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Waterfall Trek",
                image_description: "Explore stunning waterfalls hidden in the mountains.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1465056836643-15cea6cebb2b?w=800&h=600&fit=crop",
                image_title: "Adventure Sports",
                image_description: "Paragliding and other thrilling mountain activities.",
            },
        ],
    },
    {
        destination_id: 2,
        destination_name: "Kandy",
        short_description: "Sacred temples & cultural heart",
        description: "Ancient wonders & breathtaking views.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1548013146-72c11d3d4e10?w=800&h=600&fit=crop",
                image_title: "Temple of the Sacred Tooth",
                image_description: "Explore the holiest Buddhist shrine in Kandy.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Lake Kandy",
                image_description: "Serene lakeside walks with stunning temple views.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1490933474519-c0428e51ebc9?w=800&h=600&fit=crop",
                image_title: "Royal Botanic Gardens",
                image_description: "Wander through lush botanical gardens.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1504681869696-d977e16e1884?w=800&h=600&fit=crop",
                image_title: "Cultural Dances",
                image_description: "Experience traditional Kandyan cultural performances.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1548013146-72c11d3d4e10?w=800&h=600&fit=crop",
                image_title: "Night Ceremony",
                image_description: "Sacred evening rituals at the temple.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Market Bazaar",
                image_description: "Vibrant local markets filled with crafts and spices.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1511228720902-e7c64a1f75bf?w=800&h=600&fit=crop",
                image_title: "Kandy View",
                image_description: "Panoramic views of the city from above.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1548013146-72c11d3d4e10?w=800&h=600&fit=crop",
                image_title: "Temple Rituals",
                image_description: "Participate in sacred ceremonies and traditions.",
            },
        ],
    },
    {
        destination_id: 3,
        destination_name: "Ella",
        short_description: "Train rides & mountain adventures",
        description: "Scenic train rides & mountain adventures.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1599956810904-066d853cb341?w=800&h=600&fit=crop",
                image_title: "Scenic Train Ride",
                image_description: "The legendary train journey through tea country.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
                image_title: "Tea Gardens",
                image_description: "Rolling hills covered in green tea plantations.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Mountain Trek",
                image_description: "Trek to Little Adam's Peak for stunning views.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
                image_title: "Waterfalls",
                image_description: "Discover beautiful waterfalls in the area.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Village Life",
                image_description: "Experience rural Sri Lankan village culture.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Sunset Views",
                image_description: "Golden hour views from mountain viewpoints.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Train Station",
                image_description: "Historic railway station in the heart of Ella.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop",
                image_title: "Local Cuisine",
                image_description: "Taste authentic Sri Lankan mountain cuisine.",
            },
        ],
    },
    {
        destination_id: 4,
        destination_name: "Dambulla & Sigiriya",
        short_description: "Ancient wonders & breathtaking views",
        description: "Ancient wonders & breathtaking views.",
        images: [
            {
                image_id: 1,
                image: "/Home/destinations/01.webp",
                image_title: "Sigiriya Rock",
                image_description: "Climb the iconic Lion Rock for panoramic views.",
            },
            {
                image_id: 2,
                image: "/Home/destinations/02.webp",
                image_title: "Ancient Frescoes",
                image_description: "Marvel at ancient paintings and frescoes.",
            },
            {
                image_id: 3,
                image: "/Home/destinations/03.webp",
                image_title: "Cave Temples",
                image_description: "Explore sacred cave temples in Dambulla.",
            },
            {
                image_id: 4,
                image: "/Home/destinations/04.webp",
                image_title: "Buddha Statues",
                image_description: "Ancient Buddha statues carved from rock.",
            },
            {
                image_id: 5,
                image: "/Home/destinations/05.webp",
                image_title: "Sunrise Trek",
                image_description: "Begin your day at the summit with golden sunrise.",
            },

        ],
    },
    {
        destination_id: 5,
        destination_name: "Yala National Park",
        short_description: "Wildlife Safaris & Golden Beaches",
        description: "Wildlife Safaris & Golden Beaches.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
                image_title: "Leopard Safari",
                image_description: "Spot elusive leopards in their natural habitat.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1456720671375-92c6b0e5e242?w=800&h=600&fit=crop",
                image_title: "Wildlife Encounter",
                image_description: "See diverse wildlife including elephants and deer.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Golden Beach",
                image_description: "Pristine beaches with golden sand and blue waters.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1444464666175-1642a4ff4e63?w=800&h=600&fit=crop",
                image_title: "Bird Watching",
                image_description: "Observe exotic birds in their natural environment.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Sunset Safari",
                image_description: "Evening game drive with stunning sunset views.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Lagoon Life",
                image_description: "Explore coastal lagoons and waterbirds.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Rock Formations",
                image_description: "Unique rock formations and geological features.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1494780174174-c91de586fcd7?w=800&h=600&fit=crop",
                image_title: "Camping Experience",
                image_description: "Stay close to nature with safari camp experiences.",
            },
        ],
    },
    {
        destination_id: 6,
        destination_name: "Galle",
        short_description: "Historic coastal fortresses",
        description: "Colonial charm & beach exploration.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Galle Fort",
                image_description: "Walk the iconic 16th-century Portuguese fort walls.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
                image_title: "Coastal Lighthouse",
                image_description: "Historic lighthouse overlooking the Indian Ocean.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Old Town Streets",
                image_description: "Charming cobblestone streets with colonial architecture.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Sunset at Fort",
                image_description: "Golden sunset views from Galle Fort ramparts.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Beach Escape",
                image_description: "Pristine beaches near the historic fort.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Market Life",
                image_description: "Local markets and vibrant street culture.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1588195538326-c5b1e6f3e5b5?w=800&h=600&fit=crop",
                image_title: "Art & Culture",
                image_description: "Galleries and cultural attractions.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Fort Overview",
                image_description: "Panoramic views of the complete fort structure.",
            },
        ],
    },
    {
        destination_id: 7,
        destination_name: "Mirissa",
        short_description: "Beach paradise & whale watching",
        description: "Tropical beaches & marine adventures.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Whale Watching",
                image_description: "Exciting whale and dolphin watching tours.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1507565534996-7d53e4e80a75?w=800&h=600&fit=crop",
                image_title: "Beach Paradise",
                image_description: "Pristine sandy beaches with crystal clear waters.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Seaside Village",
                image_description: "Charming fishing village atmosphere.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Sunset Beach",
                image_description: "Magical sunset moments on the beach.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Water Sports",
                image_description: "Surfing and other beach activities.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Beach Rocks",
                image_description: "Scenic rock formations along the shore.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Local Restaurants",
                image_description: "Fresh seafood dining experiences.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Beach Stroll",
                image_description: "Peaceful walks along the shoreline.",
            },
        ],
    },
    {
        destination_id: 8,
        destination_name: "Colombo",
        short_description: "Modern city & cultural hub",
        description: "Urban exploration & heritage sites.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop",
                image_title: "City Skyline",
                image_description: "Modern Colombo cityscape and architecture.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Colonial Buildings",
                image_description: "Heritage buildings from the colonial era.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1504681869696-d977e16e1884?w=800&h=600&fit=crop",
                image_title: "Shopping Districts",
                image_description: "Modern shopping and commercial areas.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Galle Face Beach",
                image_description: "Iconic promenade and beach area.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Nightlife",
                image_description: "Vibrant evening entertainment scene.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Local Markets",
                image_description: "Bustling markets and bazaars.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Religious Sites",
                image_description: "Temples, mosques, and churches.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Urban Life",
                image_description: "Bustling city streets and culture.",
            },
        ],
    },
    {
        destination_id: 9,
        destination_name: "Bentota",
        short_description: "Water sports & river lagoons",
        description: "Adventure activities & beach resorts.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Water Sports",
                image_description: "Jet skiing, surfing, and water activities.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
                image_title: "River Lagoon",
                image_description: "Scenic lagoon exploration and boat rides.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Beach Resorts",
                image_description: "Luxury resort and beach facilities.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Sunset Cruise",
                image_description: "Romantic sunset boat cruises.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Marine Life",
                image_description: "Snorkeling and marine exploration.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Coconut Palms",
                image_description: "Tropical landscape with palm trees.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Beachfront Dining",
                image_description: "Seaside restaurants and beach bars.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
                image_title: "Beach Paradise",
                image_description: "Idyllic beach vacation scenes.",
            },
        ],
    },
    {
        destination_id: 10,
        destination_name: "Horton Plains",
        short_description: "Mountain hiking & cloud views",
        description: "Scenic trails & natural wonders.",
        images: [
            {
                image_id: 1,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "World's End",
                image_description: "Dramatic cliff edge with breathtaking views.",
            },
            {
                image_id: 2,
                image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
                image_title: "Mountain Plateau",
                image_description: "High altitude plateau landscape.",
            },
            {
                image_id: 3,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Cloud Forest",
                image_description: "Mystical forest covered in clouds.",
            },
            {
                image_id: 4,
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
                image_title: "Baker's Falls",
                image_description: "Beautiful waterfall in the highlands.",
            },
            {
                image_id: 5,
                image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
                image_title: "Walking Trails",
                image_description: "Well-maintained hiking paths.",
            },
            {
                image_id: 6,
                image: "https://images.unsplash.com/photo-1495514811223-4d71bcdd2085?w=800&h=600&fit=crop",
                image_title: "Sunrise Hike",
                image_description: "Early morning mountain trekking experience.",
            },
            {
                image_id: 7,
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
                image_title: "Alpine Flora",
                image_description: "Unique mountain vegetation and wildlife.",
            },
            {
                image_id: 8,
                image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
                image_title: "Mountain Air",
                image_description: "Fresh alpine breeze and scenic beauty.",
            },
        ],
    },
];

export default function PopularDestinations() {
    const [activeDestinationId, setActiveDestinationId] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    const activeDestination = DESTINATIONS.find(
        (d) => d.destination_id === activeDestinationId
    );

    const currentImage = activeDestination?.images[currentImageIndex];
    const totalImages = activeDestination?.images.length || 0;

    const handlePrevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + totalImages) % totalImages
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    };

    const handleDestinationChange = (destinationId: number) => {
        setActiveDestinationId(destinationId);
        setCurrentImageIndex(0);
    };

    if (!activeDestination) return null;

    return (
        <section className="bg-white py-16 md:py-20 lg:py-24">

            <div className="text-center ">
                {/* Header Section */}
                <div className="px-6 md:px-12 ">
                    <p className="text-gray-800 font-bold! text-md! mb-3">
                        Popular Destinations
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Explore the Wonders of Sri Lanka
                    </h2>
                    <p className="text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                        From mist-covered hills to golden beaches, every corner of Sri Lanka tells a unique story. Discover the
                        island's most breathtaking destinations with Royal Travellers as your guide.
                    </p>
                </div>

                {/* Destination Tabs - Scrollable Carousel (No buttons) */}
                <div className="mb-12 md:mb-16 border-b border-gray-300 overflow-hidden">
                    <div
                        ref={tabsContainerRef}
                        className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide"
                        style={{
                            scrollBehavior: "smooth",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {DESTINATIONS.map((destination) => (
                            <button
                                key={destination.destination_id}
                                onClick={() => handleDestinationChange(destination.destination_id)}
                                className={`flex items-center gap-2 px-3 md:px-5 py-2 rounded-full font-normal transition-all duration-300 whitespace-nowrap text-sm md:text-base shrink-0 relative pb-4 ${activeDestinationId === destination.destination_id
                                    ? "text-brand-pink"
                                    : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                <span className={`flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full  text-xs md:text-sm font-semibold ${activeDestinationId === destination.destination_id
                                    ? "bg-brand-pink text-white"
                                    : "bg-gray-400 text-white"}`}>
                                    {destination.images.length}
                                </span>
                                <span>{destination.destination_name}</span>

                                {/* Bottom border for active tab */}
                                {activeDestinationId === destination.destination_id && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-pink"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Image Gallery - Enhanced Overlapping Layout */}
                <div className="relative flex justify-center items-center w-full overflow-hidden pb-24">
                    {/* Left Thumbnail 2 */}
                    <div
                        className="relative -mr-20 w-1/4 lg:w-1/6 h-[300px] lg:h-[400px] overflow-hidden shadow-md  cursor-pointer"
                        onClick={handlePrevImage}
                    >
                        <img
                            src={activeDestination.images[(currentImageIndex - 2 + totalImages) % totalImages]?.image}
                            alt="Previous 2"
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                    </div>

                    {/* Left Thumbnail 1 */}
                    <div
                        className="relative -mr-10 w-1/4 lg:w-1/5 h-[400px] lg:h-[520px]  overflow-visible cursor-pointer"
                        onClick={handlePrevImage}
                    >
                        <div className="relative h-full overflow-hidden shadow-lg ">
                            <img
                                src={activeDestination.images[(currentImageIndex - 1 + totalImages) % totalImages]?.image}
                                alt="Previous 1"
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 translate-y-full text-left pr-14">
                            <p className="title">
                                {activeDestination.images[(currentImageIndex - 1 + totalImages) % totalImages]?.image_title}
                            </p>
                            <p className="hidden lg:flex text-sm! text-gray-600 mt-0.5 ">
                                {activeDestination.images[(currentImageIndex - 1 + totalImages) % totalImages]?.image_description}
                            </p>
                        </div>
                    </div>

                    {/* Center Active Image */}
                    <div className="relative z-20  w-2/4 lg:w-2/5 h-[450px] lg:h-[640px] overflow-hidden transform scale-105  transition-all duration-500">
                        <img
                            src={currentImage?.image}
                            alt={currentImage?.image_title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 from-black/60 via-transparent to-transparent flex flex-col justify-center items-center text-center p-6">
                            <h3 className="title2">
                                {activeDestination.destination_name}
                            </h3>
                            <p className="text-white text-xl! md:text-base font-bold! mb-4 max-w-lg shadow-xl">
                                {activeDestination.short_description}
                            </p>
                        </div>

                        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 mt-2 rounded-full text-sm font-semibold">
                            {currentImageIndex + 1} / {totalImages}
                        </div>
                    </div>

                    {/* Right Thumbnail 1 */}
                    <div
                        className="relative -ml-10 z-10 w-1/4 lg:w-1/5 h-[400px] lg:h-[520px]  overflow-visible cursor-pointer "
                        onClick={handleNextImage}
                    >
                        <div className="relative h-full overflow-hidden shadow-lg">
                            <img
                                src={activeDestination.images[(currentImageIndex + 1) % totalImages]?.image}
                                alt="Next 1"
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 p-2 translate-y-full text-left pl-18">
                            <p className="title">
                                {activeDestination.images[(currentImageIndex + 1) % totalImages]?.image_title}
                            </p>
                            <p className="hidden lg:flex text-sm! text-gray-600 mt-0.5">
                                {activeDestination.images[(currentImageIndex + 1) % totalImages]?.image_description}
                            </p>
                        </div>
                    </div>

                    {/* Right Thumbnail 2 */}
                    <div
                        className="relative -ml-20 w-1/4 lg:w-1/6 h-[300px] lg:h-[400px]  overflow-hidden shadow-md cursor-pointer"
                        onClick={handleNextImage}
                    >
                        <img
                            src={activeDestination.images[(currentImageIndex + 2) % totalImages]?.image}
                            alt="Next 2"
                            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
                    </div>
                </div>
                {/* CTA Button */}
                <div className="flex justify-center">
                    <button className="bg-brand-pink hover:bg-brand-red text-white font-medium px-8 py-2 rounded-full mb-14 transition-colors duration-300">
                        Explore More
                    </button>
                </div>
            </div>
        </section>
    );
}