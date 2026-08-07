"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { company } from "../../data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative border-t border-red-600 bg-black">

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}

          <div>

            <Image
              src="/logo.png"
              alt="IntegralMec"
              width={220}
              height={70}
              style={{
                width: "220px",
                height: "auto",
              }}
            />

            <p className="mt-6 leading-8 text-gray-400">
              {company.description}
            </p>

          </div>

          {/* Servicios */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Servicios
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="transition hover:text-red-500">
                Mantenciones Preventivas
              </li>

              <li className="transition hover:text-red-500">
                Diagnóstico Computarizado
              </li>

              <li className="transition hover:text-red-500">
                Reparación Mecánica
              </li>

              <li className="transition hover:text-red-500">
                Atención de Flotas
              </li>

              <li className="transition hover:text-red-500">
                Mercado Público
              </li>

            </ul>

          </div>

          {/* Empresa */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Empresa
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                href="#services"
                className="text-gray-400 transition hover:text-red-500"
              >
                Servicios
              </Link>

              <Link
                href="#brands"
                className="text-gray-400 transition hover:text-red-500"
              >
                Marcas
              </Link>

              <Link
                href="#contacto"
                className="text-gray-400 transition hover:text-red-500"
              >
                Contacto
              </Link>

            </div>

          </div>

          {/* Contacto */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Contacto
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 text-red-600"
                />

                <span className="text-gray-400">
                  {company.address}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone
                  size={20}
                  className="text-red-600"
                />

                <span className="text-gray-400">
                  {company.phone}
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={20}
                  className="text-red-600"
                />

                <span className="text-gray-400">
                  {company.email}
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Línea */}

        <div className="my-12 h-px bg-white/10" />

        {/* Parte inferior */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <p className="text-center text-gray-500 md:text-left">
            © {year} {company.name}. Todos los derechos reservados.
          </p>

          {/* Redes */}

          <div className="flex gap-4">

            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:border-blue-600 hover:bg-blue-600"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:border-pink-600 hover:bg-pink-600"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 transition-all duration-300 hover:scale-110 hover:border-sky-600 hover:bg-sky-600"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

          {/* Subir */}

          <button
            onClick={scrollTop}
            aria-label="Volver arriba"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:scale-110 hover:bg-red-700"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>

    </footer>
  );
}