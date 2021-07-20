import React from "react";
import styled from "styled-components";

const HomeInfo = () => {
  return (
    <Wrapper>
      <div className="seo-block">
        <h1>More than your best workout clothing</h1>
        <div className="seo-block__content">
          <p>
            The GymBug community is devoted to unlocking potential through
            conditioning and the things we do today to prepare for tomorrow.
            When it comes to performing at your max, there should be no
            obstacles – least of all your workout clothes. So everything about
            the gym clothes and accessories we design for you has your progress
            and the best results in mind. We want you to have the most
            comfortable gym hoodies, the most supportive seamless leggings and
            the most innovatively designed workout shirts that are made to move
            when it matters most.
          </p>{" "}
          <p>
            Game-changing workout clothing. It’s not just in the designs, it’s
            in the people who wear them.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .seo-block {
    background-color: #ffffff;
    padding: 2.4rem;
    margin: 1.6rem;
    position: relative;
    text-align: left;
    border: 0.1rem solid #bbbcbc;
  }
  .seo-block__content {
    line-height: 1.15;
    --vh: 9.37px;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    color: black;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
    font-size: 16px;
    text-align: left;
    box-sizing: border-box;
  }
`;
export default HomeInfo;
