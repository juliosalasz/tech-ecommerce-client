import { useParams } from "react-router-dom";
import ItemCard from "../../components/itemCard/itemCard";
import ShopCategoryBar from "../../components/shopCategoryBar/ShopCategoryBar";
import Spinner from "../../components/spinner/spinner";

import { useSelector } from "react-redux/es/exports";
import { selectProduct } from "../../store/products/productsSelector";

import { selectProductsIsLoading } from "../../store/products/productsSelector";

import {
  CategoryWrapper,
  CategoryContainer,
  CategoryProductDisplay,
  CategoryDisplay,
} from "./productCategoryStyles";

const ProductCategory = () => {
  const params = useParams();

  const isLoading = useSelector(selectProductsIsLoading);

  const products = useSelector(selectProduct);

  const paramFilter = products.filter(
    (category) => category.Category === params.id
  );

  const [id] = paramFilter;

  return (
    <CategoryWrapper id="productCategory">
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </CategoryWrapper>
  );
};

export default ProductCategory;
