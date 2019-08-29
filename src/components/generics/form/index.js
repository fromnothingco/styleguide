import React, { useState } from "react";
import PropTypes from "prop-types";
import * as input from "../inputs";
import { formatFormData } from "./helper";
import Button from "../button";
import Message from "../messages";

const Form = ({
  onSubmit,
  buttonValue = "submit",
  children,
  inputs = [],
  defaultSuccessMessage = "Thank you for your message"
}) => {
  const [successMessage, setSuccessMessage] = useState(undefined);
  const [errorMessage, setErrorMessage] = useState([]);
  const submit = async e => {
    e.preventDefault();
    const formNode = [...e.target.elements];
    const formatedData = formatFormData(formNode);
    try {
      await onSubmit(formatedData);
    } catch ({ message }) {
      return setErrorMessage([message]);
    }
    return setSuccessMessage(defaultSuccessMessage);
  };

  const ListInputs = inputs.map(
    ({ name, type, label, component = "Input" }) => {
      const Component = input[component];
      return <Component key={name} name={name} type={type} label={label} />;
    }
  );

  return (
    <form onSubmit={submit}>
      {inputs.length > 0 ? ListInputs : null}
      {children}

      <div>
        {errorMessage.map(message => (
          <Message type="error" key={message}>
            {message}
          </Message>
        ))}
      </div>

      <div>
        {successMessage ? (
          <Message type="valid" key={successMessage}>
            {successMessage}
          </Message>
        ) : null}
      </div>

      <Button type="submit">{buttonValue}</Button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonValue: PropTypes.string
};

export default Form;
