// Packages
import React, { useContext } from "react";

// Context
import AppContext from "@context/appContext";

// Components
import {
  MainLayout,
  Title,
  ContentLayout,
  OrderInfo,
  OrderItem,
} from "@components";

ContentLayout;
const OrdersPage = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <MainLayout main={false}>
      <Title text='My Orders' />
      <ContentLayout>
        <OrderInfo total={total} quantity={cart.length} />
        {cart.map((item, index) => (
          <OrderItem key={index} product={item} />
        ))}
      </ContentLayout>
    </MainLayout>
  );
};

export default OrdersPage;
