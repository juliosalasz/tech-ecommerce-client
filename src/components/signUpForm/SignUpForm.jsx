import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { createUserFromAuth } from "../../api/Api";
import Button from "../button/Button";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebaseUtil/firebaseUtil";
import FormInput from "../formInput/FormInput";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./signUpFormStyles.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = (props) => {
  //for the redirect
  const received = props.received;
  const navigate = useNavigate();

  const { cartItems } = useContext(CartContext);

  //for the form
  const [formField, setFormField] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formField;

  //reset inputs after submission
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  //this handler send the data to the server to create a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    //password must be check if equal to confirm password
    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }
    //send user to server
    try {
      await createAuthUserWithEmailAndPassword(email, password);
      const userObject = {
        displayName,
        email,
      };
      //   await createUserFromAuth(user);
      await createUserFromAuth(userObject);

      //setCurrent user to state
      resetFormFields();

      //redirect
      if (received === "cartModal" && cartItems) {
        navigate("/checkout");
      } else {
        navigate(-1);
      }
    } catch (error) {
      console.log("user creation encountered an error", error);
    }
  };

  //set the form input info into the state
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const changeSignHandler = () => {
    props.onInOrUpHandler();
  };

  return (
    <Fragment>
      <div className="signUp">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit} className="signUpForm">
          <FormInput
            onIcon={faUser}
            placeholder="Name"
            label="Name & LastName"
            type="text"
            required
            name="displayName"
            onChange={changeHandler}
            value={displayName}
          />
          <FormInput
            placeholder="Email"
            onIcon={faEnvelope}
            label="Email"
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={email}
          />
          <FormInput
            placeholder="Password"
            onIcon={faLock}
            label="Password"
            type="password"
            required
            name="password"
            onChange={changeHandler}
            value={password}
          />
          <FormInput
            placeholder="Confirm Password"
            onIcon={faLock}
            label="Confirm Password"
            type="password"
            required
            name="confirmPassword"
            onChange={changeHandler}
            value={confirmPassword}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>

      <div className="signUpLink">
        Already a member?
        <button className="btnChange" onClick={changeSignHandler}>
          Log In
        </button>
      </div>
    </Fragment>
  );
};

export default SignUpForm;
