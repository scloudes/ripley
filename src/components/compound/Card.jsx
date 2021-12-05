import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.section`
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%),
    0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%);
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const Card = ({ title, children }) => {
  return (
    <StyledCard>
      <h2>{title}</h2>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
