import React from "react";
import styled from "styled-components";

const Message = styled.div`
  font-size: 0.9rem;
  margin: 10px 0;
  ${props =>
    props.type === "error" ? `color: ${props.theme.colors.danger}` : null}
`;

export default Message;
