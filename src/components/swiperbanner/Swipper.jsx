import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import { SwiperContainer, ColL, SwiperSize } from "./swipperStyles";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";

// Import Swiper styles
import "./swipperStyles.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipper = () => {
  return (
    <SwiperContainer>
      <ColL></ColL>
      <SwiperSize>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          navigation={true}
          effect={"fade"}
          modules={[Navigation, Pagination, EffectFade]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="swiper-pagination-custom"
        >
          <SwiperSlide>
            <img src={slide1} alt="slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="slide 1" />
          </SwiperSlide>
        </Swiper>
      </SwiperSize>
    </SwiperContainer>
  );
};

export default Swipper;
