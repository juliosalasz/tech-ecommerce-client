import "./App.css";
import { Fragment } from "react";

import { Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "./context/cartContext";
import { UserContext } from "./context/userContext";

import Homepage from "./route/homepage/Homepage";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";
import SignIn from "./route/signIn/SignIn";
import ProductCategory from "./route/productCategory/ProductCategory.jsx";
import ProductPage from "./route/productPage/ProductPage";
import CheckOut from "./route/checkout/checkout";
import CartModal from "./components/cartModal/CartModal";
import Shipping from "./route/shipping/shipping";

function App() {
  const { cartIsOpen } = useContext(CartContext);
  const { currentUser, goingToAdress } = useContext(UserContext);
  return (
    <Fragment>
      {cartIsOpen && <CartModal />}
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductCategory />} />
          <Route path="/shop/:id/:id" element={<ProductPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          {currentUser ? (
            <Route path="/checkout" element={<CheckOut />} />
          ) : null}
          {goingToAdress ? null : (
            <Route path="/shipping" element={<Shipping />} />
          )}
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
