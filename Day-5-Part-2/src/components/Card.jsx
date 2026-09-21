import React from "react";

const Card = ({
  name = "user",
  price = "Not provided",
  category = 0,
  brand = "Not Provided",
}) => {
  return (
    <div className="card">
      <h1>{name}</h1>
      <h3>Price: {price}</h3>
      <h4>category: {category}</h4>
      <h4>brand: {brand}</h4>
    </div>
  );
};

export default Card;
