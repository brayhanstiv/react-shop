// Packages
import React from "react";

// Styles
import "./index.scss";

const OrderInfo = ({ style, total, quantity }) => {
  return (
    <div className='order-info' style={style}>
      <div>
        <span>03.25.21</span>
        <span>{quantity} articles</span>
      </div>
      <p>${total}</p>
    </div>
  );
};

export default OrderInfo;
