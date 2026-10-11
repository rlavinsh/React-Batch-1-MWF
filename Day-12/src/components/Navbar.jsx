import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="flex bg-amber-200 p-3 text-3xl font-bold justify-between items-center m-3">
        <h1>Tech Store</h1>
        <div>
          <NavLink className="m-2" to="/">
            Home
          </NavLink>
          {/* <a href=""></a> */}
          <NavLink className="m-2" to="/about">
            About
          </NavLink>
          <NavLink className="m-2" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
