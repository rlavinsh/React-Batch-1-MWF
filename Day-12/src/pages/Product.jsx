import React from "react";
import products from "../data/Products";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="parent">
      {products.map((product) => {
        return (
          <div className="card" key={product.id}>
            <h2>ProductName:{product.productName}</h2>
            <h2>ProductDesc:{product.productDescription}</h2>
            <h3>ProductPrice:{product.productPrice}</h3>
            <Link to={`/products/${product.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
