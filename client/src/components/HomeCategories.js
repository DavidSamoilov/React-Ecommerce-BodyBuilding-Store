import React from "react";
import styled from "styled-components";

const HomeCategories = () => {
  return (
    <Wrapper>
      <h2>
        <strong>SHOP BY</strong>
      </h2>
      <div className="categories-container">
        <div className="shopby-card">
          <div>
            <img
              alt="category"
              src="https://cdn.shopify.com/s/files/1/0898/4708/articles/Behind_Gymshark_s_Multi-Channel_Empire.png?v=1537916268"
            ></img>
          </div>

          <div className="shopby-content">
            <h2 className="shopby-title">Clothing</h2>
          </div>
        </div>
        <div className="shopby-card">
          <div className="">
            <img
              alt="category"
              src="https://www.kindpng.com/picc/m/1-19728_whey-protein-food-supplement-hd-png-download.png"
            ></img>
          </div>

          <div className="shopby-content">
            <h2 className="shopby-title">Food Supplements</h2>
          </div>
        </div>
        <div className="shopby-card">
          <div className="">
            <img
              alt="category"
              src="https://triathlonmagazine.ca/wp-content/uploads/2020/11/gettyimages-1079117394-170667a.jpg"
            ></img>
          </div>

          <div className="shopby-content">
            <h2 className="shopby-title">Shoes </h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /* background: var(--clr-grey-10); */

  margin: 3rem;
  text-align: center;
  .categories-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shopby-card:hover {
    cursor: pointer;
  }
  .shopby-card {
    margin: 1rem;
    img {
      width: 25vw;
      height: 30vh;
    }
  }
  @media (max-width: 776px) {
    .categories-container {
      flex-direction: column;
    }
    .shopby-card {
      margin: 1rem;
      img {
        width: 90vw;
        height: 30vh;
      }
    }
  }
`;
export default HomeCategories;
