import React from "react";
import App from "../App";

import {
  HomePage,
  NewPasswordPage,
  LoginPage,
  EmailSentPage,
  MyAccountPage,
  NotFoundPage,
  PasswordRecoveryPage,
} from "@pages";
import { CheckoutPage, OrdersPage, SignUpPage } from "../pages";

const routes = [
  {
    path: "/",
    basename: "/react-shop",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":id",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "password-recovery",
        element: <PasswordRecoveryPage />,
      },
      {
        path: "email-sent",
        element: <EmailSentPage />,
      },
      {
        path: "new-password",
        element: <NewPasswordPage />,
      },
      {
        path: "account",
        element: <MyAccountPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: "checkout",
        element: <CheckoutPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const navRoutes = [
  {
    id: "",
    name: "All",
  },
  {
    id: "1",
    name: "Clothes",
  },
  {
    id: "2",
    name: "Electronics",
  },
  {
    id: "3",
    name: "Furnitures",
  },
  {
    id: "4",
    name: "Shoes",
  },
  {
    id: "5",
    name: "Others",
  },
];

const mobileRoutes = [
  [
    {
      to: "/",
      name: "CATEGORIES",
    },
    {
      to: "/",
      name: "All",
    },
    {
      to: "/",
      name: "Clothes",
    },
    {
      to: "/",
      name: "Electronics",
    },
    {
      to: "/",
      name: "Furnitures",
    },
    {
      to: "/",
      name: "Toys",
    },
    {
      to: "/",
      name: "Others",
    },
  ],
  [
    {
      to: "/",
      name: "My orders",
    },
    {
      to: "/",
      name: "My account",
    },
  ],
  [
    {
      to: "/",
      class: "email",
      name: "My orders",
    },
    {
      to: "/",
      class: "sign-out",
      name: "My account",
    },
  ],
];

const dropdownRoutes = [
  {
    to: "/orders",
    name: "My orders",
  },
  {
    to: "/account",
    name: "My account",
  },
  {
    to: "/",
    name: "Sign out",
  },
];

export { routes, navRoutes, mobileRoutes, dropdownRoutes };
