// Packages
import React, { useContext } from "react";

// Context
import AppContext from "@context/appContext";

// Assets
import { Close } from "@assets";

// Styles
import "./index.scss";

const ShoppingCartItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className='shopping-cart'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img onClick={() => removeFromCart(indexValue)} src={Close} alt='close' />
    </div>
  );
};

export default ShoppingCartItem;
