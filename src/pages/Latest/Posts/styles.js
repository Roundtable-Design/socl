//Import from package.json
import styled from "styled-components";
//Import from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

//Wrapper for swiper
export const PostsSection = styled.div`
  width: 100%;
  position: relative;
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  /* max-height: 19.4rem; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

//Constricts the cards to the same size
export const PostContainer = styled.div`
  padding-left: 0;
  padding-bottom: 1rem;
  ${breakpoint("md")`padding-bottom: 3.6363636rem;`}
  padding-right: 1rem;
`;

//Wraps the posts together
export const PostsWrapper = styled.div`
  ${breakpoint("md")`padding-bottom: 4.2rem;`}
  padding-top: 0.7rem;
  user-select: none;
  max-height: 19.4rem;
  position: relative;
`;

//Makes a fade effect on overflow
export const Fader = styled.div`
  display: none;

  ${breakpoint("md")`
    position: absolute;
    background: linear-gradient(90deg, #ffffff00, #efefef);
    height: 100%;
    width: 170px;
    right: 0;
    top: 0;
    z-index: 50;
    display: block;
  `}
`;
