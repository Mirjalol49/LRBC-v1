import React from "react";
import "./ButtonCall.css"; // Create a separate CSS file for styles

const GradientButton = ({ children, onClick }) => {
  return (
    <p className="button11" onClick={onClick}>
      {children || "Button"}
    </p>
  );
};

export default GradientButton;
