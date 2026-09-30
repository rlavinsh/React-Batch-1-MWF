import React from "react";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>My Store</h1>
      <h3>Cart:{props.cart}</h3>
    </div>
  );
};

export default Navbar;
