// Packages
import React from "react";

// Components
import { AccountItem, MainLayout, Title, PrimaryButton } from "@components";

const MyAccountPage = () => {
  const { name, email, password } = {
    name: "Brayhan Suarez",
    email: "brayhan9505@gmail.com",
    password: "**************",
  };

  return (
    <MainLayout>
      <Title text='My account' />

      <AccountItem title='Name' value={name} />
      <AccountItem title='Email' value={email} />
      <AccountItem title='Password' value={password} />

      <PrimaryButton text='Save' />
    </MainLayout>
  );
};

export default MyAccountPage;
