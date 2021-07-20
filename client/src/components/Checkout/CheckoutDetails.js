import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";

const CheckoutDetails = () => {
  const { cart ,total_amount} = useCartContext();

  return (
    <Wrapper>
      <div className="">
        <h4><FaShoppingCart/> Your order</h4>
      </div>
      <div className="">
        <button className="btn" type="button">
          Complete Order
        </button>
      </div>
      <div className="order-info">
        <h3>TOTAL:</h3>
        <h3>{total_amount} ₪</h3>
      </div>
      <div className="promo">
        <label htmlFor="promo">Promo Code</label>
        <div className="">
          <input type="text" id="promo" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
display: flex;
flex-direction: column;
gap:50px;
  button ,input{
    width: 100%;
  }
  .order-info {
    display: flex;
    justify-content: space-between;
  }
`;

export default CheckoutDetails;
