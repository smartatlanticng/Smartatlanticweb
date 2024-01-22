import "./navbar.css";
import Logo from "../../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { Component } from "react";
import Sevices from "../../../assets/services.jpg"


class Navbar extends Component {

  state = { clicked: false };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
      <nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div>
          <ul
            id="nav-menu"
            className={this.state.clicked ? "#nav-menu active" : "#nav-menu"}
          >
            <li className="nav-menu-item">
              <NavLink to="/industries">Industries</NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/insights">Insights</NavLink>
            </li>
            <li className="nav-menu-item">
              <NavLink to="/services">Services</NavLink>
              <div className="mega-menu">
                <div className="content">
                  <div className="row">
                    <img src={Sevices} alt="Female customer service person" />
                    <ul className="mega-menu-links">
                      <li>
                        <Link to="/services">Software Development</Link>
                      </li>
                      <li>
                        <Link to="/services">Artificial Intelligence</Link>
                      </li>
                      <li>
                        <Link to="/services">Mergers & Acquisitions (M&A)</Link>
                      </li>
                      <li>
                        <Link to="/services">Technology Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services">Automation</Link>
                      </li>
                      <li>
                        <Link to="/services">Business Strategy</Link>
                      </li>
                      <li>
                        <Link to="/services">Supply Chain Management</Link>
                      </li>
                      <li>
                        <Link to="/services">Cloud</Link>
                      </li>
                      <li>
                        <Link to="/services">Technology Innovation</Link>
                      </li>
                      <li>
                        <Link to="/services">Digital Commerce</Link>
                      </li>
                      <li>
                        <Link to="/services">Change Management</Link>
                      </li>
                      <li>
                        <Link to="/services">Application Services</Link>
                      </li>
                      <li>
                        <Link to="/services">Oil & Gas</Link>
                      </li>
                      <li>
                        <Link to="/services">Enterprise Platforms</Link>
                      </li>
                      <li>
                        <Link to="/services">Cybersecurity</Link>
                      </li>
                      <li>
                        <Link to="/services">Zero-Based Transformation</Link>
                      </li>
                      <li>
                        <Link to="/services">Finance Consulting</Link>
                      </li>
                      <li>
                        <Link to="/services">Data & Analytics</Link>
                      </li>
                      <li>
                        <Link to="/services">Operating Models</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-menu-item with-dropdown">
              <NavLink to="/about">About Us</NavLink>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">Who We Are</Link>
                </li>
                <li>
                  <Link to="/">What We Believe</Link>
                </li>
                <li>
                  <Link to="/">What We Do</Link>
                </li>
                <li>
                  <Link to="/">How We Are Organised</Link>
                </li>
                <li>
                  <Link to="/">Our People</Link>
                </li>
              </ul>
            </li>
            {/* <li className="nav-menu-item">
                <NavLink to="/careers">Careers</NavLink>
              </li> */}
            <li className="nav-menu-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
          <i
            id="bar"
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
      </nav>
    );
  }
}

export default Navbar;
