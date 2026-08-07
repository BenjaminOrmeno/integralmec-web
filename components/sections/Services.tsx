"use client";

import FadeIn from "../animations/FadeIn";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../cards/ServiceCard";

import { services } from "../../data/services";

export default function Services() {
  return (
    <section
  id="services"
  className="scroll-mt-24 bg-zinc-950 py-28"
>
      <div className="mx-auto max-w-7xl px-8">

        <FadeIn>

          <SectionTitle
            subtitle="Nuestros Servicios"
            title="Todo lo que tu vehículo necesita"
          />

        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

            <FadeIn
              key={index}
              delay={index * 0.08}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </FadeIn>

          ))}

        </div>

      </div>
    </section>
  );
}