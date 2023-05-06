// Packages
import React from "react";

// Styles
import "./index.scss";

const OrderItem = () => {
  return (
    <div className='order-item'>
      <figure>
        <img
          src='https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='imagen'
        />
      </figure>
      <p>Bike</p>
      <p>$30.00</p>
    </div>
  );
};

export default OrderItem;
