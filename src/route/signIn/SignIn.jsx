import "./signIn.css";
import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import { useState } from "react";

const SignIn = () => {
  const [inOrUp, setInOrUp] = useState(true);
  const inOrUpHandler = () => {
    setInOrUp(!inOrUp);
  };
  return (
    <section id="SignIn" className="signBody">
      <div className="logwrapper">
        <div className="signInWrapper">
          {inOrUp ? (
            <SignInForm onInOrUpHandler={inOrUpHandler} />
          ) : (
            <SignUpForm onInOrUpHandler={inOrUpHandler} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
