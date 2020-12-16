import styled, { css } from "styled-components";

import Grid from "@component/Grid";
import Text from "@component/Text";
import theme from "@/theme";

const breakpoint = theme.breakpoint;

// The intro inherits from Grid

const Intro = styled(Grid)`
  padding-bottom: 5rem;
  ${breakpoint("md")`padding-bottom: unset`};

  grid-row-gap: 2rem;
  grid-template-areas:
    "b b b b b"
    "e e e . ."
    ". . h h h";

  ${breakpoint("md")`
    grid-row-gap: unset;
    grid-template-areas:
    '. b b b b . . e e . . .'
    '. b b b b . . . . h h .'
  `};
`;

// A wrapper for the diagrams used in the intro

const Picto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 11rem;

  img {
    padding-top: 30px;
    max-width: 100%;
  }
`;

Intro.Eye = styled(Picto)`
  grid-area: e;
  max-width: 74%;
`;

Intro.Hand = styled(Picto)`
  grid-area: h;
  max-width: 79%;
`;

// Intro body text

Intro.Body = styled.div`
  grid-area: b;
`;

Intro.Para = styled(Text)`
  font-size: ${(props) => props.theme.size.large};
  color: ${(props) => props.theme.color.forrest};
  padding-top: 1.3rem;
`;

Intro.Caption = styled(Text.Italic)`
  ${(props) =>
    props.green &&
    css`
      &&& {
        color: ${(props) => props.theme.color.forrest};
      }
    `}

  ${breakpoint("md")`font-size: 1.1rem`}
`;

Intro.Image = styled.img`
  width: 7.1rem;
  ${breakpoint("lg")`width: 12.5vw`}
`;

export default Intro;
