import styled, { css } from "styled-components";

//Import from components
import Grid from "@component/Grid";
//Import from package.json
import React from "react";
import Text from "@component/Text";
//Import from theme
import theme from "@/theme";

const breakpoint = theme.breakpoint;

//Creating grid for section
const Section = styled(Grid)`
  padding-bottom: 3.5rem;

  ${({ marginBottom }) => marginBottom && "margin-bottom: 3.5rem;"}

  ${breakpoint("md")`
    padding-bottom: 8.8rem;
    ${(props) =>
      props.nopad === "true" &&
      css`
        padding-bottom: 1rem;
      `}
  `}

  grid-template-areas:
  'body body body body body'
  'image image image image image';

  ${breakpoint("md")`
    ${({ marginBottom }) => marginBottom && "margin-bottom: 10rem;"}
      
    align-items: center;
    grid-template-areas:
    '. body body body body . image image image image image image';

    ${(props) =>
      props.reverse === true &&
      `
      grid-template-areas:
      'image image image image image image . body body body body .';
    `}
  `}
`;

//Wrapper for text
Section.Body = styled.div`
  grid-area: body;
`;

//Image for section
Section.Image = styled.div`
  grid-area: image;

  overflow-x: hidden;
  max-width: 100%;
  min-height: 22rem;
  ${breakpoint("md")`min-height: 30rem`};

  background: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

//Styling for section heading
Section.Heading = styled(Text.Italic)`
  color: ${(props) => props.theme.color.standard};
  padding-top: 1.5rem;
  padding-bottom: 0.6rem;
`;

//Styling for section heading
Section.Title = styled(Text)`
  font-size: ${(props) => props.theme.size.larger};
  color: ${(props) => props.theme.color.standard};
  padding-bottom: 0.6rem;
`;

//Styling for section text
Section.Text = styled(Text)`
  color: ${(props) => props.theme.color.forrest};
`;

//Styling for the link
const Link = styled(Text.Sans)`
  max-width: fit-content;
  cursor: pointer;

  .underline {
    width: 0%;
  }

  :hover {
    .underline {
      width: 100%;
    }
  }
`;

//Animation for the underline of links
const Underline = styled.div`
  transition: width 0.43s ease-in-out;
  border-bottom: 1.4px solid #444;
  padding-bottom: 0.17rem;

  ::after {
    content: " ";
    display: block;
    min-height: 4rem;
  }

  ${breakpoint("md")`
    ::after {
      display: none;
    }
  `}
`;

//Adding animation to link
Section.Link = (props) => (
  <Link
    style={{ "padding-top": props.nopad ? 0 : "1.3rem" }}
    onClick={() => (window.location = props.to)}
  >
    {props.children}
    <Underline className="underline" />
  </Link>
);

export default Section;
