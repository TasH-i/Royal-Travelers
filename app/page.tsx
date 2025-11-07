import ExploreSriLanka from "@/components/Home/Exploresrilanka";
import FeaturedTours from "@/components/Home/FeaturedTours";
import HeroSection from "@/components/Home/Herosection";
import PlanYourTrip from "@/components/Home/PlanYourTrip";
import PopularDestinations from "@/components/Home/Populardestinations";
import TestimonialsSection from "@/components/Home/TestimonialsSection";
import YogaExperience from "@/components/Home/YogaExperience";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#06252c]">

      <HeroSection />
      <ExploreSriLanka />
      <FeaturedTours />
      <YogaExperience />
      <PopularDestinations />
      <TestimonialsSection />
      <PlanYourTrip />

    </div>
    </>
  );
}
