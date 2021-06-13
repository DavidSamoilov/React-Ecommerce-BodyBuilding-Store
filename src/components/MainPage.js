import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Col, Form, FormControl, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        <Form.Control size="lg" type="text" placeholder="Filter by name"/>
        <br />
        {/* Side Filters and Cards container */}
        <Container fluid>
          <Row>
            {/* Side Filters Column */}
            <Col md={4}>
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

              {/* CheckBoxFilter */}
              <div class="form-checkbox form-checkbox-inline">
            <div class="form-checkbox-legend">Categories</div>
            <div class="form-checkbox-label">
                <input name={"rap"} class="form-checkbox-field" type="checkbox" />
                <i class="form-checkbox-button"></i>
                <span>Clothing</span>
            </div>
            <div class="form-checkbox-label">
                <input name={"pop"} class="form-checkbox-field" type="checkbox" />
                <i class="form-checkbox-button"></i>
                <span>Gym equipment</span>
            </div>
            <div class="form-checkbox-label">
                <input name={"rock"} class="form-checkbox-field" type="checkbox" />
                <i class="form-checkbox-button"></i>
                <span>Protein Products</span>
            </div>
            <div class="form-checkbox-label">
                <input name={"metal"} class="form-checkbox-field" type="checkbox" />
                <i class="form-checkbox-button"></i>
                <span>Food supplements</span>
            </div>
            <div class="form-checkbox-label">
                <input name={"r_b"} class="form-checkbox-field" type="checkbox" />
                <i class="form-checkbox-button"></i>
                <span>R&amp;B</span>
            </div>
        </div>
              </Col>
{/* Cards Design */}
<Col md={8}>
  <Row>
<figure class="snip1418"><img src="https://i.pinimg.com/originals/1e/60/78/1e6078cf9016b224125aeb8105aa08ee.jpg" width="300" height="300" alt="sample85"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Pudol Doux</h3>
    <p>All this modern technology just makes people try to do everything at once.</p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1418 hover"><img src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec6d50db/hi-res/350283_web_Optimum%20Nutrition%20GSW_5LB_VanillaIceCream_Front_.jpg?sw=2000&sh=2000&sm=fit" width="300" height="300" alt="sample96"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Kurie Secco</h3>
    <p>If you do the job badly enough, sometimes you don't get asked to do it again. </p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1418"><img src="https://images-na.ssl-images-amazon.com/images/I/61%2Bt5uT1vpL._AC_SL1500_.jpg" width="300" height="300" alt="sample92"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Zosaisan Invec</h3>
    <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life. </p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
</Row>
  <Row>
<figure class="snip1418"><img src="https://i.pinimg.com/originals/1e/60/78/1e6078cf9016b224125aeb8105aa08ee.jpg" width="300" height="300" alt="sample85"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Pudol Doux</h3>
    <p>All this modern technology just makes people try to do everything at once.</p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1418 hover"><img src="https://www.gnc.com/dw/image/v2/BBLB_PRD/on/demandware.static/-/Sites-master-catalog-gnc/default/dwec6d50db/hi-res/350283_web_Optimum%20Nutrition%20GSW_5LB_VanillaIceCream_Front_.jpg?sw=2000&sh=2000&sm=fit" width="300" height="300" alt="sample96"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Kurie Secco</h3>
    <p>If you do the job badly enough, sometimes you don't get asked to do it again. </p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
<figure class="snip1418"><img src="https://images-na.ssl-images-amazon.com/images/I/61%2Bt5uT1vpL._AC_SL1500_.jpg" width="300" height="300" alt="sample92"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>Zosaisan Invec</h3>
    <p>If your knees aren't green by the end of the day, you ought to seriously re-examine your life. </p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
</Row>


</Col>
          </Row>
        </Container>
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
