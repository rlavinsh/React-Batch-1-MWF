import React from "react";

const Product1 = () => {
  const name = "Iphone 15";
  const price = 65000;
  const category = "Mobile";
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{category}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default Product1;
