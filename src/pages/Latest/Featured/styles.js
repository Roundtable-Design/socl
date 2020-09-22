//Import from
import styled from "styled-components";
//Import from components
import Text from '@component/Text'
//Import from theme
import theme from '@/theme'
const breakpoint = theme.breakpoint;


//Styling for caption
export const Slug = styled.span`
  color: ${(props) => props.theme.color.light};
  font-style: italic;
`;


//Styling for the main image
export const Image = styled.img`
  object-fit: cover;
  border-radius: 5px;
  max-height: 19.5rem;
  grid-row-start: 4;
  grid-column-start: 1;
  grid-column-end: 6;

  ${breakpoint("md")`
    border-radius: 5px;
    grid-row-start: 3;
    grid-column-start: 2;
    grid-column-end: 7;
    min-width: 18rem;
  `}

  width: 100%;
  display: flex;
  justify-content: center;

  ${breakpoint('md')`
    margin: 0;
  `}

  margin: 0 auto;
  border-radius: 2px;
`;


//Styling for the icons
Image.Icon = styled.img`
  max-width: ${props => props.theme.size.medium};
  margin-right: 0.7rem;
  filter: grayscale(1);
  image-rendering: -webkit-optimize-contrast;
`

//Styling for the insight icon as it just had to be special
Image.Bowl = styled.img`
  max-width: 2rem;
  max-height: 0.9rem;
  margin-right: 0.7rem;
  align-items: flex-start;
  filter: grayscale(1);
  image-rendering: -webkit-optimize-contrast;
`

//Wrapper for the text, including title, author and date
export const TextWrapper = styled.section`
  grid-row-start: 3;
  grid-column-start: 1;
  grid-column-end: 6;
  flex-direction: column;

  padding-bottom: 2rem;

  ${breakpoint("md")`
    grid-row-start: 3;
    grid-column-start: 8;
    grid-column-end: 12;
    width: 100%;
    padding-bottom: unset;
 `}

  width: 90%;
  display: flex;
  justify-content: center;
`;

//Wrapper for the Image
export const ImageWrapper = styled.section`
  padding-top: 1.5rem;
  display: none;
  align-items: flex-end;
  ${(props) => props.pageTitle === "Latest Episode" &&`
    display: flex;
  `}
`;
//Styling for the Title
export const Heading = styled(Text)`

font-size: ${props => props.theme.size.larger};
color: ${(props) => props.theme.color.standard};
font-family: ${(props) => props.theme.font.standard};
font-weight: normal;
/*Styling for the date and author*/
${(props) =>
  props.v === "small" &&
  `
  font-size: 0.6rem;
  letter-spacing: 0.5;
  font-family: neue-haas-unica;
  font-weight: 500;
  `}
/*Styling for the page name*/
${(props) =>
props.v === "sans" &&
`
letter-spacing: 1.4;
font-size: 0.6rem;
font-family: neue-haas-unica;
font-weight: 800;
text-transform: uppercase;
`}
`
