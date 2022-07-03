import { USER_ACTION_TYPES } from "./userTypes";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  //swith is a filter for types
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCESS:
      //this return the whole state with the currentUser modified
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_IN_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
