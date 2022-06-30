import "./signIn.css";
import SignInForm from "../../components/signInForm/SignInForm";
import SignUpForm from "../../components/signUpForm/SignUpForm";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const SignIn = () => {
  const [inOrUp, setInOrUp] = useState(true);
  const inOrUpHandler = () => {
    setInOrUp(!inOrUp);
  };

  //cartModal string pass it to both components
  const received = useLocation().state;
  return (
    <section id="SignIn" className="signBody">
      <div className="logwrapper">
        <div className="signInWrapper">
          {inOrUp ? (
            <SignInForm received={received} onInOrUpHandler={inOrUpHandler} />
          ) : (
            <SignUpForm received={received} onInOrUpHandler={inOrUpHandler} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SignIn;
