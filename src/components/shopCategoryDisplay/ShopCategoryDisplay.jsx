import { ServerUrl } from "../../api/Api";
import { Link } from "react-router-dom";
import "./shopCategoryDisplay.css";

const ShopCategoryDisplay = ({ productCategory }) => {
  const popular = productCategory.filter(
    (productCategory) => productCategory.POPULAR
  );

  return (
    <div className="displayContainer">
      <ul className="displayList">
        {popular.map((popular) => {
          return (
            <li
              key={popular.id}
              style={{
                backgroundImage: `url(${ServerUrl}${popular.imageUrl})`,
              }}
            >
              <Link
                to={`/shop/${popular.Category}`}
                className="shopCategoryDisplay"
              >
                <div className="displayInterior">
                  <h2>{popular.Category}</h2>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopCategoryDisplay;
//${ServerUrl}${popular.imageUrl}

//`url(${popular.imageUrl})`
