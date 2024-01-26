import "./about.css";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import PageTitle from "../../layouts/components/pageTitle/PageTitle";
import AboutBg from "/title/about.jpg";
import MainImag from "../../assets/main-about-image.jpg";
import { Link } from "react-router-dom";
import WhoWeAre from "../../assets/who-we-are.jpg";
import WhatWeBelieve from "../../assets/what-we-believe.jpg";
import Mission from "../../assets/mission.jpg";
import Organize from "../../assets/organize.jpg";
import ProfileImage from "../../assets/profile-picture.jpg"

function About() {
  return (
    <div>
      <Header />
      <PageTitle title="About Us" titleBg={AboutBg} />
      <div className="about">
        <div className="container">
          <h2 className="h2-title">
            Experience a Seamless Journey with Smart Atlantic
          </h2>

          <div className="about-txt">
            <p>
              Smart Atlantic is a technology business which orchestrates, crafts
              and deploy cutting-edge solutions for a diverse spectrum of global
              clients, driving innovation and excellence spanning across
              industries.
            </p>
            <p>
              In dynamic alliance, we closely collaborate with our clients, not
              just understanding but anticipating their every need and then we
              engineer tailored solutions from our cutting-edge products,
              guaranteeing customers a personalised service fortified by the
              strength of proven components.
            </p>
            <p>
              We thrive in meticulous environments shaped by stringent
              regulations and standards; we excel where attention to detail is
              paramount. Our forte lies in delivering excellence, seamlessly
              blending precision with remarkable public interaction.
            </p>
            <p>
              As a trusted turnkey provider, Smart Atlantic command the
              confidence of organisations, seamlessly delivering not just
              software, hardware, and communications, but unlocking
              comprehensive solutions that define the zenith of reliability and
              innovation.
            </p>
            <p>
              At Smart Atlantic, our commitment echoes through every facet of
              the organization, driving us to set an unwavering standard of
              excellence in customer service. We are dedicated to supplying
              unparalleled solutions that redefine the benchmarks within the
              sectors we passionately serve.
            </p>
            <p>
              Our seasoned team, with a proven history of propelling blue-chip
              customers to surpass their objectives through strategic
              technological implementation, stands ready to elevate your
              aspirations. Let's engage in a conversation about your current
              requirements, unlocking new possibilities together.
            </p>
          </div>

          <div className="row">
            
          </div>
          <div className="row mt-50">
            <div className="col-md-2 col-sm">
              <div className="main-about-img">
                <img src={MainImag} alt="About Smart Atlantic" />
              </div>
            </div>
            <div className="col-md-2 col-sm">
              <div className="row">
                <div className="col-md-2 col-sm">
                  <div className="who-we-are-txt">
                    <Link to="/">
                      Who We Are<i class="fa-solid fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-2 col-sm">
                  <div className="who-we-are-img">
                    <img src={WhoWeAre} alt="Who we are" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm">
                  <div className="what-we-believe-img">
                    <img src={WhatWeBelieve} alt="What we believe" />
                  </div>
                </div>
                <div className="col-md-2 col-sm">
                  <div className="what-we-believe-txt">
                    <Link to="/">
                      <i class="fa-solid fa-chevron-left"></i>What We Believe
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mt-50">
            <div className="mission-left">
              <h5>What We Do</h5>
              <p>
                “Our mission is to empower and elevate our clients to
                consistently achieve and exceed extraordinary levels of value,
                so that in collaboration, we establish pioneering benchmarks of
                excellence within our respective industries.”
              </p>
            </div>
            <div className="mission-right">
              <img src={Mission} alt="Our mission" />
            </div>
          </div>
          <div className="row mt-50">
            <div className="organization-left">
              <img src={Organize} alt="" />
            </div>
            <div className="organization-right">
              <h5>How We Are Organised</h5>
              <p>
                At Smart Atlantic, our finely tuned organisational structure is
                meticulously crafted to drive efficiency, foster innovation, and
                deliver exceptional client experiences. Our collaborative
                strategic approach is the linchpin of our success.
              </p>
            </div>
          </div>
          {/* <div className="our-people mt-50">
            <h5>Our People</h5>
            <div className="profile">
              <div className="profile-photo">
                <img src={ProfileImage} alt="" />
                <div className="socials">
                  <i class="fa-brands fa-linkedin-in"></i>
                  <i class="fa-brands fa-x-twitter"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
              </div>
              <div className="profile-details">
                <h5>Meet Our founder Ruben: Pioneering the Digital Frontier</h5>
                <p>
                  I am Adetola Ruben Hassan-Kuti, the driving force behind Smart
                  Atlantic where technology meets innovation. I am a relentless
                  visionary with an insatiable passion for technology with a
                  track record of pioneering digital solutions and turning
                  innovative ideas into transformative realities. With an
                  unwavering dedication to pushing the boundaries of what's
                  possible, I've dedicated my career to reshaping the digital
                  landscape and I'm here to redefine what's possible. He is a
                  highly skilled and certified technology professional with
                  years of experience in finance, utilities, and technology
                  industries.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
