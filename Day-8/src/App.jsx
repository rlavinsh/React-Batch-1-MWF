import React, { useState } from "react";
import Task1 from "./Task1";
const App = () => {
  // console.log(useState("Rahul"));
  // console.log("=============================");

  const [count, setCount] = useState(0);

  // console.log("mera function chal raha hein");

  // console.log(count);

  // let count = 0;

  // hooks -> Special type function -> state manage karne mein -> Functional Components mein -> Easy

  // use -> keyword [useState,useEffect,useRef etc]
  // useState and useEffect -> 90 percent
  //

  // Class based components -> Difficult-> Difficult

  function handleIncrement() {
    // count = count + 1;
    // console.log(count);
    setCount(count + 1);
  }

  function handleDecrement() {
    // count = count - 1;
    // console.log(count);
    setCount(count - 1);
  }
  return (
    <div style={{ margin: "20px" }}>
      {/* <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button> */}
      <Task1 />
    </div>
  );
};

export default App;
