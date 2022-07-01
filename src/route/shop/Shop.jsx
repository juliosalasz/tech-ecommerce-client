import {
  ShopContainer,
  CategoryContainer,
  CategoryDisplayContainer,
} from "./shopStyles";

import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";
import ShopCategoryDisplay from "../../components/shopCategoryDisplay/ShopCategoryDisplay";

import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";

import { useSelector } from "react-redux/es/exports";
import { selectProduct } from "../../store/products/productsSelector";

import { fetchProductsAsync } from "../../store/products/productsActions";

const Shop = () => {
  //fetch call of all products
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  const products = useSelector(selectProduct);
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
