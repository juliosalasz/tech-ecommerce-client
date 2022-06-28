import { useEffect } from "react";
import { createContext, useState } from "react";
import { getUsers } from "../api/Api";

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const productMap = await getUsers();
      setProducts(productMap);

      console.log(productMap);
    };
    loadProducts();
  }, []);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
