import "./cartItemStyles.css";

const CartItem = ({ cartItem }) => {
  const { name, quantity, feature, image } = cartItem;
  return (
    <div className="cartItemContainer">
      <img
        src={`https://tech-ecommerce-server.herokuapp.com/${image}`}
        alt={name}
      />
      <div className="cartItemDetails">
        <h2>{name.toUpperCase()}</h2>
        <span>Details: {feature}</span>
        <span>Quantity: {quantity}</span>
      </div>
    </div>
  );
};
export default CartItem;
