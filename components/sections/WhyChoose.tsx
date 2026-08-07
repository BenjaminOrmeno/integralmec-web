"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  Building2,
  Award,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Garantía de Calidad",
    description:
      "Trabajamos con altos estándares de calidad y compromiso en cada servicio.",
  },
  {
    icon: Wrench,
    title: "Técnicos Especializados",
    description:
      "Personal capacitado para vehículos particulares, comerciales y flotas.",
  },
  {
    icon: Building2,
    title: "Empresas y Municipalidades",
    description:
      "Experiencia atendiendo clientes corporativos y Mercado Público.",
  },
  {
    icon: Award,
    title: "Diagnóstico Profesional",
    description:
      "Equipamiento moderno para detectar fallas con rapidez y precisión.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-24 bg-black py-28"
    >

      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-black text-center text-white">
            ¿Por qué elegir IntegralMec?
          </h2>

          <p className="text-center text-gray-400 mt-6 mb-20 text-lg">
            Confianza, experiencia y tecnología para mantener tu vehículo siempre en las mejores condiciones.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 hover:border-red-600 transition-all duration-300 hover:-translate-y-2"
              >

                <div className="flex items-center gap-5">

                  <div className="bg-red-600 rounded-xl p-4">
                    <Icon size={34} className="text-white" />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-gray-400 leading-7">
                      {feature.description}
                    </p>

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}