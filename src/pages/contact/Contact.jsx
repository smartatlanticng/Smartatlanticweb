import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ContactBg from "/title/contact.jpg";

function Contact() {
  return (
    <div>
      <Header />
      <PageTitle title="Contacts" titleBg={ContactBg} />
      Contact
      <Footer />
    </div>
  );
}

export default Contact;
