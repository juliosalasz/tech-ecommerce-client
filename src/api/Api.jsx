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
//change

// const object = {
//   userName: "Julio Salas",
//   userEmail: "jscomic@gmail.com",
//   cartItems: [
//     {
//       id: "761",
//       name: 'Laptop HP 15-ef1009la 15.6" AMD Ryzen 3 4300U QC SSD 4GB RAM',
//       feature: "256 GB",
//       price: 459.9,
//       image: "images/1656275743406.png",
//       quantity: 1,
//     },
//   ],
//   cartTotal: 459.9,
// };
