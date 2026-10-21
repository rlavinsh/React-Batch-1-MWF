import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({}) => {
  return (
    <div className="parent">
      <ProductCard name={"IPhone 15"} price={15000} />
      <ProductCard name={"Laptop"} price={55000} />
      <ProductCard name={"HeadPhones"} price={2000} />
    </div>
  );
};

export default ProductList;
