import "./logoSlideSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client1 from "../../../assets/logoSlides/client1.jpg";
import Client2 from "../../../assets/logoSlides/client2.jpg";
import Client3 from "../../../assets/logoSlides/client3.jpg";
import Client4 from "../../../assets/logoSlides/client4.jpg";
import Client5 from "../../../assets/logoSlides/client5.jpg";
import Client6 from "../../../assets/logoSlides/client6.jpg";
import Client7 from "../../../assets/logoSlides/client7.jpg";
import Client8 from "../../../assets/logoSlides/client8.jpg";
import Client9 from "../../../assets/logoSlides/client9.jpg";
import Client10 from "../../../assets/logoSlides/client10.jpg";

function LogoSlideSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="logo-slide-section">
      <div className="slides">
        <Slider {...settings}>
          <div className="slid">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slid">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slid">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slid">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slid">
            <img src={Client5} alt="Client-5" />
          </div>

          <div className="slid">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slid">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slid">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slid">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slid">
            <img src={Client5} alt="Client-5" />
          </div>
          <div className="slid">
            <img src={Client6} alt="Client-6" />
          </div>
          <div className="slid">
            <img src={Client7} alt="Client-7" />
          </div>
          <div className="slid">
            <img src={Client8} alt="Client-8" />
          </div>
          <div className="slid">
            <img src={Client9} alt="Client-9" />
          </div>
          <div className="slid">
            <img src={Client10} alt="Client-10" />
          </div>
          <div className="slid">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slid">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slid">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slid">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slid">
            <img src={Client5} alt="Client-5" />
          </div>

          <div className="slid">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slid">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slid">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slid">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slid">
            <img src={Client5} alt="Client-5" />
          </div>
          <div className="slid">
            <img src={Client6} alt="Client-6" />
          </div>
          <div className="slid">
            <img src={Client7} alt="Client-7" />
          </div>
          <div className="slid">
            <img src={Client8} alt="Client-8" />
          </div>
          <div className="slid">
            <img src={Client9} alt="Client-9" />
          </div>
          <div className="slid">
            <img src={Client10} alt="Client-10" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LogoSlideSection;
