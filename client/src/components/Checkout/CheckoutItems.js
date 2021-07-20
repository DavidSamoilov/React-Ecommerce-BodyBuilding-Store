import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";
import CheckoutSingleItem from "./CheckoutSingleItem";

const CheckoutItems = () => {
  const { cart } = useCartContext();

  return (
    <Wrapper>
      {cart.map((product) => {
        return <CheckoutSingleItem product={product} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default CheckoutItems;
