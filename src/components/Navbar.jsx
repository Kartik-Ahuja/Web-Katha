import React from "react";
import logo from "../Images/logo.webp";
import "../components/Navbar.css"
import TemporaryDrawer from "./ResNav";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  function scrollToWhatweoffer() {
    const infoSection = document.getElementById("Whatweoffer");
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollTowhyus() {
    const ServiceSection = document.getElementById("Whyus");
    if (ServiceSection) {
      ServiceSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToPortfolio() {
    const PortfolioSection = document.getElementById("Portfolio");
    if (PortfolioSection) {
      PortfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  // function scrollToserving() {
  //   const TestimonialSection = document.getElementById("ourservingind");
  //   if (TestimonialSection) {
  //     TestimonialSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  function scrollTocontact() {
    const TestimonialSection = document.getElementById("contact");
    if (TestimonialSection) {
      TestimonialSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="Navbar">
      <img src={logo} alt="Logo"  className="Logo" onClick={() => navigate('/')}/>
      <ul className="Nav-item-parent">
        <li className="nav-items" onClick={() => navigate('/')}>Home</li>
        <li className="nav-items" onClick={scrollToWhatweoffer}>Services</li>
        <li className="nav-items" onClick={scrollTowhyus}>Why us</li>
        <li className="nav-items" onClick={scrollToPortfolio}>Portfolio</li>
        <li className="nav-items" >Blogs</li>
        <li className="nav-items" onClick={scrollTocontact}>Contact us</li>
      
      </ul>
      <div className="Res-Nav">  <TemporaryDrawer/></div>
    </div>
  );
};

export default Navbar;
