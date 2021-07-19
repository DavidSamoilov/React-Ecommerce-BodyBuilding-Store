import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  CartColumns,
  CartContent,
  PageHero,
} from "../components/";
import CheckoutContent from "../components/CheckoutContent";
// extra imports
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className='page-100'>
      {cart.length < 1 ? (
          <div className='empty'>
            <h2>your cart is empty</h2>
            <Link to='/products' className='btn'>
              fill it
            </Link>
          </div>
        ) : (
          <CheckoutContent />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
