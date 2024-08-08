import React from "react";
import "./Services.css";
import DMimage from "../../Images/servicesimages/DM.webp";
import WEB from "../../Images/servicesimages/WEB.webp";
import GD from "../../Images/servicesimages/GD.webp";
import IM from "../../Images/servicesimages/IM.webp";
import VE from "../../Images/servicesimages/VE.webp";

const Services = () => {
  const Data = [
    {
      icon: DMimage,
      heading: "Digital Marketing",
      para: "Grow your Digital presence with personalized strategies and  campaigns",
    },

    {
      icon: WEB,
      heading: "Website Development",
      para: "Creating unique and responsive websites for exceptional user experience",
    },

    {
      icon: GD,
      heading: "Graphic Designing",
      para: "Promote your brand with eye-catching designs",
    },

    {
      icon: VE,
      heading: "Video Editing",
      para: "Transform raw footage into engaging content with our efficient video editing services",
    },

    {
      icon: IM,
      heading: "Influencer Marketing",
      para: "Take advantage of influential voices to expand your brand and reach a larger audience",
    },

    // {
    //   icon: "Icon",
    //   heading: "Digital Marketing",
    //   para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nam?",
    // },
  ];

  return (
    <>
      <section className="we-offer-area text-center bg-gray" id="Whatweoffer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 service-heading">
              <div className="site-heading text-center">
                <h2>
                  What we <span>Offer</span>
                </h2>
                <h4>Creativity , Excellence and Client Satisfaction </h4>
              </div>
            </div>
          </div>

          <div className="row our-offer-items less-carousel">
            {/* Single Item */}
            <div className="col-md-4 col-sm-6 equal-height service-container">
              {Data.map((item, index) => (
                <div className="item" key={index}>
                  <img src={item.icon} alt={item.heading} />
                  <h4>{item.heading}</h4>
                  <p>{item.para} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
