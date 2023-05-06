// Packages
import React, { useContext, useEffect } from "react";

// Context
import AppContext from "@context/appContext";

// Images
import { AddToCart } from "@assets";

// Styles
import "./index.scss";

const ProductItem = ({ product }) => {
  const { addToCart, setProduct } = useContext(AppContext);

  const handleCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className='product-card' onClick={() => setProduct(product)}>
      <img src={product.images[0]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
          <p>{product.category.name}</p>
        </div>
        <figure className='product-icon' onClick={handleCart}>
          <img src={AddToCart} alt='cart' />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
