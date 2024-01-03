import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import Hero from "../../pages/home/hero/Hero";
import AboutSection from "./aboutSection/AboutSection";
import ContactSection from "./contactSection/ContactSection";
import LogoSlideSection from "./logoSlideSection/LogoSlideSection";
import OurWork from "./ourWork/OurWork";
import ServicesSection from "./sevicesSection/ServicesSection";

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <LogoSlideSection />
        <ServicesSection />
        <AboutSection />
        <OurWork />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Home