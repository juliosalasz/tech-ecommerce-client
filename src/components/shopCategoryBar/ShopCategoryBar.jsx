import { Link } from "react-router-dom";
import "./shopCategoryBar.css";

const ShopCategoryBar = ({ productCategory }) => {
  return (
    <div className="categoryBarContainer">
      <ul className="categoryBarList">
        {productCategory.map((category) => {
          return (
            <div key={category.id}>
              <Link to={`/shop/${category.Category}`}>
                <li className="categoryListEntry">
                  <h2>{category.Category}</h2>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCategoryBar;
