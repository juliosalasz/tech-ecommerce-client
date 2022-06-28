import { useEffect } from "react";
import { createContext, useState } from "react";
import { createUserFromAuth } from "../api/Api";

import { onAuthStateChangedListener } from "../utils/firebaseUtil/firebaseUtil";

//This will be the context that all components must use to use the stata given through the provider
export const UserContext = createContext({
  //setState will be delivered as an empty function
  setCurrentUser: () => null,
  //State will start as null
  currentUser: null,
});

//Provider for index.js
export const UserProvider = ({ children }) => {
  //passing both state pieces inside value and then provide to the website
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  //Here we pass value with both states
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
