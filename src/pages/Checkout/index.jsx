// Packages
import React from "react";

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
  return (
    <MainLayout main={false}>
      <Title text='Checkout' />
      <ContentLayout>
        <OrderInfo />

        <OrderItem />
        <OrderItem />
      </ContentLayout>
    </MainLayout>
  );
};

export default CheckoutPage;
