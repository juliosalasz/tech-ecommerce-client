import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/button/Button";
import CheckoutItem from "../../components/checkOutItem/checkOutItem";
import "./checkoutStyles.css";

const CheckOut = () => {
  const {
    cartItems,
    cartCount,
    setComingFromCheckout,
    cartTotal,
    setGoingToAdress,
  } = useContext(CartContext);
  setComingFromCheckout(false);
  setGoingToAdress(true);

  //we can put a state here that opens up the shipping adress. State must be in cartcontext

  //place if route on app.js (Done)
  //place button below total to send me in ()
  //we can set it off in the shipping
  const navigate = useNavigate();
  const shippingLinkHandler = () => {
    navigate("/shipping");
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
