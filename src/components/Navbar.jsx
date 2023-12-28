import React from "react";
import logo from "../Images/logo.png";
import "../components/Navbar.css"
import TemporaryDrawer from "./ResNav";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="Logo"  className="Logo"/>
      <ul className="Nav-item-parent">
        <li className="nav-items">Home</li>
        <li className="nav-items">Services</li>
        <li className="nav-items">Why Web Katha</li>
        <li className="nav-items">Portfolio</li>
        <li className="nav-items">Blogs</li>
        <li className="nav-items">Contact us</li>
      
      </ul>
      <div className="Res-Nav">  <TemporaryDrawer/></div>
    </div>
  );
};

export default Navbar;
