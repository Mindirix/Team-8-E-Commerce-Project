import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [collapseMenu, setCollapseMenu] = useState(true);

  function handleCollapse() {
    setCollapseMenu(!collapseMenu);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid ">
        <div className="logo">LOGO</div>
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
            <li className="nav-item">
              <NavLink className={`nav-link`} to={"/login"}>
                Login
              </NavLink>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
