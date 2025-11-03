"use client";
import Image from "next/image";

export default function FeaturedTours() {
  const tours = [
    {
      id: 1,
      image: "/Home/FeaturedTours/img1.webp",
      title: "8-Day Sri Lanka Adventure",
      description: "A perfect balance of culture, nature, and relaxation.",
      highlights: ["Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Hikkaduwa"],
    },
    {
      id: 2,
      image: "/Home/FeaturedTours/img2.webp",
      title: "Wellness & Yoga Retreat",
      description: "Rebalance your body and mind with morning yoga, Ayurvedic treatments.",
      highlights: ["Yoga", "Ayurveda", "Meditation", "Nature Walks"],
    },
  ];

  return (
    <section className="bg-gray-50 pt-20 ">
      <div className="lg:max-w-[80%] mx-auto px-6 md:px-12 text-center">
        {/* Section Header */}
        <p className="text-gray-800 font-bold! text-md! mb-3">Featured Tour Packages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Discover Our Most Popular Sri Lanka Tours
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          We specialize in creating immersive travel experiences across Sri Lanka — from yoga
          retreats & cultural adventures to wildlife safaris and coastal relaxation. Our goal is to
          help you uncover the island’s true beauty, with comfort and authenticity at every step.
        </p>
        <button className="bg-brand-pink hover:bg-brand-red text-white font-medium px-8 py-2 rounded-full mb-14 transition-colors duration-300">
          Explore More
        </button>

        {/* Tour Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen mx-auto">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="relative group overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <Image
                src={tour.image}
                alt={tour.title}
                width={800}
                height={500}
                className="w-full h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-200 mb-3">{tour.description}</p>
                <p className="text-sm mb-2">
                  <span className="font-semibold text-white">Highlights:</span>{" "}
                  {tour.highlights.join(" • ")}
                </p>
                <a
                  href="#"
                  className="underline text-white font-medium hover:text-[#FF6B6B] transition-colors duration-200"
                >
                  View Itinerary
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
