import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHWY_a0nyIQwz_83IZZK24s6JWRv1foI8",
  authDomain: "tech-ecommerce-2f660.firebaseapp.com",
  projectId: "tech-ecommerce-2f660",
  storageBucket: "tech-ecommerce-2f660.appspot.com",
  messagingSenderId: "1059721108561",
  appId: "1:1059721108561:web:dcb505b7627bc7d3936c70",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//provider for customizing the parameters for auth
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//pass auth and provider to the popup sign in
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//For creating user with google sign in
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//for login in with email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  console.log(await signInWithEmailAndPassword(auth, email, password));

  return await signInWithEmailAndPassword(auth, email, password);
};

//for signin out the user
export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
