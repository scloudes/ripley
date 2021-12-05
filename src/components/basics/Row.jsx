import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 1.5rem;
`;

const Row = ({ children }) => {
  return <StyledRow >{children}</StyledRow>;
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
