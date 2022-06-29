import { createContext, useReducer } from "react";

import createAction from "../utils/reducer/reducerUtils";

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

export const CartContext = createContext({
  //for opening the modal
  setCartIsOpen: () => {},
  cartIsOpen: false,
  //for adding new items
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  //for counting Cart
  cartCount: 0,
  setComingFromCheckout: () => {},
  comingFromCheckout: false,
  setGoingToAdress: () => {},
  goingToAdress: false,
  cartTotal: 0,
  setAddress: () => {},
  address: [],
});

const INITIAL_STATE = {
  cartIsOpen: false,
  cartItems: [],
  cartCount: 0,
  comingFromCheckout: false,
  goingToAdress: false,
  cartTotal: 0,
  address: [],
};

export const USER_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_IS_COMING_FROM_CHECKOUT: "SET_IS_COMING_FROM_CHECKOUT",
  SET_GOING_TO_ADRESS: "SET_GOING_TO_ADRESS",
  SET_ADDRESS: "SET_ADDRESS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case USER_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        cartIsOpen: payload,
      };
    case USER_ACTION_TYPES.SET_IS_COMING_FROM_CHECKOUT:
      return {
        ...state,
        comingFromCheckout: payload,
      };
    case USER_ACTION_TYPES.SET_GOING_TO_ADRESS:
      return {
        ...state,
        goingToAdress: payload,
      };
    case USER_ACTION_TYPES.SET_ADDRESS:
      return {
        ...state,
        address: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [
    {
      cartItems,
      cartIsOpen,
      cartCount,
      cartTotal,
      comingFromCheckout,
      goingToAdress,
      address,
    },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const setCartIsOpen = (bool) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  };
  const setComingFromCheckout = (bool) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_IS_COMING_FROM_CHECKOUT, bool));
  };
  const setGoingToAdress = (bool) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_GOING_TO_ADRESS, bool));
  };
  const setAddress = (newAdress) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_ADDRESS, newAdress));
  };

  const updateCartItemsReducer = (newCartItems) => {
    //we get cart items and sent it directly to payload
    //we create the cart count
    const newCartCount = newCartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    //we create the new cart total
    const newCartTotal = newCartItems.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,
      0
    );
    //payload will be the three values going in destructured
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    //will add the cartItem from helper funcion to the cart state
    //addCart Item returns a whole object with both cart Items and producto to Add mixed in
    const newCartItems = addCartItem(cartItems, productToAdd);
    //this will sent the addcart Item object to be dispatched
    updateCartItemsReducer(newCartItems);
  };
  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
  };

  //value is all context options going into the client
  const value = {
    cartIsOpen,
    setCartIsOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    comingFromCheckout,
    setComingFromCheckout,
    goingToAdress,
    setGoingToAdress,
    cartTotal,
    setAddress,
    address,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
