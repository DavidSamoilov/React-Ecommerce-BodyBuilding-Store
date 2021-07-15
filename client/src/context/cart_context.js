import React from "react";
import { useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
};

const CartContext = React.createContext();
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //   add to cart
  const addToCart = (id, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, amount,product } });
  };

  // remove item
  const removeItem = (id) => {

  }
  const toggleAmount = (id,value) => {

  }
  const clearCart = () => {}
  return (
    <CartContext.Provider value={{ ...state, addToCart ,removeItem,clearCart,toggleAmount}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
