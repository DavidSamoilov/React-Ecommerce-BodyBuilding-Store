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
import { Link } from "react-router-dom";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CartItem from "../components/CartItem";
import CheckoutItem from "../components/CheckoutItem";

const CheckoutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51IpW9gAP3T7yd15hmD2hqzFBXdYErcc801rAYMHEqfk3h5HFoX4SJK7IeuEam9qGNGyerH8Y74w6X5QOIvC9tlYG0017JQ6Zep"
  );
  const { cart } = useCartContext();
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page-100">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <main>
            <CartColumns />
            <div className="cart-content">
              {cart.map((item) => {
                return <CheckoutItem key={item.id} {...item} />;
              })}
              <hr />
            </div>
            <Elements stripe={stripePromise}>
              <StripeCheckout />
            </Elements>
          </main>
        )}
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
