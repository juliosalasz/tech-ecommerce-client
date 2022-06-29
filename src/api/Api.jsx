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

export const getUsers = async () => {
  try {
    const productServer = await Axios.get(
      "https://tech-ecommerce-server.herokuapp.com/products/getProducts"
    ).then((res) => res.data);

    return productServer;
  } catch (err) {
    console.log(err);
  }
};

export const postOrder = async (user, cartItems, cartTotal, order) => {
  try {
    await Axios.post(
      "https://tech-ecommerce-server.herokuapp.com/orders/postOrders",
      {
        userName: user.displayName,
        userEmail: user.email,
        cartItems: cartItems,
        cartTotal: cartTotal,
        deliveryName: order.deliveryName,
        deliveryLastName: order.deliveryLastName,
        deliveryAddress: order.deliveryAddress,
        deliveryPhone: order.deliveryPhone,
        orderDate: order.orderDate,
      }
    );
  } catch (err) {
    console.log(err);
  }
};
