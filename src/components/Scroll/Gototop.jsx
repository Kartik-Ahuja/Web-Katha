import React, { useState, useEffect } from "react";
import "../Scroll/Gototop.css"; // Import your CSS file for styling
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Check scroll position and show/hide the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <span>
        <KeyboardDoubleArrowUpIcon />
      </span>
    </div>
  );
}

export default ScrollToTopButton;
