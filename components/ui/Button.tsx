interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={
        variant === "primary"
          ? "rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700"
          : "rounded-xl border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
      }
    >
      {children}
    </button>
  );
}