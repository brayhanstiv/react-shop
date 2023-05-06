// Packages
import React, { useContext } from "react";

// Context
import AppContext from "@context/appContext";

// Images
import { AddToCart, AddedToCart } from "@assets";

// Styles
import "./index.scss";

const ProductItem = ({ product }) => {
  const {
    state: { cart },
    addToCart,
    setProduct,
  } = useContext(AppContext);

  const isAdded = cart.find((index) => index.id === product.id);

  const handleCart = (e) => {
    e.stopPropagation();
    if (!isAdded) {
      addToCart(product);
    }
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
          <img src={isAdded ? AddedToCart : AddToCart} alt='cart' />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
