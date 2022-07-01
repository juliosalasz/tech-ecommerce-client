import "./checkOutItemStyles.css";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { selectCartItems } from "../../store/cart/cartSelectors";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cartActions";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { name, price, quantity, image, feature } = cartItem;
  const cartItems = useSelector(selectCartItems);

  //helpers for the buttons
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkoutItemContainer">
      <img
        src={`https://tech-ecommerce-server.herokuapp.com/${image}`}
        alt={name}
        className="imageContainerCheckout"
      />
      <div className="checkOutDescription">
        <span className="nameItem">{name}</span>
        <span className="featuresItem">{`Details: ${feature}`}</span>
      </div>
      <div className="quantityItem">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="quantityNumber">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </div>

      <span className="priceItem">{price}</span>

      <div className="removeButtonItem" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
