//Imports from package.json
import React from "react";
//Import from components
import Text from "@component/Text";
import styled from "styled-components";
//Import from theme
import theme from "@/theme.js";
const breakpoint = theme.breakpoint;

//Wrapper to go arrounf the card
export const Card = styled.div`
  border-radius: 2px;
  border: 0px white solid;
  width: 350px;
  min-width: 12.59rem;
  transition: box-shadow .36s, border .36s;
  }
`;

//Image for the card
export const CardImage = styled.img`
  display: none;
  ${breakpoint("md")`
    border-radius: 5px;
    object-fit: cover;
    filter: grayscale(0.44) contrast(0.8) brightness(1.2);
    height: 225px;
    overflow-y: hidden;
    display: block;
    width: 100%;
  `}
`;

//Styling for the date and author
export const CardMeta = styled.div`
  font-size: 0.55rem;
  font-family: ${(props) => props.theme.font.sans};
  font-weight: 500;

  ${breakpoint("md")`padding-top: 1rem;`}

  padding-bottom: 1.5rem;
  word-spacing: 1.2;
`;

//Wrapper for title and caption
export const CardTop = styled.div`
  min-width: 12.33rem;
  height: 7.4rem;
  ${breakpoint("md")`min-height: 132px`}
  overflow-y: hidden;
`;

//Wrapper for card text
export const CardContent = styled.div`
  padding-left: 0.5rem;
`;

//Styling for the link
const Link = styled(Text.Sans)`
  max-width: fit-content;
  cursor: pointer;
  font-size: 0.45rem;

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
export const CardLink = (props) => (
  <Link
    style={{ "padding-top": props.nopad ? 0 : "1rem" }}
    onClick={() => (window.location = props.to)}
  >
    {props.children}
    <Underline className="underline" />
  </Link>
);

//Wrapper for card text 2
export const CardFlex = styled.div`
  display: flex;
`;

//Styling for the Title
export const CardHeading = styled(Text)`
  color: ${(props) => props.theme.color.forrest};
  font-size: 24px;
  font-weight: normal;
  display: inline;
`;

//Styling for the caption
CardHeading.italic = styled(Text.Italic)`
  display: block;

  color: ${(props) => props.theme.color.light};
  font-size: 24px;

  font-style: italic;
  font-weight: normal;

  :before {
    display: inline;
    content: " ";
  }
`;
//Removing underling from link
export const A = styled.a`
  text-decoration: none;
`;
