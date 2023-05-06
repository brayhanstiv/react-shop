// Packages
import React, { Fragment, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// Context
import AppContext from "@context/appContext";

// Images
import { Menu, LogoYardSale, ShoppingCart } from "@assets";

// Routes
import { navRoutes } from "@routes";

//Styles
import "./index.scss";

const DesktopMenu = () => {
  const {
    state: { cart },
    toggleMenu,
    toggleDropdown,
    toggleShopping,
  } = useContext(AppContext);
  return (
    <Fragment>
      <img
        onClick={toggleMenu}
        id='header-icon'
        src={Menu}
        alt='menu'
        className='header-icon'
      />
      <div className='header'>
        <Link to={"/"}>
          <img src={LogoYardSale} alt='logo' className='header-logo' />
        </Link>
        <ul>
          {navRoutes.map((route, index) => (
            <li key={index}>
              <NavLink
                to={`${route.id}`}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className='header-right'>
        <ul>
          <li onClick={toggleDropdown} className='header-email'>
            platzi@example.com
          </li>
          <li onClick={toggleShopping} className='header-shopping-cart'>
            <img src={ShoppingCart} alt='shopping-cart' />
            <div>{cart.length >= 0 ? cart.length : 0}</div>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default DesktopMenu;
