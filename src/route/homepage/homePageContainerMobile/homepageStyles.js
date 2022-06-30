import styled from "styled-components";

export const HomepageContainer = styled.div`
  width: 100%;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const GridHomepageContainer = styled.div`
  width: 100%;
`;

export const HomeHeader = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 2;
  text-align: left;

  h2 {
    margin: 10px 0;
    font-size: 150px;
    line-height: 119px;
  }
  h3 {
    margin: 0 0;
    font-size: 65px;
  }
`;
