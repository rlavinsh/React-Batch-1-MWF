import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const Navbar = () => {
  const data = useContext(MyContext);
  return (
    <div className="navbar">
      <h1>My Store</h1>
      <h3>Cart:{data.cart.length}</h3>
    </div>
  );
};

export default Navbar;
