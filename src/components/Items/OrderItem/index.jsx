// Packages
import React from "react";

// Styles
import "./index.scss";

const OrderItem = ({ product }) => {
  return (
    <div className='order-item'>
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default OrderItem;
