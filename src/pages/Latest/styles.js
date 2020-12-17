import { createBreakpoint } from "styled-components-breakpoint";
//Imports from package.json
import styled from "styled-components";
//Imports from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

//Styling for section heading
export const SectionHeading = styled.h1`
  font-size: 0.6rem;
  font-family: ${(props) => props.theme.font.sans};
  font-weight: 600;
  color: ${(props) => props.theme.color.standard};
  text-transform: uppercase;
  letter-spacing: 1.2;
  word-spacing: 1.4;
  padding-bottom: 0.2rem;
`;

//Wrapper for the posts
export const PostWrapper = styled.section`
  padding-top: 5.6rem;
  grid-row-start: 5;
  grid-column-start: 1;
  grid-column-end: 6;
  padding-bottom: 2.5rem;

  ${breakpoint("md")`
    grid-column-start: 2;
    grid-column-end: 12;
`};
`;

//Wrapper for the previous section
export const PreviousWrapper = styled.section`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 6;
  padding-bottom: 5.5rem;

  ${breakpoint("md")`
    grid-column-start: 2;
    grid-column-end: 12;
    padding-bottom: 7.5rem;
  `}
`;
