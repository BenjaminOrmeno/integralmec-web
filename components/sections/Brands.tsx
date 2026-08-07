"use client";

import { brands } from "../../data/brands";
import FadeIn from "../animations/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import BrandCard from "../brands/BrandCard";

export default function Brands() {
  return (
    <section
      id="brands"
      className="overflow-hidden bg-black py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <FadeIn>

          <SectionTitle
            subtitle="Marcas"
            title="Trabajamos con las principales marcas del mercado"
          />

        </FadeIn>

        <div className="relative mt-20 overflow-hidden">

          {/* degradado izquierdo */}

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-black to-transparent" />

          {/* degradado derecho */}

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-black to-transparent" />

          <div className="flex animate-marquee gap-8">

            {[...brands, ...brands].map((brand, index) => (

              <div
                key={index}
                className="min-w-[220px]"
              >
                <BrandCard
                  name={brand}
                />
              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}