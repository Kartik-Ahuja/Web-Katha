import React from "react";
import "./Whyus.css";

const Whyus = () => {
  const Details = [
    {
      Image: "/Images/quality.webp",
      Heading: "Quality and Expertise:",
      paragraph:
        "We focus on our commitment to provide our customers with the best experience, & high quality services.",
    },
    {
      Image: "/Images/tech.webp",
      Heading: "Innovation and Technology:",
      paragraph:
        "We insist latest cutting-edge technology, innovations, or advanced features that make our service stand out .",
    },
    {
      Image: "/Images/transparent.webp",
      Heading: "Transparency:",
      paragraph:
        "We value open and honest communication, providing regular updates and progress reports",
    },
  ];

  return (
    <>
      <h2 id="Whyus">
        Why Web <span>Katha</span>
      </h2>
      <div className="Why-container">
        <div className="Why-container1">
          {Details.map((item, index) => (
            <div className="Why-container-child" key={index}>
              <img src={item.Image} alt="WHy us Icon" className="child-image" />
              <h3>{item.Heading}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>

        <div className="Why-container2">
          <img src="/Images/waving.webp" alt="Why us images" />
        </div>
      </div>
    </>
  );
};

export default Whyus;
