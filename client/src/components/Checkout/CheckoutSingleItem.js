import React from "react";
import styled from "styled-components";

const CheckoutSingleItem = ({ product }) => {
  return (
    <Wrapper>
      <img src={product.image} alt={product.name} srcset="" />
      <div className="checkout-info-container">
        <div className="product-name">
          <h4>
            <strong>{product.name}</strong>{" "}
          </h4>
        </div>
        <div className="quantity">
          <span>Quantity: </span>
          <span>{product.amount}</span>
        </div>
        <div className="price-per-unit">
          <span>Price per unit: </span>
          <span>{product.price} ₪</span>
        </div>
        <div className="final-price">
          <span>Final price:</span>
          <span>{product.price * product.amount} ₪</span>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 150px;
  display: flex;
  font-size: 24px;
  img {
    flex: 1;
    max-height: 100%;
    padding-right: 50px;
    border-radius: var(--radius);
    object-fit: cover;
  }

  .checkout-info-container {
    flex: 1;
  }
`;

export default CheckoutSingleItem;
