import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  console.log(featured);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper className="Section">
      <div className="title">
        <div className="h2">Featured Products</div>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    
      <Link to="/" className="btn">
          All Products
      </Link>
    </Wrapper>
  );
};
const Wrapper = styled.section`
    background: var(--clr-grey-10);
    .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
    }
    .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
