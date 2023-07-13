import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <StHeader>
      <Link to="/">Home</Link>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-color: black;
`;

export default Header;
