import Marquee from "react-fast-marquee";

import apple from "../../assets/logoMarquee/apple.png";
import sony from "../../assets/logoMarquee/sony.png";
import benq from "../../assets/logoMarquee/BenQ.png";
import lg from "../../assets/logoMarquee/lg.png";
import canon from "../../assets/logoMarquee/canon.png";
import xiaomi from "../../assets/logoMarquee/xiaomi.png";

import "./marqueeStyles.css";

const MarqueeComponent = () => {
  return (
    <Marquee className="marqueestyle">
      <div className="image-wrapper">
        <img className="imageMarquee" src={apple} alt="apple" />
      </div>
      <div className="image-wrapper">
        <img className="imageMarquee" src={sony} alt="sony" />
      </div>
      <div className="image-wrapper">
        <img className="imageMarquee" src={benq} alt="benq" />
      </div>
      <div className="image-wrapper">
        <img className="imageMarquee" src={lg} alt="lg" />
      </div>
      <div className="image-wrapper">
        <img className="imageMarquee" src={canon} alt="canon" />
      </div>
      <div className="image-wrapper">
        <img className="imageMarquee" src={xiaomi} alt="xiaomi" />
      </div>
    </Marquee>
  );
};

export default MarqueeComponent;
