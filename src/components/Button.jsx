import React from "react";
import { styled, css } from "styled-components";

const StButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /*크기*/
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          height: 3rem;
          font-size: 1.25rem;
        `;
      case "small":
        return css`
          height: 2.25rem;
          font-size: 1rem;
        `;
      default:
        return css`
          height: 2.25rem;
          font-size: 1rem;
        `;
    }
  }}

  /*색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;
function Button({ children, ...rest }) {
  return <StButton {...rest}>{children}</StButton>;
}

export default Button;
