//Imports from package.json
import React from "react";
//Import from Story
import Sections from "./Sections";
//Import from components
import { SignUp } from "@component/Subscribe";
import createBreakpoint from "styled-components-breakpoint";
import initGA from "../../helpers/initGA";
//Import from assets
import story from "@content/story";
import styled from "styled-components";
//Import from themes
import theme from "@/theme";
const breakpoint = createBreakpoint(theme.breakpoints);

//Div for padding between sections and sign-up
const Padding = styled.div`
  padding-top: 3rem;
  ${breakpoint("md")`padding: 0`};
`;

export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <div>
      <Sections using={story.sections} />
      <Padding />
      <SignUp />
    </div>
  );
};
