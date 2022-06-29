import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/userContext";
import { useEffect, useContext, useState } from "react";
import Button from "../../components/button/Button";
import { postOrder } from "../../api/Api";

import "./shippingStyles.css";

const Shipping = () => {
  const { setGoingToAdress, setAddress, address, cartItems, cartTotal } =
    useContext(CartContext);

  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    setGoingToAdress(false);
  }, []);

  //after move this state to cart context
  const [addressState, setAddressState] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
  });

  //to get the value of all inputs
  const onTextChange = (event) => {
    const { name, value } = event.target;
    const textState = (prevState) => ({
      ...prevState,
      [name]: value,
    });
    setAddressState(textState(addressState));
  };

  //need a on submit handler

  const submitAddressHandler = async (event) => {
    event.preventDefault();
    try {
      setAddress(addressState);
      console.log(cartItems);
      //here we are missing the user and the cart Items,  then set object in the api object
      await postOrder(currentUser, cartItems, cartTotal, address);
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
