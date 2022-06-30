import {
  HomepageContainer,
  GridHomepageContainer,
  HomeHeader,
} from "./homepageStyles";
import Swipper from "../../../components/swiperbanner/Swipper";

const HomePageContainerDesktop = () => {
  return (
    <HomepageContainer>
      <GridHomepageContainer>
        <HomeHeader>
          <h2>
            TECH JUST
            <br /> FOR YOU
          </h2>
          <h3>Because you Deserve it!</h3>
        </HomeHeader>
        <Swipper />
      </GridHomepageContainer>
    </HomepageContainer>
  );
};

export default HomePageContainerDesktop;
