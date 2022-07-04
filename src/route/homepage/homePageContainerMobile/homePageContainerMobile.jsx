import {
  HomepageContainer,
  GridHomepageContainer,
  HomeHeader,
} from "./homepageStyles";

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
