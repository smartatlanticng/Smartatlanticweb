import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ServicesBg from "/title/services.jpg";
import "./services.css";

function Services() {

  const data = [
    {
      id: 1,
      serv: "Software Development",
      link: "",
    },
    {
      id: 2,
      serv: "Artificial Intelligence",
      link: "",
    },
    {
      id: 3,
      serv: "Mergers & Acquisitions (M&A)",
      link: "",
    },
    {
      id: 4,
      serv: "Technology Consulting",
      link: "",
    },
    {
      id: 5,
      serv: "Automation",
      link: "",
    },
    {
      id: 6,
      serv: "Operating Models",
      link: "",
    },
    {
      id: 7,
      serv: "Business Strategy",
      link: "",
    },
    {
      id: 8,
      serv: "Supply Chain Management",
      link: "",
    },
    {
      id: 9,
      serv: "Cloud",
      link: "",
    },
    {
      id: 10,
      serv: "Technology Innovation",
      link: "",
    },
    {
      id: 11,
      serv: "Digital Commerce",
      link: "",
    },
    {
      id: 12,
      serv: "Supply Chain Management",
      link: "",
    },
    {
      id: 13,
      serv: "Change Management",
      link: "",
    },
    {
      id: 14,
      serv: "Application Services",
      link: "",
    },
    {
      id: 15,
      serv: "Oil & Gas",
      link: "",
    },
    {
      id: 16,
      serv: "Enterprise Platforms",
      link: "",
    },
    {
      id: 17,
      serv: "Cybersecurity",
      link: "",
    },
    {
      id: 18,
      serv: "Zero-Based Transformation",
      link: "",
    },
    {
      id: 19,
      serv: "Finance Consulting",
      link: "",
    },
    {
      id: 20,
      serv: "Data & Analytics",
      link: "",
    },
  ];

  return (
    <div>
      <Header />
      <PageTitle title="Services" titleBg={ServicesBg} />
      <div className="services">
        <div className="container">
          <h2 className="h2-title">
            At Smart Atlantic, we offer a wide range of services
          </h2>
          <div className="row">
            {data.map((d) => (
              <div className="col-md-3">
                <div className="service-b-link">
                  <h5>{d.serv}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
