import styled from "styled-components";

export const ListButtonToggle = styled.li`
  background-color: none;
  ${({ active }) => active && `background-color: black; color:white;`}
`;
