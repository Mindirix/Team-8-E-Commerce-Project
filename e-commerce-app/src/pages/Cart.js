import React from "react";
import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context/cart_context";

const Cart = () => {
  const { cart, total } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <section className="section-center">
        <h1 className="cart-header">your bag</h1>
        <article className="cart-container">
          <h4>Your bag is currently empty</h4>
        </article>
      </section>
    );
  }

  return (
    <section className="section-center">
      <h1 className="cart-header">your bag</h1>
      <article className="cart-container">
        {cart.map((product) => {
          return <CartItem key={product.id} {...product} />;
        })}
      </article>
      <div className="total">
        <p className="text">Total</p>
        <p className="price">${total}</p>
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-outline-success checkout" type="button">
          CHECKOUT
        </button>
      </div>
    </section>
  );
};

export default Cart;
