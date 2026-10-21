import React, { useState } from "react";
import MyContext from "./MyContext";

const DataState = (props) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };
  const clearCart = () => {
    setCart([]);
  };
  // console.log(cart);
  return (
    <MyContext.Provider value={{ addToCart, cart, clearCart }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default DataState;
