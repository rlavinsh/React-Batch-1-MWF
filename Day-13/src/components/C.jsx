import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const C = () => {
  const data = useContext(MyContext);
  console.log(data);

  return (
    <div>
      <h1>
        Username: {data.name} | Age: {data.age}
      </h1>
      <h1>Count:{data.count}</h1>
      <button
        onClick={() => {
          data.setCount(data.count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default C;
