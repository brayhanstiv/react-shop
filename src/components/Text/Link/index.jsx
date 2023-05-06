// Packages
import React from "react";

// Styles
import "./index.scss";

const Link = ({ text, link }) => {
  return (
    <p className='link'>
      <span>{text} </span>
      <a href='#'>{link}</a>
    </p>
  );
};

export default Link;
