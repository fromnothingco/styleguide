import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";

const backgroundImage =
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e";

const SelectInput = styled.select`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border: ${({ theme }) => theme.input.border || "1px solid #ccc"};
  padding: ${({ theme }) => theme.input.padding || "0.5rem"};
  margin: ${({ theme }) => theme.input.margin || "5px 0"};
  background: ${({ theme }) => theme.input.background || "#fff"};
  border-radius: ${({ theme }) => theme.input.borderRadius || "5px"};
  background: #fff url("${backgroundImage}") no-repeat right .75rem center/8px 10px;;
  display: inline-block;
  color: #495057;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Select = props => {
  const { label, name, children } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <SelectInput {...props} id={name}>
        {children}
      </SelectInput>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Select;
