import AboutSection from "../sections/home/AboutSection";
import ContactSection from "../sections/home/ContactSection";
import FeaturedProducts from "../sections/home/FeaturedProducts";
import HeroSection from "../sections/home/HeroSection";
import HeroSection2 from "../sections/home/HeroSection2";
import LogosSection from "../sections/home/LogosSection";
import SCSection from "../sections/home/SCSection";
import ServiceSection from "../sections/home/ServicesSection";
import SymbolsSection from "../sections/home/SymbolsSection";
import TeamSection from "../sections/home/TeamSection";

export default function Home() {
  return (
    <div className="" data-scroll-section>
      <HeroSection />
      <SymbolsSection />
      <HeroSection2 />
      <FeaturedProducts />
      <AboutSection />
      <LogosSection />
      <ServiceSection />
      <TeamSection />
      <SCSection />
      <ContactSection />
      {/* <ProofCard title="Years of Experience" /> */}
      {/* <Typography component={`h1`}>Home Page</Typography> */}
    </div>
  );
}
