import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, images, name, price, long_description, short_description } =
          product;
        return (
          <article key={id}>
            <Link to={`/products/${id}`}>
              <img src={images[0].image} alt="{name}" />
            </Link>

            <div className="">
              <h4>{name}</h4>
              <h5 className="price">{price}₪</h5>
              <p>{long_description.substring(0, 150)}...</p>
              <p>{short_description}</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
