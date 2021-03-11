//Import from components
import Grid from "@component/Grid";
//Imports from package.json
import styled from "styled-components";
//Import from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

//Wrapper to cover the whole hero page
export const HeroWrapper = styled(Grid)`
  background-size: cover;
  width: 100%;
  height: 100vh;
  /* position: relative; */
  font-family: ${(props) => props.theme.font.standard};
  ${breakpoint("md")`
      height: 100vh;
  `}
`;

//Component to loop the video once it has finished
export const HeroLoop = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  & > video {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    position: absolute;
  }
`;

// //Wrapper around the hero text
// export const HeroTextWrapper = styled.div`
//   text-align: center;
//   height: 100%;
//   display: flex;
//   grid-column: 1 / 6;
//   background: none;
//   margin: 0 auto;
//   ${breakpoint("md")`
//     grid-column: 1 / 13
//   `}
// `;

//Styling for the hero text
export const HeroText = styled.p`
  text-align: center;
  position: absolute;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  left: 50%;
  transform: translateX(-50%);
  bottom: 65px;
  font-size: 0.6rem;
  color: ${(props) => props.theme.color.forrest};
  /* height: fit-content; */

  padding-bottom: 3rem;
  min-height: 6rem;

  ${breakpoint("md")`
    bottom: 15px;
    font-size: 0.8rem;
  `}
`;
