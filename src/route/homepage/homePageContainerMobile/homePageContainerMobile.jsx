import {
  HomepageContainer,
  GridHomepageContainer,
  HomeHeader,
} from "./homepageStyles";
import swipperBannerMobile from "../../../components/swipperBannerMobile/swipperBannerMobile";

const HomePageContainerMobile = () => {
  return (
    <HomepageContainer>
      <GridHomepageContainer>
        <HomeHeader>
          <h2>
            <br /> FOR YOU
          </h2>
          <h3>Because you Deserve it!</h3>
        </HomeHeader>
        <swipperBannerMobile />
      </GridHomepageContainer>
    </HomepageContainer>
  );
};

export default HomePageContainerMobile;
