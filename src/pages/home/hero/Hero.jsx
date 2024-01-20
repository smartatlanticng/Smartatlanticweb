import './hero.css';
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate(); 

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-area">
          <div className="hero-area-left">
            <h1>
              Transforming <br /> businesses with <br /> innovative{" "}
              <span>technology</span>
              <br />
              solutions
            </h1>
            <p>
              Smart Atlantic is a leading provider of software development,
              consultancy, and technology innovation services. We specialize in
              helping businesses across various industries leverage cutting-edge
              technologies to drive growth and achieve their strategic goals.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
          <div className="hero-area-right">
            <div className="hero-center-ring">
              <div className="hero-center-image"></div>
              <div className="float-one"></div>
              <div className="float-two"></div>
              <div className="float-three"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero