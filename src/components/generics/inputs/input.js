import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";

const InputStyle = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border: ${({ theme }) => theme.input.border || "1px solid #ccc"};
  padding: ${({ theme }) => theme.input.padding || "0.5rem"};
  margin: ${({ theme }) => theme.input.margin || "5px 0"};
  background: ${({ theme }) => theme.input.background || "#fff"};
  border-radius: ${({ theme }) => theme.input.borderRadius || "5px"};
  &.error {
    border-color: ${({ theme }) => theme.colors.danger};
  }
  &.valid {
    border-color: ${({ theme }) => theme.colors.success};
  }
`;

const Message = styled.div``;

const Input = props => {
  const inputhere = React.createRef();
  const [error, setError] = useState(null);
  const { label, name, placehodler = null } = props;

  const validate = () => {
    console.log(inputhere.current.validity);
    if (!inputhere.current.validity.valid) {
      setError("error");
    } else {
      setError("valid");
    }
  };

  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <InputStyle
        ref={inputhere}
        {...props}
        className={error}
        id={name}
        placeholder={placehodler}
        onBlur={validate}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
