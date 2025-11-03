interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="border border-dashed border-gray-300 rounded-2xl p-8  hover:border-gray-400 transition-colors duration-300">
      <div className="flex flex-col items-center text-center gap-4">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-yellow mb-8">
          <img src={icon} alt={title} className="w-8 h-8 object-contain" />
        </div>

        <h3 className="text-xl font-semibold text-vlack ">{title}</h3>
        <p className="text-gray-600 text-sm! leading-relaxed">{description}</p>
      </div>
    </div>
  );
}