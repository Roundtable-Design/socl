import styled, { keyframes } from "styled-components";

import React from "react";

const blink = keyframes`
  from { opacity: 0 }
  50% { opacity: 1 }
  to { opacity: 0 }
`;

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  /* This is one big boy! */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img.attrs({ src: require("../assets/scl.svg") })`
  width: 150px;
  display: block;
  animation: 1s ${blink} infinite;
`;

export default () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
};
