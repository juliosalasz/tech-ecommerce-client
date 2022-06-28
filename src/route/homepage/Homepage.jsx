import { Fragment } from "react";

import Shop from "../shop/Shop";

import FeaturedItems from "./featuredItems/FeaturedItems";
import CategorySection from "./categorySection/categorySection";

import {
  HomepageContainer,
  GridHomepageContainer,
  HomeHeader,
} from "./homepageStyles";
import Swipper from "../../components/swiperbanner/Swipper";

const Homepage = () => {
  return (
    <Fragment>
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
      <FeaturedItems />
      <Shop />
    </Fragment>
  );
};
export default Homepage;
