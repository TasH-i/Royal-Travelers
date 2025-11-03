import Image from "next/image";

interface ReviewCardProps {
  image: string;
  name: string;
  location: string;
  review: string;
  rating: number;
}

export default function ReviewCard({
  image,
  name,
  location,
  review,
  rating,
}: ReviewCardProps) {
  return (
    <div className="bg-transparent border border-dashed border-cyan-600 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center space-y-3 md:space-y-4 hover:border-cyan-300 transition-colors duration-300 md:min-w-1/3 md:h-[480px] lg:h-[360px] min-h-[420px] md:min-h-auto">
      {/* Profile Image */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shrink-0">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Location */}
      <p className="text-slate-300 text-xs md:text-sm shrink-0">{location}</p>

      {/* Name */}
      <h3 className="text-base md:text-lg font-semibold text-white shrink-0">{name}</h3>

      {/* Review Text */}
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed grow">{review}</p>

      {/* Rating */}
      <div className="flex justify-center space-x-1 shrink-0">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-base md:text-lg">★</span>
        ))}
      </div>
    </div>
  );
}