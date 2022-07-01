import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";
import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";

import { useSelector } from "react-redux/es/exports";
import { selectProduct } from "../../store/products/productsSelector";

import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";

import { getProducts } from "../../api/Api";
import { setProduct } from "../../store/products/productsActions";

import {
  CategoryWrapper,
  CategoryContainer,
  CategoryProductDisplay,
  CategoryDisplay,
} from "./productCategoryStyles.js";

const ProductCategory = () => {
  const params = useParams();
  //Use Effect here
  const dispatch = useDispatch();
  useEffect(() => {
    const loadProducts = async () => {
      const productMap = await getProducts();
      dispatch(setProduct(productMap));
    };
    loadProducts();
  }, [dispatch]);

  const products = useSelector(selectProduct);

  const paramFilter = products.filter(
    (category) => category.Category === params.id
  );

  const [id] = paramFilter;

  return (
    <CategoryWrapper id="productCategory">
      <CategoryDisplay>
        <ShopCategoryBar productCategory={products} />
        <CategoryContainer>
          <h1>{params.id}</h1>
          <CategoryProductDisplay>
            {id.PRODUCTS.map((product) => {
              return <ItemCard key={product.id} product={product} />;
            })}
          </CategoryProductDisplay>
        </CategoryContainer>
      </CategoryDisplay>
    </CategoryWrapper>
  );
};

export default ProductCategory;
