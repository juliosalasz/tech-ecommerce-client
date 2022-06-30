import { FeaturedList } from "../../../utils/featuredList";

import FeaturedMenuItems from "../../../components/featuredMenuItems/FeaturedMenuItems";
import MarqueeComponent from "../../../components/marqueeComponent/marqueeComponent";

import "./featuredItemsStyle.css";

const FeaturedItems = () => {
  return (
    <section className="featuredSection">
      <div className="featuredContent">
        <div className="featuredWrapper">
          <div className="featuredList">
            {FeaturedList.map((item) => (
              <FeaturedMenuItems key={item.id} item={item} />
            ))}
          </div>
          <MarqueeComponent />
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
