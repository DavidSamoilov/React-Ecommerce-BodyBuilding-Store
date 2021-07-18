import React from "react";
import styled from "styled-components";
import {
  CartColumns,
  CartContent,
  PageHero,
  StripeCheckout,
} from "../components/";
// extra imports
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page-100">
      
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  } */
`;
export default CheckoutPage;
