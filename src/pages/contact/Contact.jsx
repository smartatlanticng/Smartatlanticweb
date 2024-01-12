import "./contact.css";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ContactBg from "/title/contact.jpg";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_SMART_ATL_KEY,
  });

  return (
    <div>
      <Header />
      <PageTitle title="Contacts" titleBg={ContactBg} />
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-info">
              <div className="info-upper">
                <h5>Contact Information</h5>
                <p>
                  We are dedicated to driving success for your businessthrough
                  strategic and innovative consulting solutions.
                </p>
              </div>
              <div className="info-bellow">
                <div className="contact-channel">
                  <div className="channel-type">Address</div>
                  <div className="channel-detail">
                    <ul className="details">
                      <li className="detail-item">
                        Headquarters : Smart Atlantic UK
                      </li>
                      <li className="detail-item">
                        Nigeria Office: Smart Atlantic Nigeria 76 Ona Iwamimo
                        Street Isolo, Lagos
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="contact-channel">
                  <div className="channel-type">Phone</div>
                  <div className="channel-detail">
                    <ul className="details">
                      <li className="detail-item">+44 778 740 7994</li>
                      <li className="detail-item">+234 916 888 2651</li>
                    </ul>
                  </div>
                </div>
                <div className="contact-channel">
                  <div className="channel-type">Email</div>
                  <div className="channel-detail">
                    <ul className="details">
                      <li className="detail-item">info@smartatlantic</li>
                    </ul>
                  </div>
                </div>
                <div className="contact-channel">
                  <div className="channel-type">Social Media</div>
                  <div className="social-detail">
                    <ul className="social-detail-menu">
                      <li className="social-detail-menu-item">
                        <a href="#">
                          <i className="fa-brands fa-facebook"></i>
                        </a>
                      </li>
                      <li className="social-detail-menu-item">
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="social-detail-menu-item">
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li className="social-detail-menu-item">
                        <a href="#">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="social-detail-menu-item">
                        <a href="#">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="message-us">
              <h5>Send Us A Message</h5>
              <p>Have questions or need assistance? We're here to help!</p>
              <form action="">
                <input type="text" placeholder="Enter Your Name Here" />
                <input type="text" placeholder="Your Email  Address" />
                <input type="text" placeholder="Subject" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your message"
                ></textarea>
                <button className="btn btn-secondary">Submit</button>
              </form>
            </div>
          </div>
          <div className="row mt-50">
            <div className="map-box">
              {
                isLoaded ? (
                  <GoogleMap
                center={{ lat: 6.546327741835034, lng: 3.288484627030556 }}
                zoom={10}
                mapContainerStyle={{ width:"100%", height:"50vh", }}  
              >
                {/* Markers here */}
              </GoogleMap>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
