// Packages
import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./index.scss";

// Routes
import { dropdownRoutes } from "@routes";

const DropdownMenu = () => {
  return (
    <div className='dropdown-menu'>
      <ul>
        {dropdownRoutes.map((item, index) => (
          <li key={index}>
            <Link to={item.to} className='title'>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
