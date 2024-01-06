import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import AboutBg from "/title/about.jpg";

function About() {
  return (
    <div>
      <Header />
      <PageTitle title="About Us" titleBg={AboutBg} />
      About
      <Footer />
    </div>
  );
}

export default About;
