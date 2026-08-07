"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import FadeIn from "../animations/FadeIn";
import { company } from "../../data/company";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">

      {/* Fondo */}

      <Image
        src="/hero.png"
        alt="Taller IntegralMec"
        fill
        priority
        className="object-cover animate-[slowZoom_18s_ease-in-out_infinite_alternate]"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

        <FadeIn>

          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">

            <Image
              src="/logo.png"
              alt="IntegralMec"
              width={320}
              height={320}
              priority
              style={{
                width: "320px",
                height: "auto",
              }}
              className="mb-8 drop-shadow-2xl transition duration-700 hover:scale-105"
            />

            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
              Mantención Automotriz
            </h1>

            <h2 className="mt-2 text-5xl font-black text-red-600 md:text-7xl">
              Profesional
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
              Especialistas en mantención preventiva, reparación mecánica,
              diagnóstico computarizado y atención integral para empresas,
              particulares y organismos públicos.
            </p>

            {/* Botones */}

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href={`https://wa.me/${company.whatsapp}?text=Hola%20IntegralMec.%0A%0AQuisiera%20solicitar%20una%20cotización.%0A%0A•%20Vehículo:%0A•%20Marca:%0A•%20Modelo:%0A•%20Año:%0A•%20Patente:%0A•%20Servicio%20requerido:`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-red-600 px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-[0_0_35px_rgba(220,38,38,.45)]"
              >
                Solicitar Cotización
              </a>

              <a
                href="#services"
                className="rounded-xl border border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                Ver Servicios
              </a>

            </div>

            {/* Badges */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                ✓ Atención a Empresas
              </div>

              <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                ✓ Mercado Público
              </div>

              <div className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-md">
                ✓ Diagnóstico Computarizado
              </div>

            </div>

          </div>

        </FadeIn>

      </div>

      {/* Flecha */}

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={42} />
      </a>

    </section>
  );
}