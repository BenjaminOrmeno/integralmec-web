import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Stats from "@/components/sections/Stats";
import Brands from "@/components/sections/Brands";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main
  id="top"
  className="bg-black text-white"
>

      <Navbar />

      <Hero />

      <Services />

      <WhyChoose />

      <Stats />

      <Brands />

      <Contact />

      <Footer />

    </main>
  );
}