import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  h1 {
    text-align: center;
    color: ${(props) => props.theme.colors.primaryContrast};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Ripley Prueba Técnica</h1>
    </StyledHeader>
  );
};

export default Header;
