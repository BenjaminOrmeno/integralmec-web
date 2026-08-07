interface Props {
  name: string;
}

export default function BrandCard({
  name,
}: Props) {
  return (
    <div
      className="
        flex
        h-32
        items-center
        justify-center
        rounded-3xl
        border
        border-white/10
        bg-zinc-900
        px-12
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-red-600
        hover:bg-red-600
        hover:shadow-[0_0_30px_rgba(220,38,38,.35)]
      "
    >
      <span
        className="
          text-2xl
          font-bold
          tracking-wide
          text-gray-300
          transition
          hover:text-white
        "
      >
        {name}
      </span>
    </div>
  );
}