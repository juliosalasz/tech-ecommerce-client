import styled from "styled-components";

export const CategoryWrapper = styled.section`
  background-color: #282c34;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const CategoryDisplay = styled.div`
  color: #f5f5f5;
  padding-top: 150px;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

export const CategoryProductDisplay = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: dense;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 25px;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px auto;
  max-width: 80%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryContainer = styled.div`
  width: 100%;

  & h1 {
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
