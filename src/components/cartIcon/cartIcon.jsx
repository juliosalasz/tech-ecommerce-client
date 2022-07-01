import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelectors";
import { setIsCartOpen } from "../../store/cart/cartActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./cartIconStyles.css";
const CartIcon = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartToggle = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <div className="cartIconContainer" onClick={cartToggle}>
      <FontAwesomeIcon icon={faShoppingCart} />
      <p>{cartCount}</p>
    </div>
  );
};

export default CartIcon;
