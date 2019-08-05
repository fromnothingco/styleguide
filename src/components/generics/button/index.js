import React from "react";
import styled, { css } from "styled-components";
import { Loader, Done } from "../loader";

const buttonBase = css`
  background: ${props => props.theme.buttons.background || "blue"};
  color: ${props => props.theme.buttons.color || "#fff"};
  padding: ${props => props.theme.buttons.padding || "0.5rem 2rem"};
  border: ${props => props.theme.buttons.border || "0"};
  border-radius: ${props => props.theme.buttons.borderRadius || "5px"};
  position: relative;
  width: ${props => props.theme.buttons.width || "auto"};
  overflow: hidden;
  text-decoration: none;
  &:hover {
    background: ${props => props.theme.buttons.hoverBackground || "darkBlue"};
    color: ${props => props.theme.buttons.hoverColor || "#fff"};
    cursor: pointer;
  }
  &.confirm {
    background: ${props => props.theme.colors.error || "green"};
  }
  &.cancel {
    background: ${props => props.theme.colors.error || "red"};
  }
  &:disabled {
    background: lightgrey;
    &:hover {
      cursor: default;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: inline-block;
  .loader,
  .done {
    ${buttonBase}
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 1;
    &:hover {
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
