// Packages
import React, { useContext, useEffect, useState } from "react";

// Context
import AppContext from "@context/appContext";

// Components
import { Title, OrderInfo, PrimaryButton, ShoppingCartItem } from "@components";

// Styles
import "./index.scss";

const ShoppingCart = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((sum, value) => sum + value.price, 0));
  }, [cart]);

  return (
    <aside className='shopping-cart-aside'>
      <Title text='Shopping Cart' />
      {cart.map((product, index) => (
        <ShoppingCartItem indexValue={index} key={index} product={product} />
      ))}
      <OrderInfo
        style={{ marginTop: "2rem" }}
        total={total}
        quantity={cart.length}
      />
      <PrimaryButton text='Checkout' style={{ marginTop: "1rem" }} />
    </aside>
  );
};

export default ShoppingCart;
