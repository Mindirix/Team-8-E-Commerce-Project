import React, { useState, useEffect } from "react";
import axios from "axios";
import { products_url } from "../utils/constants";
import Loading from "./Loading";
import ProductCard from "../components/productCard";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await axios(products_url);
      const data = await response.data;
      console.log(data);
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="products-header">
        <p>{products.length} products was found</p>
        <hr />
        <select>
          <option value="lowest-price">Lowest (Price)</option>
          <option value="highest-price">Highest Price</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </div>
      <section className="Products-container">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};

export default Products;
