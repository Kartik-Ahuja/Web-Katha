import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services/Services";
import CTA from "./components/CTA/CTA";
import Whyus from "./components/Whyus/Whyus";
import Portfolio from "./components/Portfolio/Portfolio";
import Industry from "./components/Serving Ind/Industry";
import ContactSection from "./components/contactus/ContactSection";
import Cursor from "./components/cursor/Cursor";
import Ourteam from "./components/Ourteam/Ourteam";

const Home = () => {
  return (
    <div>
      <div className="">
        <Hero />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <CTA />
      </div>
      <div className="">
        <Whyus />
      </div>
      <div className="">
        <Portfolio />
      </div>
      <div className="">
        <Industry />
      </div>
      <div className="">
        <ContactSection />
      </div>
      <div className="">
        <Ourteam />
      </div>
    </div>
  );
};

export default Home;
