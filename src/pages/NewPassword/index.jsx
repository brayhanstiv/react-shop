// Packages
import React from "react";

// Components
import {
  Input,
  Logo,
  FormLayout,
  MainLayout,
  Subtitle,
  Title,
} from "@components";

const NewPasswordPage = () => {
  return (
    <MainLayout>
      <Logo />
      <Title text='Create a new password' />
      <Subtitle text='Enter a new password for your account' />
      <FormLayout>
        <Input
          id='password'
          type='password'
          title='Password'
          placeholder='*******'
          className='input-password'
        />
        <Input
          id='password'
          type='password'
          title='Retype Password'
          placeholder='*******'
          className='input-password'
        />
        <input type='submit' className='primary-button' value='Confirm' />
      </FormLayout>
    </MainLayout>
  );
};

export default NewPasswordPage;
