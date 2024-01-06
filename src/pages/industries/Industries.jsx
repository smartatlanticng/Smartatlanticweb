import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import IndustriesBg from "/title/industries.jpg";

function Industries() {
  return (
    <div>
      <Header />
      <PageTitle title="Industries" titleBg={IndustriesBg} />
      Industries
      <Footer />
    </div>
  );
}

export default Industries;
