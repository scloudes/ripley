import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-family: inherit;
  padding: 0.4rem 0.75rem;
  margin: 0.75rem 0;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.25rem;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem ${(props) => props.theme.colors.primaryOpacity};
  }
`;

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <>
      {type === "text" ? (
        <>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            type={type}
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            required
          />
        </>
      ) : (
        <>
          <label htmlFor={name}>{label}</label>
          <StyledInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            max={new Date().toISOString().split("T")[0]}
            min="1900-01-01"
            required
          />
        </>
      )}
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "date"]),
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
  label: "",
};

export default Input;
