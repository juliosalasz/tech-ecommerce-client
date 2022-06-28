import styled from "styled-components";

export const SwiperContainer = styled.div`
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;

export const ColL = styled.div`
  grid-column: span 1;
`;

export const SwiperSize = styled.div`
  display: flex;
  grid-column: span 2;

  position: relative;
  right: 0;
`;
