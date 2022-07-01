import Axios from "axios";

//function that send the data of google user to the mongo db server
//will check if user exist by the server side
export const createUserFromAuth = async (user) => {
  try {
    await Axios.post(
      "https://tech-ecommerce-server.herokuapp.com/user/postUser",
      {
        name: user.displayName,
        email: user.email,
      }
    );
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    const productServer = await Axios.get(
      "https://tech-ecommerce-server.herokuapp.com/products/getProducts"
    ).then((res) => res.data);

    return productServer;
  } catch (err) {
    console.log(err);
  }
};

export const postOrder = async (user, cartItems, cartTotal, addressState) => {
  try {
    const orderPostObject = {
      userName: user.displayName,
      userEmail: user.email,
      cartItems: cartItems,
      cartTotal: cartTotal,
      deliveryName: addressState.deliveryName,
      deliveryLastName: addressState.deliveryLastName,
      deliveryAddress: addressState.deliveryAddress,
      deliveryPhone: addressState.deliveryPhone,
      deliveryDate: addressState.deliveryDate,
    };
    console.log(orderPostObject);
    await Axios.post(
      "https://tech-ecommerce-server.herokuapp.com/orders/postOrders",
      orderPostObject
    );
  } catch (err) {
    console.log(err);
  }
};
