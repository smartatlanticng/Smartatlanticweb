import "./contactSection.css";
import { useNavigate } from "react-router-dom";

function ContactSection() {

  const navigate = useNavigate(); 

  return (
    <div className="contact-section">
      <div className="container">
        <div className="overlay"></div>
        <div className="row">
          <div className="contact-section-left">
            <h2 className="h2-title">Transform Your Business Today</h2>
          </div>
          <div className="contact-section-right">
            <div className="contact-section-right-top">
              <p>
                Discover how Smart Atlantic can help you achieve your business
                goals through innovative technology solutions and expert
                consultancy services.
              </p>
            </div>
            <div className="contact-section-right-bottom">
              <button
                className="btn btn-thirtialry"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
