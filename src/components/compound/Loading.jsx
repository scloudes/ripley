import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${(props) => (props.isLoading ? "block" : "none")};
  .loading-content {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    min-width: 15rem;
    width: 30%;
    position: relative;
    transition: all 1s ease-in-out;
  }
`;

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;

  .spinner * {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background-color: ${(props) => props.theme.colors.primaryLight};
    border-radius: 1rem;
    margin: 0 0.2rem;
  }
  .spinner .spinner-1 {
    animation: fade 1.1s ease-in-out 0.18s infinite both;
  }
  .spinner .spinner-2 {
    animation: fade 1.1s ease-in-out 0.36s infinite both;
  }
  .spinner .spinner-3 {
    animation: fade 1.1s ease-in-out 0.54s infinite both;
  }

  @keyframes fade {
    0% {
      opacity: 0.35;
      transform: scale(0.87);
    }
    37.5% {
      opacity: 1;
      transform: scale(1);
    }
    75% {
      opacity: 0.35;
      transform: scale(0.87);
    }
    100% {
      opacity: 0.35;
      transform: scale(0.87);
    }
  }
`;

const Loading = ({ isLoading }) => {
  return (
    <StyledLoading isLoading={isLoading}>
      <div className="loading-content">
        <h2>Cargando</h2>
        <StyledSpinner>
          <div className="spinner">
            <div className="spinner-1"></div>
            <div className="spinner-2"></div>
            <div className="spinner-3"></div>
          </div>
        </StyledSpinner>
      </div>
    </StyledLoading>
  );
};

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default Loading;
