// Packages
import React from "react";

// Styles
import "./index.scss";

const FormLayout = ({ children, reference }) => {
  return (
    <form action='/' className='form' ref={reference}>
      {children}
    </form>
  );
};

export default FormLayout;
