import styled from "styled-components";

export const ListButtonToggle = styled.li`
  background-color: none;
  ${({ active }) => active && `background-color: black; color:white;`}
`;

export const ProductPageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 60px;
  }
`;
export const StockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 30px;
  font-size: 3rem;
  @media (max-width: 768px) {
    padding-left: 0px;
    font-size: 2rem;
    justify-content: flex-start;
  }
`;

export const ProductImage = styled.img`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ProductStockPrice = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin: 10px;
  }
`;

export const ProductPageWrapper = styled.div`
  padding-top: 150px;
  width: 100%;
  @media (max-width: 768px) {
    padding-top: 70px;
  }
`;

export const ProductTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
