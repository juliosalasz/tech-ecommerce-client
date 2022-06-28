import { useEffect } from "react";
import { createContext, useState } from "react";

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
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [comingFromCheckout, setComingFromCheckout] = useState(false);
  const [goingToAdress, setGoingToAdress] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  //for counting and reducing items items
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  //use effect for total price
  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItems) => total + cartItems.quantity * cartItems.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    //will add the cartItem from helper funcion to the cart state
    setCartItem(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItem(removeCartItem(cartItems, productToRemove));
  };
  const clearItemFromCart = (productToClear) => {
    setCartItem(clearCartItem(cartItems, productToClear));
  };

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
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
