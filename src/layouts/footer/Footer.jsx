import "./footer.css";
import FooterLogo from "../../assets/logo-footer.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-top">
            <div className="logo-news-leter">
              <img src={FooterLogo} alt="Logo" />
              <p className="footer-text">
                Join our newsletter to stay up to date on features and releases.
              </p>
              <form>
                <div className="newsleter-input-group">
                  <input
                    type="text"
                    placeholder="example@mail.com"
                    className="newsleter-box"
                  />
                  <button className="btn-subscribe">Subscribe</button>
                </div>
                <div className="newsleter-input-group">
                  <input type="checkbox" />
                  <p className="footer-form-text">
                    By subscribing you agree to our Privacy Policy and consent
                    to receive updates from our company.
                  </p>
                </div>
              </form>
            </div>
            <div className="services-links">
              <h6 className="footer-link-title">Services</h6>
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="#">Software Development</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Artificial Intelligence</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Mergers & Acquisitions (M&A)</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Consultancy</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Automation</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Business Strategy</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Oil & Gas</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Data & Analytics</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Finance Consulting</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Zero Based Transformation</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Change Management</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">Enterprise Platform</a>
                </li>
              </ul>
            </div>
            <div className="about-links">
              <h6 className="footer-link-title">Services</h6>
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="#">Who We Are</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">What We Believe</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">What We Do</a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">How We Are Organised</a>
                </li>
              </ul>
            </div>
            <div className="social-media-links">
              <h6 className="footer-link-title">Social Media</h6>
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i> Facebook
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i> X
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li className="footer-menu-item">
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="footer-bottom-left">
                <p>© 2023 Smart Atlantic. All rights reserved.</p>
              </div>
              <div className="footer-bottom-right">
                <ul className="footer-down-menu">
                  <li className="footer-menu-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="footer-menu-item">
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
