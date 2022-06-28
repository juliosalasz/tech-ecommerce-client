import Axios from "axios";

//function that send the data of google user to the mongo db server
//will check if user exist by the server side
export const createUserFromAuth = async (user) => {
  try {
    await Axios.post("http://localhost:5000/user/postUser", {
      name: user.displayName,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = async () => {
  try {
    const productServer = await Axios.get(
      "http://localhost:5000/products/getProducts"
    ).then((res) => res.data);

    return productServer;
  } catch (err) {
    console.log(err);
  }
};
