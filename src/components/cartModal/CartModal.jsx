import "./cartModalStyles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useTransition, animated } from "react-spring";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";
import Button from "../button/Button";
import CartItem from "../cartItem/cartItem";

const CartModal = () => {
  //import userContext
  const { currentUser } = useContext(UserContext);

  //import cart context
  const { cartIsOpen, setCartIsOpen, cartItems, cartCount } =
    useContext(CartContext);
  const closeCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  const navigate = useNavigate();

  const GoToCheckout = () => {
    //if user is sign on then take me to check out else sign in
    if (currentUser) {
      navigate("/checkout");
    } else {
      //pass string to identify that is coming from the cart modal
      navigate("/sign-in", { state: "cartModal" });
    }
    //and close the modal
    setCartIsOpen(!cartIsOpen);
  };
  const transitions = useTransition(cartIsOpen, {
    expires: 0,
    from: { opacity: 0, transform: "translateX(40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(40px)" },
    reverse: cartIsOpen,
    delay: 200,
  });
  return (
    <div className="cartModalWrapper">
      <div className="cartBackDrop" onClick={closeCart}></div>
      {transitions((props, item) => {
        return (
          item && (
            <animated.div style={props} className="cartModalContainer">
              <div className="cartTitle">
                <h1>MY CART</h1>
              </div>
              <ul className="cartItems">
                {cartCount === 0 ? (
                  <li>
                    <p>No Cart Items yet</p>
                  </li>
                ) : (
                  cartItems.map((item) => (
                    <li key={item.id}>
                      <CartItem cartItem={item} />
                    </li>
                  ))
                )}
              </ul>
              <div className="cartBtn">
                {cartCount === 0 ? (
                  <Button buttonType="disabledCart">Go to Checkout</Button>
                ) : (
                  <Button buttonType="cartDisplay" onClick={GoToCheckout}>
                    Go to Checkout
                  </Button>
                )}

                <Button buttonType="cartDisplay" onClick={closeCart}>
                  Close Cart
                </Button>
              </div>
            </animated.div>
          )
        );
      })}
    </div>
  );
};

export default CartModal;
