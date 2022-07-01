import { useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import { useState } from "react";
import "./productPageStyles.css";
import { ListButtonToggle } from "./productPageStyles";

//redux
import { useSelector } from "react-redux/es/exports";
import { selectCartItems } from "../../store/cart/cartSelectors";
import { selectProduct } from "../../store/products/productsSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItemToCart } from "../../store/cart/cartActions";

const ProductPage = () => {
  //state for tab
  const [skuState, setSkuState] = useState(0);

  //destructure for getting the product info
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProduct);
  const location = useLocation();
  const categoryName = location.pathname.split("/");

  //find the category of product
  const [categoryPath] = products.filter(
    (category) => category.Category === categoryName[2]
  );
  //find the id of product. productObject will be the final result with the product info
  const [productObject] = categoryPath.PRODUCTS.filter(
    (product) => product.id === Number(categoryName[3])
  );
  //Get price of product
  const [price, setPrice] = useState(productObject.skus[0].price);
  //Change price of product
  const priceHandler = (i) => {
    setSkuState(i);
    setPrice(productObject.skus[i].price);
  };

  const dispatch = useDispatch();

  //create object with the needed info
  const productAdded = {
    id: productObject.skus[skuState].sku,
    name: productObject.name,
    feature: productObject.skus[skuState].feature,
    price: price,
    image: productObject.imageUrl,
  };

  const addProductToCart = () =>
    dispatch(addItemToCart(cartItems, productAdded));

  return (
    <section className="productPageWrapper">
      <div className="productPageContainer">
        <img
          src={`https://tech-ecommerce-server.herokuapp.com/${productObject.imageUrl}`}
          alt={productObject.name}
          className="productImage"
        />
        <div className="productInfo">
          <h2 className="productTitle">{productObject.name.toUpperCase()}</h2>
          <h3 className="productBrand">{productObject.brand.toUpperCase()}</h3>
          <div className="productStockPrice">
            <h3 className="productPrice">{`$${price}`}</h3>
            <div className="stockContainer">
              {productObject.skus[skuState].quantity !== 0 ? (
                <p className="stock">IN STOCK</p>
              ) : (
                <p className="noStock">OUT OF STOCK</p>
              )}
            </div>
          </div>
          <div className="productDescription">
            <p>{productObject.description}</p>
          </div>
          <span className="stockNumber">
            Stock avaible: {productObject.skus[skuState].quantity}
          </span>
          <ul className="skuList">
            {productObject.skus.map((sku, i) => {
              return (
                <ListButtonToggle
                  active={skuState === i}
                  className="skuList"
                  key={sku.sku}
                  onClick={() => priceHandler(i)}
                >
                  {sku.feature}
                </ListButtonToggle>
              );
            })}
          </ul>
          {productObject.skus[skuState].quantity !== 0 ? (
            <Button
              type="button"
              buttonType="cartButton"
              onClick={addProductToCart}
            >
              Add to Cart
            </Button>
          ) : (
            <Button buttonType="disabled">Add to cart</Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
// {productList.skus[skuState].quantity !== 0 ? (
//   <p>In Stock</p>
// ) : (
//   <p>Out of Stock</p>
// )}
