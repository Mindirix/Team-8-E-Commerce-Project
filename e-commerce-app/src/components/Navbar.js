import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapseMenu, setCollapseMenu] = useState(true);
  const [isActive, setIsActive] = useState(false);

  function handleCollapse() {
    setCollapseMenu(!collapseMenu);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
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
              <Link className={`nav-link ${isActive && "active"}`} to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive && "active"}`}
                to={"/about"}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive && "active"}`} to={"/menu"}>
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive && "active"}`}
                to={"/contactus"}
              >
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive && "active"}`}
                to={"/login"}
              >
                Login
              </Link>
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
