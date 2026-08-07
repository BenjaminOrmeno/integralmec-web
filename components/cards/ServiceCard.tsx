import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-red-600
        hover:shadow-[0_0_35px_rgba(220,38,38,0.25)]
      "
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-red-600 transition group-hover:scale-110">
        <Icon size={34} className="text-white" />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-8 text-gray-400">
        {description}
      </p>
    </div>
  );
}