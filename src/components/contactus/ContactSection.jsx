import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import FormDialog from "./contactform";
import './ContactSection.css'

const ContactSection = () => {
  return (
    <div className="ContactSection" id="contact">
    <h2 style={{marginTop:"50px" , fontSize:"1.8rem" , textShadow: "2px 4px 3px rgba(204, 204, 204, 1)"}}> <span>Contact</span> us</h2>

<div className="ContactSection-container">

{/* ------------------------------------ContactSection-container-left------------------------------------- */}

  <div className="ContactSection-container-left">

    {/* ------------------------------------ContactSection-container-left-contact------------------------------------- */}

    <div className="ContactSection-container-left-contact">
      <a className="contact-icon" href="tel:8696607292"><FaPhoneAlt/></a>
      <div className="contact-details">
        <div className="details-title">Contact :</div>
        <div className="contact-details-number">8696607292 , 8905110657 .</div>
      </div>
    </div>

    {/* ------------------------------------ContactSection-container-left-email------------------------------------- */}

    <div className="ContactSection-container-left-contact">
    <a className="contact-icon" href="mailto:webkatha365@gmail.com" target="_blank"><MdEmail/></a>
      <div className="email-details">
        <div className="details-title">Email id :</div>
        <div className="email-details-emailid">webkatha365@gmail.com .</div>
      </div>
    </div>

    {/* ------------------------------------ContactSection-container-left-address------------------------------------- */}


    <div className="ContactSection-container-left-contact">
    <a className="contact-icon" 
     href="https://maps.app.goo.gl/E4wV1pLw6dnH2inV7" target="_blank"
    ><FaLocationArrow/></a>
      <div className="address-details">
        <div className="details-title">Address :</div>
        <div className="address-details-address">12/60 , Kaveri Path , Mansarover , Jaipur - 302020.</div>
      </div>
    </div>

  </div>

{/* ------------------------------------------ContactSection-container-right--------------------------- */}

  <div className="ContactSection-container-right">
    <FormDialog/>
  </div>


</div>
  </div>
  );
};

export default ContactSection;
