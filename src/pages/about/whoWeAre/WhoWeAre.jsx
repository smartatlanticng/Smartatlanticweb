import PageTitle from "../../../layouts/components/pageTitle/PageTitle";
import Header from "../../../layouts/header/Header";
import Footer from "../../../layouts/footer/Footer";
import AboutBg from "/title/about.jpg";
import AboutSection from "../../home/aboutSection/AboutSection";
import OurWork from "../../home/ourWork/OurWork";

function WhoWeAre() {
  return (
    <div>
      <Header />
      <PageTitle title="Who We Are" titleBg={AboutBg} />
      <AboutSection />
      <OurWork />
      <Footer />
    </div>
  );
}

export default WhoWeAre