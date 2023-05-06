// Packages
import React from "react";
import {
  MainLayout,
  Title,
  ContentLayout,
  OrderInfo,
  OrderItem,
} from "@components";

ContentLayout;
const OrdersPage = () => {
  return (
    <MainLayout main={false}>
      <Title text='My Orders' />
      <ContentLayout>
        <OrderInfo />

        <OrderItem />
        <OrderItem />
      </ContentLayout>
    </MainLayout>
  );
};

export default OrdersPage;
