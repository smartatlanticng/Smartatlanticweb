import "./slide.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide01 from "../../../assets/slide/slide01.jpg";
import Slide02 from "../../../assets/slide/slide02.jpg";
import Slide03 from "../../../assets/slide/slide03.jpg";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    speed: 500,
    centerPadding: "1px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="london-slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={Slide01} alt="Slide 01" />
        </div>
        <div className="slide">
          <img src={Slide02} alt="Slide 02" />
        </div>
        <div className="slide">
          <img src={Slide03} alt="Slide 03" />
        </div>
      </Slider>
    </div>
  );
}

export default Slide;
