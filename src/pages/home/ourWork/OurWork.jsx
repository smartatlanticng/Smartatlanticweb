import "./ourWork.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurWork() {
  const data = [
    {
      title: "Audit of a major company",
      img: "/potfolio/audit.jpg",
    },
    {
      title: "Consulting with ABC Inc.",
      img: "/potfolio/consult.jpg",
    },
    {
      title: "Enineering System overhaul",
      img: "/potfolio/engineering.jpg",
    },
    {
      title: "Audit",
      img: "/potfolio/meeting.jpg",
    },
    {
      title: "Sucurity Audit for Bank XYZ",
      img: "/potfolio/security.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="our-work">
      <div className="container">
        <div className="our-work-top">
          <h2 className="h2-title">Our Work</h2>
          <p>Discover our successful projects and client testimonials.</p>
        </div>
        <div className="our-work-bottom">
          <Slider {...settings}>
            {data.map((d) => (
              <div className="card" key={d.id}>
                <div className="portfolio-image">
                  <img src={d.img} alt="" />
                  <div className="overlay"></div>
                  <h5 className="h5-title">{d.title}</h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
