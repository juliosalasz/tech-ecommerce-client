import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  witdh: 100%;
  z-index: 10;
  padding: 16px 32px;
`;

export const NavContainer = styled.div`
  max-width: 1280px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: gray;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const MenuItems = styled.div`
  display: inline-flex;
  align-items: center;
  list-style: none;
`;

export const Hamburger = styled.button`
  display: block;
  position: relative;
  z-index: 1;
  user-select: none;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  $span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background-color: white;
    border-radius: 6px;
    z-index: 1;
    transform-origin: 0 0;
    transition: 0.4s;
  }

  &:hover span:nth-child(2) {
    transform: translateX(10px);
  }
`;
