import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;

  @media (min-width: 576px) {
    padding: 0 0.5rem;
  }
  @media (min-width: 768px) {
    padding: 0 1rem;
  }
  @media (min-width: 992px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1400px) {
    padding: 0 2rem;
  }
`;

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
