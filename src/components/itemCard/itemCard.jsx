import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./itemCardStyles.css";

const ItemCard = ({ product }) => {
  const params = useParams();

  return (
    <div key={product.id}>
      <Link to={`/shop/${params.id}/${product.id}`}>
        <img
          src={`http://localhost:5000/${product.imageUrl}`}
          alt={product.name}
          className="cardImage"
        />
      </Link>

      <h3>{product.brand}</h3>
      <h2>
        <Link to={`/shop/${params.id}/${product.id}`}>{product.name}</Link>
      </h2>
    </div>
  );
};

export default ItemCard;
