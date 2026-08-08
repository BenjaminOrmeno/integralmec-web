"use client";

import { useState } from "react";
import { company } from "../../data/company";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=Hola%20IntegralMec.%0A%0AQuisiera%20solicitar%20una%20cotización.%0A%0A•%20Vehículo:%0A•%20Marca:%0A•%20Modelo:%0A•%20Año:%0A•%20Patente:%0A•%20Servicio%20requerido:`;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">

      {/* =========================
          ESCRITORIO — SIN CAMBIOS
          ========================= */}

      <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-6 md:flex">

        <Link href="/" className="flex items-center gap-4">
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

        <nav className="flex items-center gap-10 text-white">

          <a href="#top" className="transition hover:text-red-500">
            Inicio
          </a>

          <a href="#services" className="transition hover:text-red-500">
            Servicios
          </a>

          <a href="#nosotros" className="transition hover:text-red-500">
            Nosotros
          </a>

          <a href="#contacto" className="transition hover:text-red-500">
            Contacto
          </a>

        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 hover:scale-105"
        >
          Solicitar Cotización
        </a>
      </div>

      {/* =========================
          MÓVIL
          ========================= */}

      <div className="md:hidden">

        <div className="relative flex h-[92px] items-center px-3">

          {/* Logo + texto:
              alineado hacia la izquierda para dejar espacio
              suficiente a la hamburguesa */}

          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 pr-16"
          >
            <Image
              src="/logo.png"
              alt="IntegralMec"
              width={58}
              height={58}
              priority
              className="h-auto w-[58px] shrink-0"
            />

            <div className="min-w-0">
              <h1 className="text-[30px] font-black leading-none tracking-wide text-red-600">
                INTEGRALMEC
              </h1>

              <p className="mt-1 whitespace-nowrap text-[9px] uppercase tracking-[0.34em] text-gray-300">
                Taller Mecánico Profesional
              </p>
            </div>
          </Link>

          {/* Hamburguesa */}

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-lg text-white transition hover:bg-white/10"
          >
            <span className="relative block h-7 w-8">

              <span
                className={`absolute left-0 top-1 block h-0.5 w-8 bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-3.5 block h-0.5 w-8 bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-6 block h-0.5 w-8 bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-2.5 -rotate-45" : ""
                }`}
              />

            </span>
          </button>

        </div>

        {/* Menú móvil */}

        <div
          className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >

          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3 text-white">

            <a
              href="#top"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 transition hover:text-red-500"
            >
              Inicio
            </a>

            <a
              href="#services"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 transition hover:text-red-500"
            >
              Servicios
            </a>

            <a
              href="#nosotros"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 transition hover:text-red-500"
            >
              Nosotros
            </a>

            <a
              href="#contacto"
              onClick={closeMenu}
              className="border-b border-white/10 py-4 transition hover:text-red-500"
            >
              Contacto
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-5 mb-3 rounded-xl bg-red-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-red-700"
            >
              Solicitar Cotización
            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}