// Packages
import React, { useContext } from "react";

// Assets
import { AddToCart, Close } from "@assets";

// Context
import AppContext from "@context/appContext";

// Styles
import "./index.scss";

const ProductDetail = () => {
  const {
    state: { product },
    closeDetail,
  } = useContext(AppContext);

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
        <button className='primary-button add-to-cart-button'>
          <img src={AddToCart} alt='add-to-cart' />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
