import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Stats from "@/components/sections/Stats";
import Cities from "@/components/sections/Cities";
import Testimonials from "@/components/sections/Testimonials";
import TrustBadges from "@/components/sections/TrustBadges";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Process />
      <Stats />
      <Cities />
      <TrustBadges />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}
