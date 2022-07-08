import styled from "styled-components";

export const ShopContainer = styled.section`
  background: #282c34;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  @media (max-width: 768px) {
    padding-top: 80px;
    height: unset;
  }
`;

export const CategoryContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  height: 100%;
  width: 100%;
`;

export const CategoryDisplayContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
