import React from "react";

const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <h1>Hello {props.name}</h1>
      <h2>City: {props.city}</h2>
      <h3>Age: {props.age}</h3>

      {/* <h1>Hello {name}</h1>
      <h3>City: {city}</h3> */}
    </div>
  );
};

export default Card;
