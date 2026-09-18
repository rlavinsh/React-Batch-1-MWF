import React from "react";

const Product3 = () => {
  const name = "Sony Headphones";
  const price = 12000;
  const category = "Audio";
  return (
    <div className="card">
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{category}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
};

export default Product3;
