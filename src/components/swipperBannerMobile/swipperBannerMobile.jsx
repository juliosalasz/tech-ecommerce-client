import { Fragment } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";

import "swiper/css";
import "swiper/css/navigation";

import "./swipperBannerMobileStyles.css";

import { Navigation } from "swiper";

const swipperBannerMobile = () => {
  return (
    <Fragment>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={slide1} alt="slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide 2" />
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default swipperBannerMobile;
