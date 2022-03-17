import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllProducts from "./components/AllProducts/AllProducts";
import Menubar from "./components/Menubar/Menubar";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  console.log(cartCount);
  return (
    <div className="App">
      <Menubar cartCount={cartCount}></Menubar>
      <AllProducts addToCart={addToCart}></AllProducts>
    </div>
  );
}

export default App;
