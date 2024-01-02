import "./aboutSection.css";
import AboutSectionImage from "../../../assets/about-section.jpg";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row">
          <div className="about-section-left">
            <h2 className="h2-title">
              Experience a Seamless Journey with Smart Atlantic
            </h2>
            <p>
              At Smart Atlantic, we specialize in providing top-notch services
              in software development, cloud computing, artificial intelligence,
              and technology innovations. Our team of experts is dedicated to
              transforming industries through innovative solutions that drive
              growth and success. With our comprehensive range of services, we
              help businesses stay ahead of the competition and achieve their
              goals.
            </p>
            <div className="about-btn">
              <button className="btn btn-secondary btn-about">Who We Are</button>
              <button className="btn btn-secondary btn-about">What We Believe</button>
              <button className="btn btn-secondary btn-about">What We Do</button>
              <button className="btn btn-secondary btn-about">How We Are Organised</button>
              <button className="btn btn-secondary btn-about">Our People</button>
            </div>
          </div>
          <div className="about-section-right">
            <div className="about-section-image">
              <img src={AboutSectionImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
