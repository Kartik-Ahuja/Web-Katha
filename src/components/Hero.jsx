import React from "react";
import "../components/Hero.css";
import Car from "../Images/Hero images/car.png";
import wheel from "../Images/Hero images/wheel.png";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="highway"></div>
      <div className="city"></div>
      <div className="car">
        <img src={Car} alt="Car" />
      </div>
      <div className="wheel">
        <img src={wheel} alt="wheel" className="back-wheel" />
        <img src={wheel} alt="wheel" className="front-wheel" />
      </div>
    </div>
  );
};

export default Hero;
