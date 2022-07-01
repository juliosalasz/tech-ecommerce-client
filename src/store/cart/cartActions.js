import { CART_ACTION_TYPES } from "./cartTypes";
import createAction from "../../utils/reducer/reducerUtils";

//will take current cart Items and the new product and check if already exsists
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains product To add, returns true if theres a match
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToAdd.id
  );

  //if for adding 1 quantity if theresa match
  if (existingCartItem) {
    //check all items
    return cartItems.map((cartItem) =>
      //if the id migth be a match
      cartItem.id === productToAdd.id
        ? //if it is add +1 to quantity
          { ...cartItem, quantity: cartItem.quantity + 1 }
        : //if not just return the item
          cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  //find cart item to be removed
  const existingCartItem = cartItems.find(
    (cartItems) => cartItems.id === productToRemove.id
  );

  //check if quantity is one, then remove
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    //if the id migth be a match
    cartItem.id === productToRemove.id
      ? //if it is add +1 to quantity
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : //if not just return the item
        cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const setIsCartOpen = (boolen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolen);

export const addItemToCart = (cartItems, productToAdd) => {
  //will add the cartItem from helper funcion to the cart state
  //addCart Item returns a whole object with both cart Items and producto to Add mixed in
  const newCartItems = addCartItem(cartItems, productToAdd);
  //this will sent the addcart Item object to be dispatched
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearCartItem(cartItems, productToClear);
  return createAction(CART_ACTION_TYPES, newCartItems);
};
