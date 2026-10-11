import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  //   console.log(data);
  const { firstName } = location.state.user;

  console.log(firstName);

  return (
    <div>
      <h1>Welcome{" " + firstName}</h1>
    </div>
  );
};

export default Login;
