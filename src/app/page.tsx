import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Achievements from "@/components/Achievements";
import OurProcess from "@/components/OurProcess";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MapEmbed from "@/components/MapEmbed";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Achievements />
      <OurProcess />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <MapEmbed />
      <Footer />
      <StickyButtons />
    </>
  );
}

