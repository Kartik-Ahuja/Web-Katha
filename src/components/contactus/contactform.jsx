import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./contactform.css";

export default function FormDialog() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleWhatsAppClick = () => {
    const { name, email, mobile, message } = formData;

    const url =
      "https://wa.me/918696607292?text=" +
      `*Name :* ${name}%0a` +
      `*Email :* ${email}%0a` +
      `*Mobile :* ${mobile}%0a` +
      `*Message :* ${message}`;

    window.open(url, "_blank").focus();
  };

  const handleClearForm = () => {
    setFormData({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <form action="" className="form">
      <p className="form-title">Connect with us!</p>
      <div className="form-child">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name here"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-child">
        <label htmlFor="email">Email id</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your Email id here"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-child">
        <label htmlFor="mobile">Mobile no</label>
        <input
          type="text"
          id="mobile"
          placeholder="Enter your Mobile no here"
          name="mobile"
          value={formData.mobile}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-child">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="How can we help you?"
          multiline
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-child-2">
        <button onClick={handleClearForm}>Clear All</button>
        <button onClick={handleWhatsAppClick}>Submit</button>
      </div>
    </form>
  );
}
