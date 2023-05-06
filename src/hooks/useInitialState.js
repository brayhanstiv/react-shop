import { useReducer, useState } from "react";

const initialState = {
  cart: [],
  product: {},
  menu: false,
  dropdown: false,
  shopping: false,
  detail: false,
};

const types = {
  TOGGLE_MENU: "TOGGLE_MENU",
  TOGGLE_DROPDOWN: "TOGGLE_DROPDOWN",
  TOGGLE_SHOPPING: "TOGGLE_SHOPPING",
  CLOSE_DETAIL: "CLOSE_DETAIL",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_PRODUCT: "SET_PRODUCT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return {
        ...state,
        menu: !state.menu,
        dropdown: false,
        shopping: false,
        detail: false,
      };
    case types.TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdown: !state.dropdown,
        menu: false,
        shopping: false,
        detail: false,
      };
    case types.TOGGLE_SHOPPING:
      return {
        ...state,
        shopping: !state.shopping,
        menu: false,
        dropdown: false,
        detail: false,
      };
    case types.CLOSE_DETAIL:
      return {
        ...state,
        detail: false,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        detail: false,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        detail: false,
        shopping: true,
        menu: false,
        dropdown: false,
      };
    case types.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        detail: true,
        shopping: false,
        menu: false,
        dropdown: false,
      };
    default:
      throw new Error();
  }
};

const useInitialState = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => dispatch({ type: types.TOGGLE_MENU });
  const toggleDropdown = () => dispatch({ type: types.TOGGLE_DROPDOWN });
  const toggleShopping = () => dispatch({ type: types.TOGGLE_SHOPPING });
  const closeDetail = () => dispatch({ type: types.CLOSE_DETAIL });
  const addToCart = (payload) =>
    dispatch({ type: types.ADD_TO_CART, payload: payload });
  const removeFromCart = (payload) =>
    dispatch({ type: types.REMOVE_FROM_CART, payload: payload });
  const setProduct = (payload) =>
    dispatch({ type: types.SET_PRODUCT, payload: payload });
  return {
    state,
    toggleMenu,
    toggleDropdown,
    toggleShopping,
    closeDetail,
    addToCart,
    removeFromCart,
    setProduct,
  };
};

export default useInitialState;
