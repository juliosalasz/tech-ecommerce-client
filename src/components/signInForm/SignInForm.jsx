import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebaseUtil/firebaseUtil";

import { useNavigate } from "react-router-dom";

import { Fragment, useState } from "react";

//redux
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cartSelectors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

import "./signInForm.css";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = (props) => {
  const received = props.received;
  //Cart context to know if coming from checkout
  const cartItems = useSelector(selectCartItems);

  //
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const navigate = useNavigate();

  //reset inputs after submission
  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  //for checking if user comes from chekout
  const isComingfromCheckout = () => {
    if (received === "cartModal" && cartItems) {
      navigate("/checkout");
    } else {
      navigate(-1);
    }
  };

  //For creating user with google
  const logGoogleUser = async () => {
    //extract user from the sign in auth
    await signInWithGooglePopup();
    //send user data to server function
    isComingfromCheckout();
  };

  //for sending the data to the log in a new user
  const handleSubmit = async (event) => {
    event.preventDefault();

    //send user to server
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      //Will reset the form
      resetFormFields();
      isComingfromCheckout();
    } catch (error) {
      //For types of errors
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password For Email");
          break;
        case "auth/user-not-found":
          alert("No user Associated with this email");
          break;
        default:
          console.log("User login encountered an error", error);
      }
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
      <h2>LOG IN</h2>

      <div className="signIn">
        <form onSubmit={handleSubmit} className="signInForm">
          <FormInput
            onIcon={faUser}
            placeholder="Email"
            label="email"
            type="text"
            required
            onChange={changeHandler}
            name="email"
            value={email}
          />
          <FormInput
            onIcon={faLock}
            placeholder="Password"
            label="password"
            type="password"
            required
            onChange={changeHandler}
            name="password"
            value={password}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
      <div className="googleSignIne">
        <Button type="button" buttonType="google" onClick={logGoogleUser}>
          <FontAwesomeIcon icon={faGoogle} /> <p>Sign In with google</p>
        </Button>
      </div>
      <div className="signUpLink">
        Not a member?
        <Button buttonType="signUpLink" onClick={changeSignHandler}>
          Sign Up
        </Button>
      </div>
    </Fragment>
  );
};

export default SignInForm;
