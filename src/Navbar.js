import React from "react";
import styled from "styled-components";
import { NAVBAR_SHADOW } from "./constants";

const Wrapper = styled.nav`
  background: white;
  ${NAVBAR_SHADOW};
`;

const NavText = styled.p`
  color: var(--primary);
  margin: 0;
  padding: 1rem;
  font-size: x-large;
  font-weight: bold;
  text-align: center;
`;

const Span = styled.span`
  color: var(--secondary);
`;

const Navbar = () => (
  <Wrapper>
    <NavText>
      <Span>Score</Span>Board
    </NavText>
  </Wrapper>
);

export default Navbar;
