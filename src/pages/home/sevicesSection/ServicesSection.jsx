import "./servicesSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ServicesSection() {

  const data = [
    {
      title: "Consultancy Services",
      img: "/services/consulting.jpg",
      text: "Our consultancy services provide strategic guidance and expert advice to help businesses achieve their goals.",
    },
    {
      title: "Change Management",
      img: "/services/change-management.jpg",
      text: "We specialize in change management, helping businesses navigate through transitions and implement successful changes.",
    },
    {
      title: "Zero-based Transformation",
      img: "/services/tranformation.jpg",
      text: "Our zero-based transformation approach helps businesses optimize their operations and drive efficiency.",
    },
    {
      title: "Zero-based Transformation",
      img: "/services/tranformation.jpg",
      text: "Our zero-based transformation approach helps businesses optimize their operations and drive efficiency.",
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
           slidesToShow: 1,
           slidesToScroll: 1,
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
    <div className="services-section">
      <div className="container">
        <div className="row">
          <div className="service-section-left">
            <h2 className="h2-title">
              Unlocking Potential Through Smart Solutions
            </h2>
            <p>
              At Smart Atlantic, we offer a wide range of services including
              software development, consultancy, cloud solutions, change
              management, and more. Our team of experts is dedicated to helping
              businesses thrive in the digital age.
            </p>
          </div>
          <div className="service-section-right">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="card" key={d.id}>
                  <div className="service-image">
                    <img src={d.img} alt="" />
                  </div>
                  <div className="details">
                    <h5>{d.title}</h5>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
