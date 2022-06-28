import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./cartIconStyles.css";
const CartIcon = () => {
  const { setCartIsOpen, cartIsOpen, cartCount } = useContext(CartContext);
  const cartToggle = () => {
    setCartIsOpen(!cartIsOpen);
  };
  return (
    <div className="cartIconContainer" onClick={cartToggle}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p>{cartCount}</p>
    </div>
  );
};

export default CartIcon;
