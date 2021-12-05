import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../compound/Card";
import styled from "styled-components";

const StyledCard = styled(Card)`
  h3 {
    text-align: center;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Indicators = ({ getAgeAverage }) => {
  const [average, setAverage] = useState("");

  useEffect(() => {
    getAgeAverage().then((res) => {
      setAverage(parseFloat(res.ageAverage).toFixed(2));
    });
  }, [getAgeAverage, setAverage]);

  return (
    <StyledCard title="Promedio de edad">
      <div>
        <h3>{average}</h3>
      </div>
    </StyledCard>
  );
};

Indicators.propTypes = {
    getAgeAverage: PropTypes.func.isRequired,
};

export default Indicators;
