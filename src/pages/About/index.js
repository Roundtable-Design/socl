import Aims from "./Aim";
//Imports from components
import Intro from "@component/Intro";
//Imports from About
import Message from "./Message";
import Practice from "./Practice";
import Quotes from "./Quotes";
//Imports from package.json
import React from "react";
import { SignUp } from "@component/Subscribe";
import initGA from "../../helpers/initGA";
import styled from "styled-components";
//Imports from theme
import theme from "@/theme";

const breakpoint = theme.breakpoint;

//Wrapper for intro component
const IntroWrap = styled.div`
  /* padding-top: 8rem; */
  ${breakpoint("md")`
    padding-bottom: 10rem;
  `}
`;

const Middle = styled.div`
  display: block;
  max-width: 32rem;
  margin: 0 auto;
  padding-top: 6.5rem;
  padding-bottom: 6.5rem;
`;

export default (props) => {
  React.useEffect(() => {
    initGA(window.location);
  }, []);

  return (
    <div>
      <IntroWrap>
        <Intro />
      </IntroWrap>
      <Practice marginBottom />
      {/* <Message>
        Contemplation is not about mastering techniques, it’s about
        relationship. It’s the quiet, steady work of simply being here, fully
        present to the gift of our life.
      </Message> */}
      <Aims marginBottom />
      <Quotes marginBottom />
      <SignUp />
    </div>
  );
};
