import React from "react";

const Cart = ({ product, clearCart }) => {
  console.log(product);

  let total = product.reduce((acc, curr) => {
    return (acc += curr.price);
  }, 0);

  return (
    <div>
      <h1 className="cart">Cart:{product.length || 0}</h1>
      {product.map((pro, index) => {
        return (
          <>
            <div className="product" key={index}>
              <h3>{pro.name}</h3>
              <h3>{pro.price}</h3>
            </div>
            <hr />
          </>
        );
      })}

      <h3 className="total">Total:{total}</h3>
      <button className="btn" onClick={clearCart}>
        clear Cart
      </button>
    </div>
  );
};

export default Cart;
