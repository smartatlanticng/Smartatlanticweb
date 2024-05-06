import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ServicesBg from "/title/services.jpg";
import "./services.css";
import ServicesSection from "../home/sevicesSection/ServicesSection";
import ScrollToTop from "../../layouts/components/ScrollToTop";

function Services() {
  const data = [
    {
      id: 1,
      serv: "Agile",
      disc: "Embrace adaptability, deliver results.",
      link: "",
    },
    {
      id: 2,
      serv: "Artificial Intelligence",
      disc: "We leverage Artificial Intelligence to enhance efficiency, analyse data, automate tasks, and improve decision-making processes across various sectors.",
      link: "",
    },
    {
      id: 3,
      serv: "Automation",
      disc: "We leverage automation to streamline processes, enhance efficiency, and reduce manual workload by employing technology to perform repetitive tasks and workflows.",
      link: "",
    },
    {
      id: 4,
      serv: "Business Strategy",
      disc: "Elevate to the exclusive echelons of enduring value architects crafting visionary pathways for sustainable success.",
      link: "",
    },
    {
      id: 5,
      serv: "Change Management",
      disc: "Guiding transformation with precision and purpose.",
      link: "",
    },
    {
      id: 6,
      serv: "Cloud",
      disc: "Where limitless possibilities meet seamless scalability.",
      link: "",
    },
    {
      id: 7,
      serv: "Customer Experience",
      disc: "Elevating customer experiences to new heights while driving down costs.",
      link: "",
    },
    {
      id: 8,
      serv: "Cybersecurity",
      disc: "Fortifying digital fortresses to safeguard against evolving and unseen cyber threats.",
      link: "",
    },
    {
      id: 9,
      serv: "Digital Marketing",
      disc: "Cultivate a customer-centric organisation propelled by relentless growth.",
      link: "",
    },
    {
      id: 10,
      serv: "Energy & Utilities",
      disc: "Pioneering the future of energy with innovative energy solutions.",
      link: "",
    },
    {
      id: 11,
      serv: "Enterprise Platforms",
      disc: "Revolutionising enterprises with seamless, scalable, and powerful platform solutions.",
      link: "",
    },
    {
      id: 12,
      serv: "Finance Consulting",
      disc: "Empowering financial success through strategic insights and tailored solutions, our finance consulting drives growth and stability.",
      link: "",
    },
    {
      id: 13,
      serv: "Mergers & Acquisitions",
      disc: "Unlocking sustained success through a methodical and replicable strategy.",
      link: "",
    },
    {
      id: 14,
      serv: "Oil & Gas",
      disc: "Pioneering the future of energy with oil and gas innovation.",
      link: "",
    },
    {
      id: 15,
      serv: "Operations",
      disc: "Imagine achieving your goals with unprecedented speed, precision, and ingenuity.",
      link: "",
    },
    {
      id: 16,
      serv: "Operating Models",
      disc: "We utilise operating models to streamline processes, optimize resource allocation, and enhance overall efficiency in achieving organizational goals.",
      link: "",
    },
    {
      id: 17,
      serv: "People & Organisation",
      disc: "Empower your team to execute your strategy flawlessly and elevate performance.",
      link: "",
    },
    {
      id: 18,
      serv: "Procurement",
      disc: "Drive lasting efficiency: cut costs, maintain progress, and replicate success relentlessly.",
      link: "",
    },
    {
      id: 19,
      serv: "Supply Chain Management",
      disc: "We advise clients with strategies to optimise global operations, minimise costs and drive efficiency.",
      link: "",
    },
    {
      id: 20,
      serv: "Technology Consulting",
      disc: "Navigating the future with cutting-edge solutions, our technology consulting transforms vision into reality.",
      link: "",
    },
    {
      id: 21,
      serv: "Technology Innovation",
      disc: "Catalysing progress through groundbreaking technological advancements.",
      link: "",
    },
    {
      id: 22,
      serv: "Zero-Based Transformation",
      disc: "Embark on revolutionise efficiency and innovation from the ground up.",
      link: "",
    },
  ];

  return (
    <div>
      <Header />
      <PageTitle title="Services" titleBg={ServicesBg} />
      <div className="services">
        <div className="container">
          <div className="page-top row">
            <h2 className="h2-title col-md-2">Services</h2>
            <p className="col-md-2">
              At the heart of our management consulting services lies a
              relentless commitment to unravelling the core challenges and
              seizing the pivotal opportunities that define our clients'
              landscapes. From strategy to sustainability, we navigate the
              intricate realms of marketing, organization, operations,
              technology, transformation, digital, advanced analytics, corporate
              finance, mergers & acquisitions, ensuring no facet remains
              untouched. Our forte extends beyond mere functional expertise; we
              are recognized for our panoramic viewpoint, transcending
              boundaries and demolishing silos within any organization. Our
              track record showcases a transformative multiplier effect, where
              our focus on optimizing the sum of the parts delivers far-reaching
              impact, elevating us beyond the realm of addressing individual
              pieces.
            </p>
          </div>
          <div className="mid-heading">
            <h4>How We Help</h4>
          </div>
          {/* <div className="services-txt">
            <p>
              In the realm of management consulting, we are laser-focus on our
              clients' pivotal challenges and opportunities, catalysing
              transformative solutions that define the trajectory of success.
            </p>
            <p>
              At Smart Atlantic, we specialize in providing top-notch services
              in software development, cloud computing, artificial intelligence,
              and technology innovations. Our team of experts are dedicated to
              transforming industries through innovative solutions that drive
              growth and success.
            </p>
            <p>
              With our comprehensive range of services, we help businesses stay
              ahead of the competition and achieve their goals.
            </p>
            <p>
              Agile, Software development to consultancy, cloud, business
              strategy, change management, technology, oil and gas, artificial
              intelligence, enterprise platforms, zero-based transformation,
              mergers & acquisitions, corporate finance, finance consulting,
              automation, sustainability, technology innovations etc.
            </p>
          </div> */}
          <div className="row">
            {data.map((d) => (
              <div className="col-md-4">
                <article>
                  <h3>{d.serv}</h3>
                  <p>{d.disc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ServicesSection />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Services;
