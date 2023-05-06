// Packages
import React from "react";
import { Link } from "react-router-dom";

//Styles
import "./index.scss";

// Routes
import { mobileRoutes } from "@routes";

const MobileMenu = () => {
  return (
    <div className='mobile-menu'>
      {mobileRoutes.map((menu, index) => (
        <ul key={index}>
          {menu.map((item, index) => (
            <li key={index}>
              <Link to={item.to} className={item.class ? item.class : "title"}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default MobileMenu;
