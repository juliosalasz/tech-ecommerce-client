//here create a "setState" as a reducer using dispatch, type and a payload
import createAction from "../../utils/reducer/reducerUtils";
import { USER_ACTION_TYPES } from "./userTypes";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
