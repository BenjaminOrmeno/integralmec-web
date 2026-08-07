"use client";

import FadeIn from "../animations/FadeIn";
import SectionTitle from "../ui/SectionTitle";

import {
  MapPinned,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

import { company } from "../../data/company";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 bg-zinc-950 py-28"
    >
      <div className="mx-auto max-w-7xl px-8">

        <FadeIn>

          <SectionTitle
            subtitle="Contacto"
            title="¿Necesitas una cotización?"
          />

        </FadeIn>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Google Maps */}

          <FadeIn>

            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <iframe
                src="https://www.google.com/maps?q=Concepción,Chile&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                className="border-0"
              />

            </div>

          </FadeIn>

          {/* Información */}

          <FadeIn>

            <div className="flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-lg">

              <div className="mb-10 flex items-start gap-5">

                <MapPinned
                  className="text-red-600"
                  size={34}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Dirección
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {company.address}
                  </p>

                </div>

              </div>

              <div className="mb-10 flex items-start gap-5">

                <Phone
                  className="text-red-600"
                  size={34}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Teléfono
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {company.phone}
                  </p>

                </div>

              </div>

              <div className="mb-10 flex items-start gap-5">

                <Mail
                  className="text-red-600"
                  size={34}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Correo
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {company.email}
                  </p>

                </div>

              </div>

              <div className="mb-12 flex items-start gap-5">

                <Clock3
                  className="text-red-600"
                  size={34}
                />

                <div>

                  <h3 className="text-xl font-bold text-white">
                    Horario
                  </h3>

                  <p className="mt-2 text-gray-400">
                    {company.schedule.hours}
                  </p>

                </div>

              </div>

              <a
                href={company.maps}
                target="_blank"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  rounded-xl
                  bg-red-600
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                  hover:bg-red-700
                "
              >
                Cómo llegar

                <ArrowUpRight size={20} />

              </a>

            </div>

          </FadeIn>

        </div>

      </div>
    </section>
  );
}