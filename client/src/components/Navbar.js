import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";
import { Form, Button, FormControl } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src="" alt="LOGO" srcset="" />
          </Link>
          <button type="button" className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        
      </div>
    </NavContainer>
  );
};

export default Navigation;

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nag-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
    }
    li {
      margin: 0 0.5rem;
    }
    a{
      color :grey;
      font-size:1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding :0.5rem;

    }
  }
`;
