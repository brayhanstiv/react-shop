// Packages
import React, { useContext } from "react";

// Context
import AppContext from "@context/appContext";

// Components
import { DesktopMenu, MobileMenu, DropdownMenu } from "@components";
import { ShoppingCart } from "@containers";

// Styles
import "./index.scss";

const Navbar = () => {
  const { state } = useContext(AppContext);

  return (
    <nav className='navbar'>
      <DesktopMenu />
      {state.menu && <MobileMenu />}
      {state.dropdown && <DropdownMenu />}

      {state.shopping && state.cart.length > 0 && <ShoppingCart />}
    </nav>
  );
};

export default Navbar;
