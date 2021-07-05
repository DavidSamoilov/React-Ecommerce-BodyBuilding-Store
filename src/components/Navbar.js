import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
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
              <i className="fas fa-shopping-cart"></i>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
