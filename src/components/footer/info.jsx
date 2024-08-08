import React from "react";
import "./info.css";
import logo from "../../Images/logo2.webp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Info = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/918696607292", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/company/web-katha/", "_blank");
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61554991797154",
      "_blank"
    );
  };
  const Instagram = () => {
    window.open("https://www.instagram.com/web_katha_/", "_blank");
  };

  const sendEmail = () => {
    window.open("mailto:webkatha365@gmail.com", "_blank");
  };

  return (
    <div className="infoStyle" id="info">
      {/* <div className="bottom-logo-container">

            <img className='bottom-logo' src={logo} alt="logo" />
            </div> */}

      {/* <div className="cop">
                <div className="phone">
                    <h3>Phone</h3>
                    <p>+91 9358593003</p>

                </div>
                <div className="Email">

                    <h3> Email Id.</h3>
                    <p>info@metablocktechnologies.org</p>
                </div>
                <div className="Address">
                    <h3>Address
                    </h3>
                    <div className="a   "> 50-51, 2nd Floor, Jai Ambey Nagar, Near Gopalpura Flyover, Opp. Jaipur Hospital, Tonk Road, Jaipur, Rajasthan Pin code:- 302018
                    </div>

                </div>
            </div> */}

      <p>
        <h2 style={{ textShadow: "0px 0px 0px", color: "#FF6610" }}>
          Engage with us socially
        </h2>
      </p>
      <div className="bottom-navbar">
        <div className="navbar-item" onClick={() => openWhatsApp()}>
          <WhatsAppIcon />
        </div>
        <div className="navbar-item" onClick={() => openLinkedIn()}>
          <LinkedInIcon />
        </div>
        <div className="navbar-item" onClick={() => openFacebook()}>
          <FacebookOutlinedIcon />
        </div>
        <div className="navbar-item" onClick={() => sendEmail()}>
          <EmailOutlinedIcon />
        </div>
        <div className="navbar-item" onClick={() => Instagram()}>
          <InstagramIcon />
        </div>
      </div>
      <p className="pnp">privacy & policy</p>
      <p className="copyright">
        Copyright &copy; 2024 Web Katha. All rights reserved.
      </p>
    </div>

    // -----------------------------icon -----------------------
  );
};

export default Info;
