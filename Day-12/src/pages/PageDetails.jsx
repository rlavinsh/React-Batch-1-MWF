import React from "react";
import products from "../data/Products";
import { useParams } from "react-router-dom";
const PageDetails = () => {
  //   console.log(useParams());

  const data = useParams();
  console.log(data.id);

  const product = products.find((product) => {
    return product.id == data.id;
  });

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <h2>{product.productDescription}</h2>
      <h3>{product.productPrice}</h3>
    </div>
  );
};

export default PageDetails;
