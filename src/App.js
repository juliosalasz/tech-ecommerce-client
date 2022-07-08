import "./App.css";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

//Imports for Redux
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
//page components
import Homepage from "./route/homepage/Homepage";
import Navigation from "./route/navigation/Navigation";
import Shop from "./route/shop/Shop";
import SignIn from "./route/signIn/SignIn";
import ProductCategory from "./route/productCategory/ProductCategory.jsx";
import ProductPage from "./route/productPage/ProductPage";
import CheckOut from "./route/checkout/checkout";
import CartModal from "./components/cartModal/CartModal";
import Shipping from "./route/shipping/shipping";

//store from redux
import { useSelector } from "react-redux/es/exports";
import { selectCurrentUser } from "./store/user/userSelector";
import { selectIsCartOpen } from "./store/cart/cartSelectors";
import { selectCartItems } from "./store/cart/cartSelectors";

// sets from redux
import { checkUserSession } from "./store/user/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // getCurrentUser().then((user) => console.log(user));
    dispatch(checkUserSession());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  return (
    <Fragment>
      {isCartOpen ? <CartModal /> : null}
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
          {currentUser && cartItems ? (
            <Route path="/checkout/shipping" element={<Shipping />} />
          ) : null}
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

//test change
