import React from "react";

import Container from "react-bootstrap/Container";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import styled from "styled-components";

const HomePage = () => {
  axios.get("/products").then(res => {
    console.log(res);
    console.log(1);
  })

  return (
    <div>
      {/* Landing page hero */}
      <div className="hero">
        <div className="image-text">
          <div id="color-overlay">
            <Container className="h-100">
              <Row className="row h-100 align-items-center">
                <Col className="col-12 text-center">
                  <h1 className="display-2 opacity-one">This is DavesGym</h1>
                  <p className="lead opacity-one">
                    Optimize your training experience{" "}
                  </p>
                  <Button
                    variant="secondary"
                    href="#shop-header"
                    className="mt-5"
                    size="lg"
                    active
                  >
                    View Our products{" "}
                    <i className="fas fa-long-arrow-alt-down"></i>
                  </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      {/* ShopHeader Section */}
      <Container fluid id="shop-header" className="text-center ">
        <h2 className="align-items-center">Better Equipment, Faster Results</h2>
      </Container>

      {/* Item filter inputs */}
      <div className="my-4">
        <br />
        {/* Side Filters and Cards container */}
        <Container fluid>
          <Row>
            {/* Side Filters Column */}
            <Col md={3}>
              <Form.Label>Search for items by name</Form.Label>

              <Form.Control
                size="lg"
                type="text"
                placeholder="Filter by name"
              />
              <Form.Label>Filters</Form.Label>
              <Form.Control as="select">
                <option>Filter by</option>
                <option>Top Selling Products</option>
                <option>Top Rated Products</option>
                <option>Price: Lowest to Highest</option>
                <option>Price: Highest to Lowest</option>
              </Form.Control>

              {/* CheckBoxFilter */}
              <div className="form-checkbox form-checkbox-inline">
                <div className="form-checkbox-legend">Categories</div>
                <div className="form-checkbox-label">
                  <input
                    name={"rap"}
                    className="form-checkbox-field"
                    type="checkbox"
                  />
                  <i className="form-checkbox-button"></i>
                  <span>Clothing</span>
                </div>
                <div className="form-checkbox-label">
                  <input
                    name={"pop"}
                    className="form-checkbox-field"
                    type="checkbox"
                  />
                  <i className="form-checkbox-button"></i>
                  <span>Gym equipment</span>
                </div>
                <div className="form-checkbox-label">
                  <input
                    name={"rock"}
                    className="form-checkbox-field"
                    type="checkbox"
                  />
                  <i className="form-checkbox-button"></i>
                  <span>Protein Products</span>
                </div>
                <div className="form-checkbox-label">
                  <input
                    name={"metal"}
                    className="form-checkbox-field"
                    type="checkbox"
                  />
                  <i className="form-checkbox-button"></i>
                  <span>Food supplements</span>
                </div>
                <div className="form-checkbox-label">
                  <input
                    name={"r_b"}
                    className="form-checkbox-field"
                    type="checkbox"
                  />
                  <i className="form-checkbox-button"></i>
                  <span>R&amp;B</span>
                </div>
              </div>
            </Col>
            {/* Cards Design */}

            <Col md={9}>
              <Container fluid>
                <Row className="justify-content-around">
                  <figure className="snip1418 hover">
                    <img
                      src="https://i.pinimg.com/originals/1e/60/78/1e6078cf9016b224125aeb8105aa08ee.jpg"
                      width="300"
                      height="300"
                      alt="sample85"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>GymShark T-Shirt</h3>
                      <p>GymShark Cotton T-shirt made for training athletes</p>
                      <div className="price">
                        <s>$24.00</s>$19.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                  <figure className="snip1418 hover">
                    <img
                      src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec6d50db/hi-res/350283_web_Optimum%20Nutrition%20GSW_5LB_VanillaIceCream_Front_.jpg?sw=2000&sh=2000&sm=fit"
                      width="300"
                      height="300"
                      alt="sample96"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>Whey Protein Vanilla flavor 2.5kg</h3>
                      <p>Premium Whey protein powder</p>
                      <div className="price">
                        <s>$24.00</s>$19.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                  <figure className="snip1418 hover">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/61%2Bt5uT1vpL._AC_SL1500_.jpg"
                      width="300"
                      height="300"
                      alt="sample92"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>Home Gym Squat rack</h3>
                      <p>Gym rack made for home Gyms</p>
                      <br></br>
                      <p>Free shipping inside of israel</p>
                      <div className="price">
                        <s>$1204.00</s>$999.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Row>
                <Row className="justify-content-around">
                  <figure className="snip1418 hover">
                    <img
                      src="https://i.pinimg.com/originals/1e/60/78/1e6078cf9016b224125aeb8105aa08ee.jpg"
                      width="300"
                      height="300"
                      alt="sample85"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>GymShark T-Shirt</h3>
                      <p>GymShark Cotton T-shirt made for training athletes</p>
                      <div className="price">
                        <s>$24.00</s>$19.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                  <figure className="snip1418 hover">
                    <img
                      src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec6d50db/hi-res/350283_web_Optimum%20Nutrition%20GSW_5LB_VanillaIceCream_Front_.jpg?sw=2000&sh=2000&sm=fit"
                      width="300"
                      height="300"
                      alt="sample96"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>Whey Protein Vanilla flavor 2.5kg</h3>
                      <p>Premium Whey protein powder</p>
                      <div className="price">
                        <s>$24.00</s>$19.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                  <figure className="snip1418 hover">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/61%2Bt5uT1vpL._AC_SL1500_.jpg"
                      width="300"
                      height="300"
                      alt="sample92"
                    />
                    <div className="add-to-cart">
                      {" "}
                      <i className="ion-android-add"></i>
                      <span>Add to Cart</span>
                    </div>
                    <figcaption>
                      <h3>Home Gym Squat rack</h3>
                      <p>Gym rack made for home Gyms</p>
                      <br></br>
                      <p>Free shipping inside of israel</p>
                      <div className="price">
                        <s>$1204.00</s>$999.00
                      </div>
                    </figcaption>
                    <a href="#"></a>
                  </figure>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

const Wrapper = styled.div``

export default HomePage;
