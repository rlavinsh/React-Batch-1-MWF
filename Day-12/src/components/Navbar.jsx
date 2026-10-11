import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const user = {
    firstName: "Ankit",
  };
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
          <button
            className="p-2 bg-gray-600 text-white rounded-xl"
            onClick={() => {
              navigate("/login", { state: { user } });
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
