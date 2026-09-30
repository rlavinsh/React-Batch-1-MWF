import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ addToCart }) => {
  return (
    <div className="parent">
      <ProductCard name={"IPhone 15"} price={15000} addToCart={addToCart} />
      <ProductCard name={"Laptop"} price={55000} addToCart={addToCart} />
      <ProductCard name={"HeadPhones"} price={2000} addToCart={addToCart} />
    </div>
  );
};

export default ProductList;
