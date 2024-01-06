import "./insights.css";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import InsightsBg from "/title/insights.jpg";
import dayjs from "dayjs";

function Insights() {
  const data = [
    {
      id: 1,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Cloud",
      image: "/insights/network.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2024-01-6",
    },
    {
      id: 2,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Oil & Gas",
      image: "/insights/oil-gas.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2023-12-2",
    },
    {
      id: 3,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Automation",
      image: "/insights/automation.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2023-09-25",
    },
    {
      id: 4,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Telecoms",
      image: "/insights/5g.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2023-10-25",
    },
    {
      id: 5,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Agriculture",
      image: "/insights/barns.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2023-01-25",
    },
    {
      id: 6,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Automation",
      image: "/insights/automation.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2019-01-25",
    },
    {
      id: 7,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Agriculture",
      image: "/insights/checken.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2019-01-25",
    },
    {
      id: 8,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Finance",
      image: "/insights/finance.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2019-01-25",
    },
    {
      id: 9,
      title: "Modern networks: How to fast track competitive advantage",
      category: "Automation",
      image: "/insights/auto-program.jpg",
      excerpt:
        "Network modernization can yield greater business resiliency and cost efficiency, creating a ripple effect of innovation.",
      date: "2019-01-25",
    },
  ];

  return (
    <div>
      <Header />
      <PageTitle title="Insight" titleBg={InsightsBg} />
      <div className="insights">
        <div className="container">
          <h2 className="h2-title">Explore Our Latest Insights</h2>
          <div className="row">
            {data.map((d) => (
              <div className="col-sm col-md-4">
                <div className="card">
                  <div className="card-image">
                    <img src={d.image} alt="Insights image" />
                    <div className="card-category">
                      <h5 className="category-text">{d.category}</h5>
                    </div>
                  </div>
                  <div className="card-date">
                    <div className="day">
                    {dayjs(d.date).format('DD')}
                    </div>
                    <div className="myr">
                    {dayjs(d.date).format('MMM, YY')}
                    </div>
                  </div>
                  <div className="card-info">
                    <h5>{d.title}</h5>
                    <p>{d.excerpt}</p>
                  </div>
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

export default Insights;
