import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // console.log(product);
    setCart([...cart, product]);

    // setCart(product);
  };
  const clearCart = () => {
    setCart([]);
  };
  // console.log(cart);

  return (
    <div>
      <Navbar cart={cart.length} />
      <ProductList addToCart={addToCart} />
      <Cart product={cart} clearCart={clearCart} />
    </div>
  );
};

export default App;
