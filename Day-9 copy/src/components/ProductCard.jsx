import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const ProductCard = (props) => {
  const data = useContext(MyContext);
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <button
        className="btn"
        onClick={() => data.addToCart({ name: props.name, price: props.price })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
