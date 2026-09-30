import React from "react";

const ProductCard = (props) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button
        className="btn"
        onClick={() =>
          props.addToCart({ name: props.name, price: props.price })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
