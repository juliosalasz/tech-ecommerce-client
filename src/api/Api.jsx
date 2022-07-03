import Axios from "axios";

//need a function to get the data and get the name by searching for the email

export const getUsers = async (userEmail) => {
  try {
    const { data } = await Axios.get(
      "https://tech-ecommerce-server.herokuapp.com/user/getUser",
      {}
    );
    //datafilter should give me the name from the account
    const dataFilter = data.find(({ email }) => email === userEmail);
    return dataFilter;
  } catch (error) {
    console.log(error, "error from getUsers");
  }
};

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
    //here it should probably return something
    const userAuth = {
      email: user.email,
      name: user.displayName,
    };
    return userAuth;
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
