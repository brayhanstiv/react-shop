// Packages
import React, { useContext } from "react";

// Assets
import { AddToCart, AddedToCart, Close } from "@assets";

// Context
import AppContext from "@context/appContext";

// Styles
import "./index.scss";

const ProductDetail = () => {
  const {
    state: { cart, product },
    addToCart,
    closeDetail,
  } = useContext(AppContext);

  const isAdded = cart.find((item) => item.id === product.id);

  const handleCart = () => {
    if (!isAdded) {
      addToCart(product);
    }
  };

  return (
    <aside className='aside-detail aside-viewport'>
      <img src={product.images[0]} alt={product.title} />
      <div onClick={closeDetail} className='product-detail-close'>
        <img src={Close} alt='close' />
      </div>
      <div className='product-detail-info'>
        <p className='product-price'>${product.price}</p>
        <p className='product-title'>{product.title}</p>
        <p className='product-category'>{product.category.name}</p>
        <p className='product-description'>{product.description}</p>
        <button
          className={`${
            isAdded ? "secondary-button" : "primary-button"
          } add-to-cart-button`}
          onClick={handleCart}
        >
          <img src={isAdded ? AddedToCart : AddToCart} alt='add-to-cart' />
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
