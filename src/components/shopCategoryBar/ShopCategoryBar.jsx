import { Link } from "react-router-dom";
import "./shopCategoryBar.css";

const ShopCategoryBar = ({ productCategory }) => {
  return (
    <div className="categoryBarContainer">
      <h2 className="categoryTitle">CATEGORIES</h2>
      <ul className="categoryBarList">
        {productCategory.map((category) => {
          return (
            <li key={category.id}>
              <Link to={`/shop/${category.Category}`}>
                <div className="categoryListEntry">
                  <h2>{category.Category}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCategoryBar;
