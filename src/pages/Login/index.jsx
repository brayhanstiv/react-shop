// Packages
import React, { useRef } from "react";

// Components
import {
  Input,
  Link,
  Logo,
  MainLayout,
  FormLayout,
  PrimaryButton,
} from "@components";

const LoginPage = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <MainLayout>
      <Logo />
      <FormLayout reference={form}>
        <Input
          id='email'
          type='email'
          title='Login'
          className='input-email'
          placeholder='email@gmail.com'
        />
        <Input
          id='password'
          type='password'
          title='Password'
          className='input-password'
          placeholder='*******'
        />
        <input
          onClick={handleSubmit}
          type='submit'
          className='primary-button main-button'
          value='Log in'
        />
      </FormLayout>
      <Link link='Forgot my password' />
      <PrimaryButton text='Sign Up' main={false} />
    </MainLayout>
  );
};

export default LoginPage;
