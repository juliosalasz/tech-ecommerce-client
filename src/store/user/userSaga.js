import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "./userTypes";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutFailed,
} from "./userAction";

import {
  getCurrentUser,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  SignOutUser,
} from "../../utils/firebaseUtil/firebaseUtil";

import { createUserFromAuth, getUsers } from "../../api/Api";

//here user must always have a name and an email
export function* getdataFromUserAuth(user) {
  try {
    const userData = yield call(createUserFromAuth, user);
    //user data must be returned so the data is stored into the reducer
    yield put(signInSuccess({ ...userData }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//this runs when signing in with google
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getdataFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// this will use the email sign in. It won have a name
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    //here we get the name from the DB
    const name = yield call(getUsers, user.email);

    //send it to check if user exists in the db
    const userData = {
      displayName: name.name,
      email: user.email,
    };
    yield call(getdataFromUserAuth, userData);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

//This fetches the user already loggedIn in auth
export function* isUserAuthenticated() {
  try {
    //user gives me the user email and name from the google sign in
    const user = yield call(getCurrentUser);

    const name = yield call(getUsers, user.email);

    //send to create user in db
    const createdUser = {
      displayName: name.name,
      email: user.email,
    };
    if (!user) return;
    yield call(getdataFromUserAuth, createdUser);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    const userCreated = {
      displayName: displayName,
      email: user.email,
    };

    yield put(signUpSuccess(userCreated));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOut() {
  try {
    yield call(SignOutUser);
    yield put(signInSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signInAfterSignUp({ payload }) {
  yield call(getdataFromUserAuth, payload);
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignupSucess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignupSucess),
    call(onSignOutStart),
  ]);
}
