import React from "react";
import Card from "./components/Card";
const App = () => {
  const arr = [10, 20, 30];
  return (
    <div>
      <Card name="Ankit" city="Bhopal" age={25} number={arr} />
      <Card name="Rahul" city="Indore" age={26} number={arr} />
      <Card name="Rohan" city="Gwalior" age={27} number={arr} />
    </div>
  );
};

export default App;
