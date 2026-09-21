import React from "react";
import Card from "./components/Card";
import userData from "../product.json";
const App = () => {
  // Parent -> child
  const arr = [10, 20, 30];
  const user = {
    firstName: "Lavinsh",
    age: 25,
  };
  // console.log(userData[0].id);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {userData.map((product, index) => {
        return (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            brand={product.brand}
          />
        );
      })}
      {/* <Card name="Ankit" city="Bhopal" age={25} number={arr} data={user} />
      <Card name="Rahul" city="Indore" age={26} number={arr} />
      <Card name="Rohan" city="Gwalior" age={27} number={arr} />
      <Card name="Ritik" /> */}
    </div>
  );
};

export default App;
