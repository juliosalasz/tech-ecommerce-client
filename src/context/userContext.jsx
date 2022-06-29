import { createContext, useReducer, useEffect } from "react";
import { createUserFromAuth } from "../api/Api";
import createAction from "../utils/reducer/reducerUtils";

import { onAuthStateChangedListener } from "../utils/firebaseUtil/firebaseUtil";

//This will be the context that all components must use to use the stata given through the provider
export const UserContext = createContext({
  //setState will be delivered as an empty function
  setCurrentUser: () => null,
  //State will start as null
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;
  //swith is a filter for types
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      //this return the whole state with the currentUser modified
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

//Provider for index.js
export const UserProvider = ({ children }) => {
  //here we useReducer to pass the userReduce and a Initial value, we get the state and a dispatch
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  //here create a "setState" as a reducer using dispatch, type and a payload
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  //here the value is sent to the provider
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      //here the new "state" reducer is used
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  //Here we pass value with both states
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
