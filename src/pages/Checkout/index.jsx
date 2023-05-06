// Packages
import React, { useContext } from "react";

// Context
import AppContext from "@context/appContext";

// Styles
import "./index.scss";

// Components
import {
  MainLayout,
  OrderItem,
  Title,
  OrderInfo,
  ContentLayout,
} from "@components";

const CheckoutPage = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <MainLayout main={false}>
      <Title text='Checkout' />
      <ContentLayout>
        <OrderInfo total={total} quantity={cart.length} />
        {cart.map((item, index) => (
          <OrderItem key={index} product={item} />
        ))}
      </ContentLayout>
    </MainLayout>
  );
};

export default CheckoutPage;
