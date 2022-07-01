import { USER_ACTION_TYPES } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
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
      return state;
  }
};
