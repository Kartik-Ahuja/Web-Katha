import React from "react";
import "./CTA.css";
import FormDialog from "./form";
import { IoPerson } from "react-icons/io5";

const CTA = () => {
  return (
    <>
      <div className="CTA">
        <div className="container-child-1">
          <IoPerson className="CTA-icon" />
        </div>
        <div className="container-child-2">
          <div className="child-2-para">
            Ready to collaborate? Let's spark something together. Connect with
            us now!
          </div>
        </div>
        {/* <button className="container-child-3">
        </button> */}
        <button class="custom-btn btn-5">
          <span>
            <FormDialog />
          </span>
        </button>
      </div>
    </>
  );
};

export default CTA;
