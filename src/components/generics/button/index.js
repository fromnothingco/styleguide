import React from "react";
import styled, { css } from "styled-components";
import { Loader, Done } from "../loader";

const buttonBase = css`
  font-size: ${props => props.theme.main.baseFontSize || "16px"};
  background: ${props => props.theme.buttons.background || "blue"};
  color: ${props => props.theme.buttons.color || "#fff"};
  padding: ${props => props.theme.buttons.padding || "0.5rem 2rem"};
  border: ${props => props.theme.buttons.border || "0"};
  border-radius: ${props => props.theme.main.borderRadius || "5px"};
  position: relative;
  width: ${props => props.theme.buttons.width || "auto"};
  overflow: hidden;
  text-decoration: none;
  &:hover {
    background: ${props => props.theme.buttons.hover.background || "darkBlue"};
    color: ${props => props.theme.buttons.hover.color || "#fff"};
    border: ${props => props.theme.buttons.hover.border || "0"};
    cursor: pointer;
  }
  &.confirm {
    border: 0;
    background: ${props => props.theme.colors.confirm || "green"};
  }
  &.cancel {
    border: 0;
    background: ${props => props.theme.colors.error || "red"};
  }
  &:disabled {
    border: 0;
    background: lightgrey;
    &:hover {
      cursor: default;
      border: 0;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px;
  border-radius: ${props => props.theme.main.borderRadius || "5px"};
  .loader,
  .done {
    ${buttonBase}
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 1;
    &:hover {
      border: ${props => props.theme.buttons.border || "0"};
      background: ${props => props.theme.buttons.background || "blue"};
      cursor: default;
    }
  }
`;

const A = styled.a`
  ${buttonBase}
`;

const Button = styled.button`
  ${buttonBase}
`;

const ButtonComponent = props => {
  switch (props.type) {
    case "link":
      return (
        <A {...props} href={props.href}>
          {props.children}
        </A>
      );
    case "submit":
      return (
        <Button {...props} type="submit">
          {props.children}
        </Button>
      );
    default:
      return (
        <Button {...props} type="button">
          {props.children}
        </Button>
      );
  }
};

export default props => (
  <Container>
    <Loader case={props.loading === true} />
    <Done case={props.loading === "done"} />
    <ButtonComponent {...props}>{props.children}</ButtonComponent>
  </Container>
);
