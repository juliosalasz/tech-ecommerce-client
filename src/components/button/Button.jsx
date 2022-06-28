import "./buttonStyles.css";

//types for choosing with button you want
const BUTTON_TYPE_CLASSES = {
  google: "googlebtn",
  signUpLink: "btnChange",
  cartButton: "cartButton",
  cartDisplay: "cartDisplay",
  disabled: "disabled",
  disabledCart: "disabledCart",
};

//function will use buttonType as the data for choosing with type of button you want
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Button;
