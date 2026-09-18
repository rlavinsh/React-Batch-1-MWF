import React from "react";

const Product2 = () => {
  const name = "Macbook Air";
  const price = 85000;
  const category = "Laptop";
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{category}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default Product2;
