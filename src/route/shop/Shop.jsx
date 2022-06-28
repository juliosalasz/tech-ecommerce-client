import {
  ShopContainer,
  CategoryContainer,
  CategoryDisplayContainer,
} from "./shopStyles";

import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";
import ShopCategoryDisplay from "../../components/shopCategoryDisplay/ShopCategoryDisplay";

import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";

const Shop = () => {
  //remember to replace categories with products for the internal components
  const { products } = useContext(ProductContext);
  return (
    <ShopContainer id="CategorySection">
      <CategoryContainer>
        <h2>CATEGORIES</h2>
        <CategoryDisplayContainer>
          <ShopCategoryBar productCategory={products} />
          <ShopCategoryDisplay productCategory={products} />
        </CategoryDisplayContainer>
      </CategoryContainer>
    </ShopContainer>
  );
};

export default Shop;
