import React from "react";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newAmount = cartItem.amount + amount;
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      console.log(product);
      const newItem = {
        id,
        name: product.name,
        amount,
        image: product.images[0].image,
        price: product.price,
        // this will be added to check max stock
        // max: product.stock
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if(action.type === REMOVE_CART_ITEM){
    const tempCart = state.cart.filter((item) => item.id !== action.payload)
    return {...state , cart :tempCart}
  }
  throw new Error(`No matching ${action.type} action`);
};

export default cart_reducer;
