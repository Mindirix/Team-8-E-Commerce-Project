import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "../context/cart_context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <div className="item">
      <div className="item-img">
        <img src={img} alt={title} />
      </div>
      <div className="item-info">
        <h5>{title}</h5>
        <p>${price}</p>
        <button type="button" className="remove" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div className="amount">
        <button type="button" className="increase" onClick={() => increase(id)}>
          <FaAngleUp />
        </button>
        <p>{amount}</p>
        <button type="button" className="decrease" onClick={() => decrease(id)}>
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
