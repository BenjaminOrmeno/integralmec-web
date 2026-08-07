interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p className="mb-3 uppercase tracking-[0.35em] text-red-600 font-semibold">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-black text-white">
        {title}
      </h2>
    </div>
  );
}