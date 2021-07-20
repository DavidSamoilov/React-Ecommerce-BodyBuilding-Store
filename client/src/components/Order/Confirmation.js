import React, { useEffect, useState } from "react";
import { FaMailBulk } from "react-icons/fa";
import styled from "styled-components";
import { useCartContext } from "../../context/cart_context";

const Cookies = require("js-cookie");


const Confirmation = () => {
  const {clearCart} = useCartContext()
  useEffect(()=>{
    clearCart()
    },[])
  const user = Cookies.getJSON("userCookie");
  const { first_name: name, email } = user;
  const [isMailSent, setIsMailSent] = useState(false);
  return (
    <Wrapper>
      <h1>
        <strong>
          Thank you <span>{name}</span>
        </strong>
      </h1>
      <div className="tex">
        <h3>A confirmation as been sent to your email,</h3>
        <h3>Since you're here, join our list for discounts!</h3>
      </div>
      <div className="mail-container">
        <span className="icon">
          <FaMailBulk />
        </span>
        <input
          defaultValue={email ? email : null}
          placeholder="Enter email..."
          type="text"
        />
      </div>
      <button className="btn" onClick={() => setIsMailSent(true)}>
        Join Discount Club
      </button>
      {isMailSent && <h2>Email sent successfully</h2>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  span {
    color: rgb(221, 33, 32);
  }
  .icon {
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 2rem;
  }
  .mail-container {
    display: flex;
    gap: 1rem;
  }
  .btn {
    font-size: 2rem;
  }
`;
export default Confirmation;
