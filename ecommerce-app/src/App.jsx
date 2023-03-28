import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./scenes/home/Home";
import { ItemDetails } from "./scenes/itemDetails/ItemDetails";
import { Checkout } from "./scenes/checkout/Checkout";
import { Confirmation } from "./scenes/checkout/Confirmation";
import { Navbar } from "./scenes/global/Navbar";
import { CartMenu } from "./scenes/global/CartMenu";

// ScrollToTop function allows you to start at the top of the page when you go to a new page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item/:itemId" element={<ItemDetails />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="checkout/success" element={<Confirmation />}></Route>
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
