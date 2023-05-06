// Packages
import React from "react";

// Styles
import "./index.scss";

const PrimaryButton = ({ text, main = true, style }) => {
  return (
    <button
      className={main ? "primary-button" : "secondary-button"}
      style={style}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
