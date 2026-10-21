import React from "react";
import { useContext } from "react";
import MyContext from "../context/MyContext";
const Cart = () => {
  const data = useContext(MyContext);

  let total = data.cart.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);

  return (
    <div>
      <h1 className="cart">Cart:{data.cart.length || 0}</h1>
      {data.cart.map((pro, index) => {
        return (
          <div key={index}>
            <div className="product">
              <h3>{pro.name}</h3>
              <h3>{pro.price}</h3>
            </div>
            <hr />
          </div>
        );
      })}

      <h3 className="total">Total:{total}</h3>
      <button className="btn" onClick={data.clearCart}>
        clear Cart
      </button>
    </div>
  );
};

export default Cart;
