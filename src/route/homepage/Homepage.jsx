import React from "react";
import { Fragment } from "react";
import FeaturedItems from "./featuredItems/FeaturedItems";
import HomePageContainerDesktop from "./homePageContainerDesktop/homePageContainerDesktop";
import HomePageContainerMobile from "./homePageContainerMobile/homePageContainerMobile";
import useScreenType from "react-screentype-hook";

// import Shop from "../shop/Shop";

const Homepage = () => {
  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1600,
  });

  //isMobile: true,

  return (
    <Fragment>
      {screenType.isMobile ? (
        <HomePageContainerMobile />
      ) : (
        <HomePageContainerDesktop />
      )}

      <FeaturedItems />
    </Fragment>
  );
};
export default Homepage;
