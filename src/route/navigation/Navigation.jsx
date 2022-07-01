import { useState, useEffect, Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

//to get the store from redux
import { useSelector } from "react-redux/es/exports";
import { selectCurrentUser } from "../../store/user/userSelector";

import { SignOutUser } from "../../utils/firebaseUtil/firebaseUtil";
import CartIcon from "../../components/cartIcon/cartIcon";

import "./navigationStyle.css";

const Navigation = () => {
  //Current user from redux
  const currentUser = useSelector(selectCurrentUser);

  //sign out function
  const signOutHandler = async () => {
    //run sign out from firebase utils
    await SignOutUser();
  };

  //Responsive Hamburger
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const hamburgerBtnHandler = () => {
    setHamburgerActive(!hamburgerActive);
  };

  //Router Background color
  const [navBg, setNavBg] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  }, [location]);

  const navClass = navBg ? "navContainerHome" : "navContainerInterior";

  //Background color for scrolling
  const [navScroll, setNavScroll] = useState(false);
  const colorHandler = () => {
    if (window.scrollY >= 700) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", colorHandler);

  const navScrollClass = navScroll ? "backgroundWhite" : " ";

  return (
    <Fragment>
      <nav className="navBar">
        <div className={`navContainer ${navClass} ${navScrollClass}`}>
          <h1>TECHItOut</h1>
          <div className="menu">
            <ul className="menuList">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                {currentUser ? (
                  <span className="spanMenu" onClick={signOutHandler}>
                    Sign Out
                  </span>
                ) : (
                  <Link to="/sign-in">Sign In</Link>
                )}
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </div>
          <button
            className={`hamburger ${hamburgerActive ? "isActive" : null}`}
            onClick={hamburgerBtnHandler}
          >
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            {currentUser ? (
              <span onClick={signOutHandler}> Sign Out</span>
            ) : (
              <Link to="/sign-in">Sign In</Link>
            )}
          </button>
        </div>
      </nav>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
