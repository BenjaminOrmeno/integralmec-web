"use client";

import { Car, Users, Clock3, Award } from "lucide-react";

import FadeIn from "../animations/FadeIn";
import Counter from "../stats/Counter";

import { stats } from "../../data/stats";

const icons = [
  <Car size={34} />,
  <Users size={34} />,
  <Clock3 size={34} />,
  <Award size={34} />,
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-black to-zinc-950 py-28">

      {/* Fondo decorativo */}

      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-8">

        <FadeIn>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-10
                  backdrop-blur-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-red-600
                  hover:bg-red-600/10
                "
              >

                <div
                  className="
                    mb-8
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-red-600
                    text-white
                    transition
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  {icons[index]}
                </div>

                <h3 className="text-5xl font-black text-white">

                  <Counter
                    value={item.number}
                    suffix={item.suffix}
                  />

                </h3>

                <h4 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-2 text-gray-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </FadeIn>

      </div>

    </section>
  );
}