import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Col, Form, FormControl, Row } from "react-bootstrap";
const MainPage = () => {
  return (
    <div>
      {/* Nav */}
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.crushpixel.com/big-static7/preview4/gym-weight-icon-140947.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Login/Register</Nav.Link>
            <Nav.Link href="#Cart">
              <i class="fas fa-shopping-cart"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* intro */}
      <div className="image-text">
        <Container className="h-100">
          <Row className="row h-100 align-items-center">
            <Col className="col-12 text-center">
              <h1 className="display-2">This is DavesGym</h1>
              <p className="lead">Optimize your training experience </p>
            </Col>
          </Row>
        </Container>
      </div>

    {/* Item filter inputs */}
    <div className="my-4">
  <Form.Control size="lg" type="text" placeholder="Filter by name" />
  <br />
  <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>Categories</option>
      <option>Protein</option>
      <option>Clothing</option>
      <option>Gym Equipment</option>
      <option>Food Supplements</option>
    </Form.Control>

  <Form.Label>Example select</Form.Label>
    <Form.Control as="select">
      <option>Filter by</option>
      <option>Top Selling Products</option>
      <option>Top Rated Products</option>
      <option>Price: Lowest to Highest</option>
      <option>Price: Highest to Lowest</option>
    </Form.Control>

</div>

{/* Cards Display */}

<br />
<br />
<br />
<br />
<br />

    </div>


  );
};

export default MainPage;
