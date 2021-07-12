import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>/
          {product && <Link to="/products">Products/</Link>}
          {title}
        </h3>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section``;

export default PageHero;
