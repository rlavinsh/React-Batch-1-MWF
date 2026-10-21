import React, { useState } from "react";
import MyContext from "./MyContext";
const DataState = ({ children }) => {
  //yaha data ready karo
  const name = "Ankit";
  const age = 25;
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ name, age, count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

export default DataState;
