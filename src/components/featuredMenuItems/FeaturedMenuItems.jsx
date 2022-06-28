import "./featuredMenuItems.css";

const FeaturedMenuItems = ({ item }) => {
  const largeImage = item.size ? "itemLarge" : null;
  return (
    <div
      className={`featuredMenuItems ${item.size}`}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className={`menuItemInfo ${largeImage}`}>
        <h2>{item.name}</h2>
        <h3>{item.price}</h3>
      </div>
    </div>
  );
};

export default FeaturedMenuItems;
