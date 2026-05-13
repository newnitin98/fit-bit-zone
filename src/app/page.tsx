import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Membership from "@/components/Membership";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <WhyChooseUs />
      <Gallery />
      <Membership />
      <Reviews />
      <Location />
      <FinalCTA />
      <Footer />
    </main>
  );
}
