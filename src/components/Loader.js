import styled, { keyframes } from "styled-components";

import ImagesLoaded from "react-images-loaded";
import React from "react";
import theme from "@/theme";
const breakpoint = theme.breakpoint;

// blinking animation for loader wheel

const blink = keyframes`
  from { opacity: 0 }
  50% { opacity: 1 }
  to { opacity: 0 }
`;

// Wrapper for loader

const LoaderWrapper = styled.div`
  background: white;
  z-index: 200;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img.attrs({ src: require("../assets/scl.svg") })`
  width: 120px;
  ${breakpoint("md")`width: 200px`};
  animation: 1s ${blink} infinite;
`;

const Load = () => (
  <LoaderWrapper>
    <Logo />
  </LoaderWrapper>
);

const Loader = (props) => {
  const [loaded, setLoaded] = React.useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <ImagesLoaded done={handleLoad}>
      {loaded ? "" : <Load />}
      <div>{props.children}</div>
    </ImagesLoaded>
  );
};

export default Loader;
