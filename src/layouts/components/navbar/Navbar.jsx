import "./navbar.css";
import Logo from "../../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { Component } from "react";


class Navbar extends Component {

  state = { clicked: false };

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return (
      <>
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
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="insights">Insights</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="services">Services</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="industries">Industries</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="about">About Us</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="careers">Careers</NavLink>
              </li>
              <li className="nav-menu-item">
                <NavLink to="contact">Contact Us</NavLink>
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
      </>
    );
  }
}

export default Navbar;
