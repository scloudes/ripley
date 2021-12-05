import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryContrast};
  border: none;
  border-radius: 3px;
  width: 100%;
  padding: 1rem 2rem;
  margin: 0.75rem auto;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

const Button = ({ text, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  onClick: () => {},
};

export default Button;
