import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';



const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [open, setopen] = useState(false);

  const onClickNav = () => {
    setopen(true)
  }

  useEffect(() => {
    onClickNav();
  }, [])

  const Sidebar = document.getElementById("mySidebar");
  const w3_open = () => {
    if (Sidebar.style.display === "block") {
      Sidebar.style.display = "none";
    } else {
      Sidebar.style.display = "block";
    }
  }

  // Close the sidebar with the close button
  const w3_close = () => {
    Sidebar.style.display = "none";
  }
  const ChangeBackground = () => {

    if (window.scrollY >= 80) {
      return setNavbar(true);
    } else {
      return setNavbar(false);
    }
  };
  window.addEventListener('scroll', ChangeBackground);
  return (
    <Fragment>
      <div className="w3-top">
        <div className={navbar ? ('w3-bar w3-white w3-card logo-slider') : ('w3-bar w3-white w3-card logo-scroll navbar')} id="myNavbar">
          <a href="/" className="w3-bar-item w3-button w3-wide logo-position"><img src="/img/lang'sfreelogo.jpg" alt="LANG'sFREE" style={{ width: "100%" }} /></a>

          <div className="w3-right w3-hide-small">
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/about">About</NavLink>
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/team"> TEAM</NavLink>
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/services"> SERVICES</NavLink>
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/technology">TECHNOLOGY</NavLink>
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/testimonials">PORTFOLIO</NavLink>
            <NavLink className="w3-bar-item w3-button navbarcss" exact to="/contacts"><i className="fa fa-envelope"></i> CONTACT US</NavLink>
          </div>


          <a href="javascript:void(0)" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick={w3_open}>
            <i className="fa fa-bars margin-navbutton"></i>
          </a>
        </div>
      </div>


      <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{ display: "none" }} id="mySidebar">
        {/* <a className={open ? ("w3-bar-item w3-button w3-large w3-padding-16 open") : ("w3-bar-item w3-button w3-large w3-padding-16")}>Close ×</a>
        <a href="#about" onClick={w3_close} className="w3-bar-item w3-button">ABOUT</a>
        <a href="#team" onClick={w3_close} className="w3-bar-item w3-button">TEAM</a>
        <a href="#work" onClick={w3_close} className="w3-bar-item w3-button">WORK</a>
        <a href="#pricing" onClick={w3_close} className="w3-bar-item w3-button">PRICING</a>
        <a href="#contact" onClick={w3_close} className="w3-bar-item w3-button">CONTACT</a> */}
        {/* href="javascript:void(0)"   */}
        <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/about">ABOUT</NavLink>
            <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/team"> TEAM</NavLink>
            <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/services"> SERVICES</NavLink>
            <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/technology">TECHNOLOGY</NavLink>
            <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/testimonials">PORTFOLIO</NavLink>
            <NavLink onClick={w3_close} className="w3-bar-item w3-button" exact to="/contacts"><i className="fa fa-envelope"></i> CONTACT US</NavLink>
      </nav>

    </Fragment>
  );
}

export default Navbar;