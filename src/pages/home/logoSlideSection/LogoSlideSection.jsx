import "./logoSlideSection.css"
import Client1 from "../../../assets/logoSlides/client-1.png"
import Client2 from "../../../assets/logoSlides/client-2.png"
import Client3 from "../../../assets/logoSlides/client-3.png"
import Client4 from "../../../assets/logoSlides/client-4.png"
import Client5 from "../../../assets/logoSlides/client-5.png"

function LogoSlideSection() {
  return (
    <div className="logo-slide-section">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slide">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slide">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slide">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slide">
            <img src={Client5} alt="Client-5" />
          </div>

          <div className="slide">
            <img src={Client1} alt="Client-1" />
          </div>
          <div className="slide">
            <img src={Client2} alt="Client-2" />
          </div>
          <div className="slide">
            <img src={Client3} alt="Client-3" />
          </div>
          <div className="slide">
            <img src={Client4} alt="Client-4" />
          </div>
          <div className="slide">
            <img src={Client5} alt="Client-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlideSection