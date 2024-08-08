import React from "react";
import "./Ourteam.css";
import InstagramIcon from "@mui/icons-material/Instagram";
// import Founder1 from "../../Images/founder1.png";
import { FaLinkedinIn } from "react-icons/fa";

const Ourteam = () => {
  const TeamMembers = [
    {
      // image: Founder1,
      Name: "Kartik Ahuja",
      position: "Co-Founder",
      InstagramID: "https://www.instagram.com/the.kartikahuja",
      Linkedin: "https://www.linkedin.com/in/kartik-ahuja-7a2813224/",
    },
    {
      image: "image",
      Name: "Harsh Khilwani",
      position: "Co-Founder",
      InstagramID: "https://www.instagram.com/harsh.khilwani/",
      Linkedin: "https://www.linkedin.com/in/harsh-khilwani-43aa56283/",
    },
  ];

  return (
    <>
      <h2 className="Ourteam-container-heading">
        Our <span>Team</span>
      </h2>
      <div className="Ourteam-container">
        {TeamMembers.map((item, index) => (
          <div
            className="Ourteam-members"
            style={{
              background: `url("${item.image}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            key={index}
          >
            <div className="Member-name">{item.Name}</div>
            <div className="Member-position">{item.position}</div>
            <div className="Member-insta">
              <a
                href={item.InstagramID}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href={item.Linkedin}
                className="LinkedIN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ourteam;
