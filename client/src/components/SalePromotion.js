import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const SalePromotion = () => {
  return (
    <Wrapper className="section">
      <Link to="/products">
        <img
          className="ColumnItem-img lazyloaded"
          alt="7.17warehousesale"
          src="https://www.bodybuilding.com/images/merchandising/june-2021/warehouse-sale-hp-1640x150-50off.gif"
        ></img>
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 99vw;
    height: 17vh;
  }

  @media (max-width:720px){
    img {
    height: 10vh;
  }
  }
`;
export default SalePromotion;
