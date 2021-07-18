import React from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link, useHistory} from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useProductsContext } from "../context/products_context";
import { useAuthContext } from "../context/AuthApi";
const Cookies = require("js-cookie");

const CartButtons = () => {
  const history = useHistory()
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  const {auth,setAuth} = useAuthContext()
  const logout = () => {
    Cookies.set("userCookie", []);
    setAuth(false)
    history.push("./")
  };
  return (

    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
        {auth?(
        <button type="button" onClick={closeSidebar,logout} className="auth-btn">
        {Cookies.getJSON("userCookie").first_name} Logout<FaUserPlus />
        </button>
        ):
              (<Link to="/login">
        <button type="button" onClick={closeSidebar} className="auth-btn">
          Login <FaUserPlus />
        </button>
        </Link>)

        }
        
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;
