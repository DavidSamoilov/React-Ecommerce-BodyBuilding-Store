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
    const tempItem = state.cart.find((i) => i.id === id )
    if (tempItem){


    }else{
        console.log(product);
        const newItem = {
            id,
            name:product.name,
            amount,
            image:product.images[0].image,
            price:product.price
            // max: product.stock
        }
        return {...state , cart:[...state.cart,newItem]}
    }
  }
  return state;
  throw new Error(`No matching ${action.type} action`);
};

export default cart_reducer;
