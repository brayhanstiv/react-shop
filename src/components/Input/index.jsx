// Packages
import React, { Fragment } from "react";

// Styles
import "./index.scss";

const Input = ({ id, type, className, placeholder, title }) => {
  return (
    <Fragment>
      <label htmlFor={id} className='label'>
        {title}
      </label>
      <input
        type={type}
        name={id}
        placeholder={placeholder}
        className={`input ${className}`}
      />
    </Fragment>
  );
};

export default Input;
