import React, { useEffect, useState } from "react";

const App = () => {
  // const [isActive, setIsActive] = useState(true);
  const [coutn1, setCount1] = useState(0);
  const [name, setName] = useState("");
  // mounting phase -> component create hoga
  // updating phase -> yaani kuch na kuch update hota rahega
  // unmounting phase -> component destroy hoga

  // useeffect
  // 1.callback function -> side effects
  //2. cleanup function (optional)
  //3. dependency array

  useEffect(() => {
    fetch(`https://fakestoreapi.noksha.dev/api/users`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>useEffect Hook</h1>
      <h1>count1:{coutn1}</h1>
      <button
        onClick={() => {
          setCount1(coutn1 + 1);
        }}
      >
        Increment
      </button>
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your Name"
      />
      {/* {isActive && <Timer />}
      <button
        onClick={() => {
          setIsActive(false);
        }}
      >
        Hide Timer
      </button> */}
    </div>
  );
};

export default App;
