import "./contact.css";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import ContactBg from "/title/contact.jpg";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// const markers = [
//   {
//     id: 1,
//     name: "Isolo",
//     Position: { lat: 6.546327741835034, lng: 3.288484627030556 },
//   },
// ];

function Contact() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: import.meta.env.VITE_SMART_ATL_KEY,
  // });

  // const [activateMarker,setActivateMarker] = useState(null);

  // const handleActivateMarker = (marker) => {
  //   if (marker === activateMarker) {
  //     return;
  //   }
  //   setActivateMarker(marker);
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yk1rcbf", "template_970dnif", form.current, {
        publicKey: "j3IfTS8xdBTWAa6yi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <Header />
      <PageTitle title="Contacts" titleBg={ContactBg} />
      <div className="contact">
        <section className="contact-top">
          <div className="contact-top-left">
            <div className="message-us">
              <h5>Get in touch</h5>
              <p>Thanks for your interest. How can we help?</p>
              <p>
                Our team of experienced and experienced specialists provide
                local support to our clients across the world.
              </p>
            </div>
          </div>
          <div className="contact-top-right">Map here</div>
        </section>
        <section className="container">
          <div className="row space">
            <div className="contanct-detials">
              <article className="contact-detail">
                <div className="contact-image lagos"></div>
                <div className="detail">
                  <h3>Lagos Office:</h3>
                  <p>
                    Smart Atlantic Nigeria Limited <br></br>Mulliner Towers
                    <br></br>Second floor <br></br>39 Alfred Rewane Road
                    <br></br>Lagos <br></br>Nigeria
                  </p>
                  <p className="phone-mail">
                    <span>+2349168882651</span> |
                    <span>info@smartatlantic.net</span>
                  </p>
                </div>
              </article>
              <article className="contact-detail">
                <div className="contact-image london"></div>
                <div className="detail">
                  <h3>London Office:</h3>
                  <p>
                    Smart Atlantic Holdings Limited<br></br> 5th Floor <br></br>
                    167 - 169 Great Portland Street
                    <br></br>London <br></br>W1W 5PF <br></br>United Kingdom
                  </p>
                  <p className="phone-mail">
                    <span>+447787407994</span> |
                    <span>info@smartatlantic.net</span>
                  </p>
                </div>
              </article>
              <article className="contact-detail">
                <div className="contact-image texas"></div>
                <div className="detail">
                  <h3>Addison Office:</h3>
                  <p>
                    Smart Atlantic LLC<br></br>
                    5015 Addison Circle <br></br>#1004 <br></br>Addison, Texas
                    <br></br>75001 <br></br>United States of America
                  </p>
                  <p className="phone-mail">
                    <span>+2349168882651</span> |
                    <span>info@smartatlantic.net</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
          {/* <div className="row">
            <div className="message-us">
              <h5>Get in touch</h5>
              <p>Thanks for your interest. How can we help?</p>
              <p>
                Our team of experienced and experienced specialists provide
                local support to our clients across the world.
              </p>
            </div>
          </div> */}
          <div className="row">
            {/* <div className="office-address">
              <div className="address">
                <h4>Lagos office</h4>
                <p>
                  Mulliner Towers,
                  <br /> 2nd Floor 39 Alfred Rewane Road Lagos State, Nigeria.
                </p>
              </div>
              <div className="address">
                <h4>United Kingdom office (HQ)</h4>
                <p>
                  Smart Atlantic Holdings Limited, <br /> 167-169 Great Portland
                  Street, 5th Floor, London W1W 5PF
                </p>
              </div>
            </div>
            <div className="office-address">
              <div className="address">
                <h4>General enquiries</h4>
                <p>
                  Tel: <a href="tel:+234(0)9168882651">+234(0)9168882651</a>
                  <br />
                  <br />
                  Email:{" "}
                  <a href="mailto:info@smartatlantic.net">
                    info@smartatlantic.net
                  </a>
                </p>
              </div>
              <div className="address">
                <h4>United Kingdom General enquiries</h4>
                <p>
                  Tel: <a href="tel:+44(0)7797407994">+44(0)7797407994</a>
                  <br />
                  <br />
                  Email:{" "}
                  <a href="mailto:info@smartatlantic.co.uk">
                    info@smartatlantic.co.uk
                  </a>
                </p>
              </div>
            </div> */}
            <div className="request-box">
              <div className="request-box-inner">
                <h5>Send Us A Message</h5>
                <p>Have questions or need assistance? We're here to help!</p>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Enter Your Name Here"
                    name="from_name"
                  />
                  <input
                    type="text"
                    placeholder="Your Email  Address"
                    name="from_email"
                  />
                  <input type="text" placeholder="Subject" name="subject" />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                  ></textarea>
                  <button className="btn btn-secondary">Submit</button>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="row">
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
          </div> */}
          {/* <div className="row mt-50">
            <div className="map-box">
              {
                isLoaded ? (
                  <GoogleMap
                center={{ lat: 6.546327741835034, lng: 3.288484627030556 }}
                zoom={10}
                onClick={() => setActivateMarker(null)}
                mapContainerStyle={{ width:"100%", height:"50vh", }}  
              >
                {
                  markers.map(({ id, name, position}) => (
                    <MarkerF key={id} 
                    position={position} 
                    onClick={() => handleActivateMarker(id)}
                    >
                     { activateMarker === id ? <InfoWindow onClick={() => setActivateMarker(null)}>
                        <div>{name}</div>
                      </InfoWindow> : null}
                    </MarkerF>
                  ))
                }
              </GoogleMap>
                ) : null
              }
            </div>
          </div> */}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
