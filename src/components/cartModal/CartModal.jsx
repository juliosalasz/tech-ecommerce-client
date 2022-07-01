import "./cartModalStyles.css";
import { useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Button from "../button/Button";
import CartItem from "../cartItem/cartItem";

//redux
import { selectCartItems } from "../../store/cart/cartSelectors";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/exports";
import { setIsCartOpen } from "../../store/cart/cartActions";
import { selectCurrentUser } from "../../store/user/userSelector";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelectors";

const CartModal = () => {
  //import user reducer
  const currentUser = useSelector(selectCurrentUser);

  //import cart reducer
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);

  const closeCart = () => {
    dispatch(setIsCartOpen(!isCartOpen));
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
    dispatch(setIsCartOpen(!isCartOpen));
  };
  const transitions = useTransition(isCartOpen, {
    expires: 0,
    from: { opacity: 0, transform: "translateX(40px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(40px)" },
    reverse: isCartOpen,
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
