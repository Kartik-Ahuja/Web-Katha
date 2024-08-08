// Cursor.js
import React, { useState, useEffect } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="smallcursor"
        style={{ left: position.x - 5 + "px", top: position.y - 5 + "px" }}
      ></div>
      <div
        className="largecursor"
        style={{ left: position.x - 22 + "px", top: position.y - 22 + "px" }}
      ></div>
    </>
  );
};

export default Cursor;
