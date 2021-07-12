import { products_url as url } from "../utils/constants";
import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  const history = useHistory();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (product === null) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [product]);

  if (loading) {
    return <Loading />;
  }
  if (product === null || error) {
    return <Error />;
  }

  //  #TODO add is item in stock to db
  //  #TODO add is item CATEGORIES to db
  const categories = ["Clothing", "Outwear"];
  const stock = 500;
  const {
    name,
    price,
    short_description,
    long_description,
    id: sku,
    images,
  } = product;
  console.log("images1", images);
  return (
    <Wrapper>
      <PageHero title={name} product={name} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <h5 className="price">{price}$</h5>
            <p className="desc">{long_description}</p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "In stock" : "Out of stock"}
            </p>

            <p className="info">
              <span>Categories : </span>
            </p>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </section>
          <hr />
          {stock > 0 && <AddToCart />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
