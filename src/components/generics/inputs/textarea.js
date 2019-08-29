import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";
import Message from "../messages";

const TextareaInput = styled.textarea`
  display: block;
  width: 100%;
  min-height: 150px;
  box-sizing: border-box;
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

const Textarea = props => {
  const inputhere = React.createRef();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const { label, name } = props;

  const validate = () => {
    console.log(inputhere.current.validity);
    if (!inputhere.current.validity.valid) {
      setError("error");
      setMessage(inputhere.current.validationMessage);
    } else {
      setError("valid");
      setMessage(null);
    }
  };
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <TextareaInput
        ref={inputhere}
        {...props}
        className={error}
        id={name}
        onBlur={validate}
      />
      {message ? <Message type="error">{message}</Message> : null}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Textarea;
