import React from "react";
import CartButtons from "./CartButtons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import logo from "../assets/logo.jpg";
import { useProductsContext } from "../context/products_context";
import { useAuthContext } from "../context/AuthApi";
const Cookies = require("js-cookie");

const Navigation = () => {
  const { user, auth } = useAuthContext();
  const admin_panel = {
    id: 4,
    text: "Admin Dashboard",
    url: "/admin",
  };

  const user_panel = {
    id: 5,
    text: "My Profile",
    url: "/profile",
  }
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="DavesGym logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {auth && <li key={user_panel.id}>
                <Link to={user_panel.url}>{user_panel.text}</Link>
              </li>}
          {Cookies.getJSON("userCookie").is_admin && <li key={admin_panel.id}>
                <Link to={admin_panel.url}>{admin_panel.text}</Link>
              </li>}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

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
    justify-content: space-between;
    img {
      height: 5rem;
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
    height: 5px;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
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
      li {
        margin: 0 0.5rem;
      }
      a {
        color: grey; /* /var(--clr-grey-3); */
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid hsl(22, 31%, 67%);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navigation;
