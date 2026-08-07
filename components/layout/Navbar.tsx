"use client";
import { company } from "../../data/company";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.png"
            alt="IntegralMec"
            width={70}
            height={70}
            priority
            style={{
              width: "70px",
              height: "auto",
            }}
          />

          <div>

            <h1 className="text-3xl font-black tracking-wide text-red-600">
              INTEGRALMEC
            </h1>

            <p className="text-xs uppercase tracking-[0.45em] text-gray-300">
              Taller Mecánico Profesional
            </p>

          </div>

        </Link>

        {/* Menú */}

        <nav className="hidden items-center gap-10 text-white md:flex">

          <a
  href="#top"
  className="transition hover:text-red-500"
>
  Inicio
</a>

          <a
            href="#services"
            className="transition hover:text-red-500"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="transition hover:text-red-500"
          >
            Nosotros
          </a>

          <a
            href="#contacto"
            className="transition hover:text-red-500"
          >
            Contacto
          </a>

        </nav>

        {/* Botón */}

        <a
  href={`https://wa.me/${company.whatsapp}?text=Hola%20IntegralMec.%0A%0AQuisiera%20solicitar%20una%20cotización.%0A%0A•%20Vehículo:%0A•%20Marca:%0A•%20Modelo:%0A•%20Año:%0A•%20Patente:%0A•%20Servicio%20requerido:`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 hover:scale-105"
>
  Solicitar Cotización
</a>

      </div>
    </header>
  );
}