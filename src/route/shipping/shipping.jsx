import { CartContext } from "../../context/cartContext";
import { useEffect, useContext, useState } from "react";
import Button from "../../components/button/Button";

import "./shippingStyles.css";

const Shipping = () => {
  const { setGoingToAdress } = useContext(CartContext);
  useEffect(() => {
    setGoingToAdress(false);
  }, [setGoingToAdress]);

  //after move this state to cart context
  const [setAddress] = useState({
    deliveryName: "",
    deliveryLastName: "",
    deliveryAddress: "",
    deliveryPhone: "",
  });

  const onTextChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="shippingContainer">
      <div className="shippingWrapper">
        <h1>SHIPPING</h1>
        <div className="shippingAddress">
          <form className="formAddress">
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
