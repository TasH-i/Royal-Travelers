import FeatureCard from "../ui/FeatureCardLight";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function YogaExperience() {
  const features: Feature[] = [
    {
      id: 1,
      icon: "/icons/4.webp",
      title: "Wellness & Yoga Experiences",
      description:
        "Begin each day with calming yoga guided by certified instructors. Relax, recharge, and embrace Sri Lanka's peaceful energy.",
    },
    {
      id: 2,
      icon: "/icons/5.webp",
      title: "Cultural Depth",
      description:
        "Discover ancient temples and royal cities rich in history. Experience the heart of Sri Lanka's Buddhist heritage.",
    },
    {
      id: 3,
      icon: "/icons/6.webp",
      title: "Comfortable Transfers & Hotels",
      description:
        "Travel smoothly in private vehicles and stay in handpicked hotels. Every detail is arranged for comfort and peace of mind.",
    },
    {
      id: 4,
      icon: "/icons/7.webp",
      title: "Personalized Service",
      description:
        "Enjoy local hospitality with 24/7 support throughout your trip. We tailor every journey to your interests and pace.",
    },
  ];

  return (
    <>
      {/* DESKTOP VIEW */}
      <section className="hidden lg:block relative w-full h-screen overflow-hidden bg-gray-50">
        {/* Background Image (keeps its natural width) */}
        <div className="relative h-full w-auto">
          <img
            src="/Home/YogaExperience/img3.webp"
            alt="Yoga Experience"
            className="h-full w-auto object-cover"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%), linear-gradient(to left, transparent 0%, rgba(0,0,0,1) 5%)",
              WebkitMaskComposite: "intersect",
              maskComposite: "intersect",
              WebkitFilter: "grayscale(5%) brightness(1.05)",
              filter: "grayscale(5%) brightness(1.05)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent 100%), linear-gradient(to left, transparent 0%, rgba(0,0,0,1) 5%)",
            }}
          />
        </div>


        {/* Right White Content Overlay (half width) */}
        <div className="absolute top-0 right-0 w-3/5 h-full flex flex-col justify-center px-8 md:px-32">
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-800 font-semibold! mb-2 text-center">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Makes Us Unique
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* TABLET VIEW */}
      <section className="hidden md:block lg:hidden relative w-full min-h-screen overflow-hidden bg-gray-50 py-12">
        <div className="w-full px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-800 font-semibold! mb-2 text-center">Why Choose Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              What Makes Us Unique
            </h2>

            <img
              src="/Home/YogaExperience/img3.webp"
              alt="Yoga Experience"
              className="w-full h-90 md:h-130 object-cover rounded-lg mb-8"
              style={{
                WebkitFilter: "grayscale(5%) brightness(1.05)",
                filter: "grayscale(5%) brightness(1.05)",
              }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </div>
      </section>

      {/* MOBILE VIEW */}
      <section className="block md:hidden relative w-full min-h-screen overflow-hidden bg-gray-50 py-8">
        <div className="w-full px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-800 font-semibold! mb-2 text-center text-sm">Why Choose Us</p>
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              What Makes Us Unique
            </h2>

            <img
              src="/Home/YogaExperience/img3.webp"
              alt="Yoga Experience"
              className="w-full h-64 object-cover rounded-lg mb-6"
              style={{
                WebkitFilter: "grayscale(5%) brightness(1.05)",
                filter: "grayscale(5%) brightness(1.05)",
              }}
            />

            <div className="grid grid-cols-1 gap-4">
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
        </div>
      </section>
    </>
  );
}