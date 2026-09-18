import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">My Store</h1>
      <div className="navbar">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Header;
