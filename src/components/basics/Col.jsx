import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCol = styled.div`
  flex: 0 0 auto;
  width: ${(props) => (props.lg / 12) * 100}%;
  height: 100%;
  max-width: 100%;
  ${(props) =>
    props.paddingZero
      ? "padding: 0;"
      : "padding-right: 0.75rem;padding-left: 0.75rem;padding-top: 0.75rem;"}
  @media (max-width: 768px) {
    width: ${(props) => (props.md / 12) * 100}%;
  }
  @media (max-width: 576px) {
    width: ${(props) => (props.sm / 12) * 100}%;
  }
`;

const Col = ({ lg, md, sm, children, paddingZero }) => {
  return (
    <StyledCol lg={lg} md={md} sm={sm} paddingZero={paddingZero}>
      {children}
    </StyledCol>
  );
};

Col.propTypes = {
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  children: PropTypes.node.isRequired,
  paddingZero: PropTypes.bool,
};

Col.defaultProps = {
  lg: "auto",
  md: "auto",
  sm: "auto",
};

export default Col;
