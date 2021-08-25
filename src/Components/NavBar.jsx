import React, { Component } from "react";
import logo from '../img/aph-logo.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="navbar-logo-name">
          <img src={logo} className="navbar-logo" alt="APH logo"/>
          <div className="navbar-name">
            <div>APH Networks</div>
            <div>Since Forever</div>
          </div>
        </div>
        <div className="navbar-routes">
          <ul className="routes">
            <li>Home</li>
            <li>Categories</li>
            <li>Upcoming</li>
            <li>About</li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default Navbar;