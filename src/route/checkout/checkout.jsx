import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import CheckoutItem from "../../components/checkOutItem/checkOutItem";
import "./checkoutStyles.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCartItems,
  selectCartTotal,
  selectCartCount,
} from "../../store/cart/cartSelectors";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  // useEffect(() => {
  //   setGoingToAdress(true);
  // }, [setGoingToAdress]);

  //we can put a state here that opens up the shipping adress.
  const navigate = useNavigate();
  const shippingLinkHandler = () => {
    navigate("/checkout/shipping");
  };

  return (
    <section className="checkOutContainer">
      <h2>CHECKOUT</h2>
      <div className="parent">
        <div className="products">
          <span>Products</span>
        </div>
        <div className="description">
          <span>Description</span>
        </div>
        <div className="quantity">
          <span>Quantity</span>
        </div>
        <div className="price">
          <span>Price</span>
        </div>
        <div className="remove">
          <span>Remove</span>
        </div>
      </div>
      <div className="cartItems1">
        {cartCount === 0 ? (
          <p>No Cart Items yet</p>
        ) : (
          cartItems.map((item) => {
            return <CheckoutItem key={item.id} cartItem={item} />;
          })
        )}
      </div>

      <span className="totalCheckout">
        TOTAL: ${Math.round(cartTotal * 100) / 100}
      </span>
      <Button onClick={shippingLinkHandler}>Continue To Payment</Button>
    </section>
  );
};

export default CheckOut;
