import React, { useState } from "react";

const Task1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  function handlePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div>
      <label htmlFor="">Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter your Password"
      />
      <br />
      <br />
      <button onClick={handlePassword}>
        {showPassword ? "Hide Password" : "show Password"}
      </button>
    </div>
  );
};

export default Task1;
