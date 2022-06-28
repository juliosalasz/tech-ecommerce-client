import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";
import ItemCard from "../../components/itemCard/itemCard";
import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";

import {
  CategoryWrapper,
  CategoryContainer,
  CategoryProductDisplay,
  CategoryDisplay,
} from "./productCategoryStyles.js";

const ProductCategory = () => {
  const params = useParams();
  const { products } = useContext(ProductContext);

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
