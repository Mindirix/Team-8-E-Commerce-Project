import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shopping-bags-svgrepo-com.svg";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [collapseMenu, setCollapseMenu] = useState(true);

  function handleCollapse() {
    setCollapseMenu(!collapseMenu);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Sprints Store" className="store-logo" />
        </NavLink>
        <button
          onClick={handleCollapse}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${collapseMenu ? "collapse" : null} navbar-collapse `}
          id="navbarSupportedContent"
        >
          <NavbarStyle>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className={`nav-link`} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to={"/about"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to={"/menu"}>
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`nav-link`} to={"/contactus"}>
                  Contact us
                </NavLink>
              </li>
            </ul>
          </NavbarStyle>
          <div className="login-cart">
            <NavLink to="/cart">
              <FaShoppingCart />
            </NavLink>
            <NavLink className={`nav-link`} to={"/login"}>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarStyle = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  a {
    text-transform: capitalize;
    &:hover {
      border-bottom: 2px solid white;
    }
  }

  a.active {
    border-bottom: 2px solid white;
  }
`;

export default Navbar;
