import React from "react";
import styled, { css } from "styled-components";
import Label from "../label";

const thumb = css`
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 100px;
  background: ${props => props.theme.colors.primary};
  cursor: pointer;
  margin-top: -3px;
`;

const track = css`
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #f1f1f1;
  border-radius: 1.3px;
  border: 0;
  border-radius: 100px;
`;

const RangeComponent = styled.input`
  width: 100%;
  height: calc(1rem + 0.4rem);
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    ${thumb}
  }

  &::-moz-range-thumb {
    ${thumb}
  }

  &::-webkit-slider-runnable-track {
    ${track}
  }

  &::-moz-range-track {
    ${track}
  }

  &:focus::-webkit-slider-runnable-track {
    background: #f2f2f2;
  }

  &::-ms-track {
    ${track}
  }

  &::-ms-fill-lower {
    ${track}
  }
  &:focus::-ms-fill-lower {
    background: #f2f2f2;
  }
  &::-ms-fill-upper {
    ${track}
  }
  &:focus::-ms-fill-upper {
    background: #f2f2f2;
  }
`;

const Range = props => {
  const { name, label } = props;
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <RangeComponent type="range" {...props} />
    </>
  );
};

export default Range;
