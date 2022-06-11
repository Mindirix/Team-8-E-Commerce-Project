import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";

const CartButtons = () => {
  return (
    <CartButton>
      <div className="cart-button">
        <Link to="/cart" className="cart-logo">
          <span className="cart-icon">
            <FaShoppingCart />
          </span>
        </Link>
      </div>
      {/* <div className="value">7</div> */}
    </CartButton>
  );
};

const CartButton = styled.div`
  .cart-icon {
    color: white;
  }

  ${
    "" /* .cart-button {
    position: relative;
  } */
  }

  ${
    "" /* .value {
    color: white;
    position: absolute;
    background-color: red;
    width: 20px;
    border-radius: 50%;
    top: 5px;
    display: none;
  } */
  }

  @media (min-width: 992px) {
    .value {
      display: block;
    }
  }
`;

export default CartButtons;
