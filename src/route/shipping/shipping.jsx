import { selectCurrentUser } from "../../store/user/userSelector";
import { useState } from "react";
import Button from "../../components/button/Button";
import { postOrder } from "../../api/Api";
import PaymentForm from "../../components/paymentForm/paymentForm";
//redux
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cartSelectors";
import { useSelector } from "react-redux/es/exports";

import "./shippingStyles.css";

const Shipping = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const currentUser = useSelector(selectCurrentUser);

  //after move this state to cart context
  const [addressState, setAddressState] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
    deliveryDate: "",
  });

  //to get the value of all inputs
  const onTextChange = (event) => {
    const { name, value } = event.target;
    const textState = (prevState) => ({
      ...prevState,
      [name]: value,
      deliveryDate: new Date().toDateString(),
    });
    const stateStep = textState(addressState);
    setAddressState(stateStep);
  };

  //need a on submit handler

  const submitAddressHandler = async (event) => {
    event.preventDefault();
    try {
      //here the order is sent to the api
      await postOrder(currentUser, cartItems, cartTotal, addressState);
      alert("Order has been submitted");
    } catch (err) {
      console.log(err);
    }
    //now here we must set the address state to the cart context
  };

  return (
    <div className="shippingContainer">
      <div className="shippingWrapper">
        <h1>SHIPPING</h1>
        <div className="shippingAddress">
          <form className="formAddress" onSubmit={submitAddressHandler}>
            <h2>DELIVERY ADDRESS</h2>
            <input
              type="text"
              name="deliveryName"
              placeholder="First Name"
              autoComplete="{false}"
              onChange={onTextChange}
            />
            <input
              type="text"
              name="deliveryLastName"
              placeholder="Last Name"
              autoComplete="{false}"
              onChange={onTextChange}
            />
            <input
              type="text"
              name="deliveryAddress"
              placeholder="Address"
              autoComplete="{false}"
              onChange={onTextChange}
            />
            <input
              type="text"
              name="deliveryPhone"
              placeholder="Your Phone"
              autoComplete="{false}"
              onChange={onTextChange}
            />
            <Button>Place Order</Button>
            <PaymentForm />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
