import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";

const CheckoutDetails = () => {
  const { cart, total_amount } = useCartContext();

  return (
    <Wrapper>
      <div className="">
        <h4>
          <FaShoppingCart /> Your order
        </h4>
      </div>
      <div className="order-info">
        <div className="total">
          <h3>TOTAL:</h3>
          <h3>{total_amount} ₪</h3>
        </div>
        <div className="promo">
          <label htmlFor="promo">Promo Code</label>
          <div className="">
            <input type="text" id="promo" />
          </div>
        </div>
      </div>

      <div className="">
        <Link to="order/1">
        <button className="btn" type="button">
          Complete Order
        </button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgb(243, 243, 243);
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  font-size: 26px;
  button,
  input {
    width: 100%;
  }
  .order-info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .total {
    display: flex;
    justify-content: space-between;
  }
`;

export default CheckoutDetails;
