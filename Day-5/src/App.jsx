import React from "react";
import Header from "./components/Header";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <div className="parent">
        <Product1 />
        <Product2 />
        <Product3 />
      </div>
      <Footer />
    </div>
  );
};

export default App;
