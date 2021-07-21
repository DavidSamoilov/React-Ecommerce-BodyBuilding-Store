import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  // #TODO add stock to db
  const stock = 6;
  const {addToCart} = useCartContext()
  const { id } = product;
  const [amount, setAmount] = useState(1);
  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) return oldAmount;
      else return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) return oldAmount;
      else return tempAmount;
    });
  };

  return (
      <Wrapper>
      <div className="btn-container">
    <AmountWrapper className="amount-btsn">
    <button type='button' className='amount-btn' onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className='amount'>{amount}</h2>
      <button type='button' className='amount-btn' onClick={increase}>
        <FaPlus />
      </button>
    </AmountWrapper>
      <Link
          to='/products'
          className='btn'
          onClick={() => addToCart(id, amount, product)}
        >
          add to cart
        </Link>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.btn-container {
    margin-top: 2rem;
  }
  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`

const AmountWrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AddToCart;
