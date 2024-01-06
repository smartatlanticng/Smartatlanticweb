import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ServicesBg from "/title/services.jpg";

function Services() {
  return (
    <div>
      <Header />
      <PageTitle title="Services" titleBg={ServicesBg} />
      Services
      <Footer />
    </div>
  );
}

export default Services;
