// Packages
import React from "react";

// Components
import {
  Link,
  Subtitle,
  Title,
  MainLayout,
  PrimaryButton,
  Logo,
} from "@components";

// Images
import { Email } from "@assets";

// Styles
import "./index.scss";

const EmailSentPage = () => {
  return (
    <MainLayout>
      <Logo />
      <Title text='Email has been sent!' />
      <Subtitle text='Please check your inbox for instructions on how to reset the password' />
      <div className='email-image'>
        <img src={Email} alt='email' />
      </div>
      <PrimaryButton text='Login' />

      <Link text='Didn&#39;t receive the email?' link='Resend' />
    </MainLayout>
  );
};

export default EmailSentPage;
