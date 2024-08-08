import React from "react";
import "../components/Hero.css";
import Car from "../Images/Hero images/car.webp";
import wheel from "../Images/Hero images/wheel.webp";
import Cloud from "../Images/Hero images/cloud.webp";
import Bitmoji2 from "../Images/Hero images/Bitmoji2.webp";
import Banner from "../Images/Hero images/banner.webp";

const Hero = () => {
  return (
    <div className="Hero">
      <img className="Cloud" src={Cloud} alt="Cloud" />

      <div className="highway"></div>

      <div className="city"></div>

      <div className="car">
        <img src={Car} alt="Car" />
      </div>

      <div className="wheel">
        <img src={wheel} alt="wheel" className="back-wheel" />
        <img src={wheel} alt="wheel" className="front-wheel" />
      </div>

      <div className="Bitmoji">
        <img src={Bitmoji2} alt="Bitmoji" />
      </div>

      <div className="Banner">
        <img src={Banner} alt="banner" />
        <p className="banner1-text">
          <problem>Problem</problem> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est, minima.
        </p>
      </div>

      <div className="Banner-2">
        <img src={Banner} alt="banner" />
        <p className="banner1-text">
          <problem>Solution</problem> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Est, minima.
        </p>
      </div>
      {/* <div className="problem">
        <div className="problem-child-1">
            Problem
        </div>
            
        <div className="problem-child-2">
        Lorem   dignissimos officia tenetur at laborum aliquam dolorem odit. Deleniti magni corrupti cupiditate, fugiat adipisci earum molestiae blanditiis.

        </div>
      </div> */}

      {/* <div className="problem">
        <div className="problem-child-1">
            Problem
        </div>
            
        <div className="problem-child-2">
        Lorem   dignissimos officia tenetur at laborum aliquam dolorem odit. Deleniti magni corrupti cupiditate, fugiat adipisci earum molestiae blanditiis.

        </div>
      </div>
       */}

      {/* <div className="solution">
      <div className="solution-child-1">
            Solution
        </div>
            
        <div className="solution-child-2">
        Lorem   dignissimos officia tenetur at laborum aliquam dolorem odit. Deleniti magni corrupti cupiditate, fugiat adipisci earum molestiae blanditiis.

        </div>
      </div> */}
    </div>
  );
};

export default Hero;
