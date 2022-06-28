import { CartContext } from "../../context/cartContext";

import "./checkOutItemStyles.css";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, image, feature } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  //helpers for the buttons
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkoutItemContainer">
      <img
        src={`http://localhost:5000/${image}`}
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
