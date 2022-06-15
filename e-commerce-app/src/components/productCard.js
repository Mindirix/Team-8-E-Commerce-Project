import React from "react";

const ProductCard = ({ name, image, price }) => {
  return (
    <article className="product-container">
      <img className="product-img" src={image} alt={name} />
      <div className="product-info">
        <p>{name}</p>
        <p>${price}</p>
      </div>
    </article>
  );
};

export default ProductCard;
