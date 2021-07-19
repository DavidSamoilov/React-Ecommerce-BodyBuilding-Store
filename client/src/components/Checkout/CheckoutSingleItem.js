import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckoutSingleItem = ({ product }) => {
  return (
    <Wrapper className="product">
      <Link to={`/products/${product.id}`}>
        <img className="" src={product.image} alt="" />
      </Link>
      <div className="product-info">
        <p> {product.name}</p>
        <p>{product.short_description}</p>
        <p>Quantity : {product.amount}</p>
        <p>Price : {product.price * product.amount} ₪
</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
  display: flex;
  p{
      margin-bottom:2px ;
  }
  img {
    height: 100px;
    width: 100px;
  }
`;

export default CheckoutSingleItem;
