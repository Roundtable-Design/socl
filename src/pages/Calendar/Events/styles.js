//Imports from package.json
import styled from "styled-components";
import theme from "../../../theme";

//Styling for the table
export const Grid = styled.div`
  font-family: ${(props) => props.theme.font.sans};
  font-size: 0.6rem;
  color: ${(props) => props.theme.color.standard};

  /*border-top: 1.4px solid black;*/
  border-bottom: 0.25px solid black;
  min-width: 900px;
  width: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 3fr 2fr 3fr 2fr;

  ${theme.breakpoint("md")`
    grid-template-columns: 4fr 2fr 3fr 2fr;
  `}
`;

//Styling for the data in the table
export const ColumnData = styled.div`
  border-top: 0.25px solid black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 30px;
  font-weight: 500;
  word-wrap: break-word;

  ${({ bold }) => bold && `font-weight: bold;`}
  ${({ spanAll }) => spanAll && `grid-column: 1 / -1;`}
`;

//Styling for the table headings
export const TH = styled.th`
  border-top: 0.25px solid black;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme.color.standard};
  font-size: 0.6rem;
  font-family: ${(props) => props.theme.font.sans};
  font-weight: 500;
  line-height: 0.6rem;
  text-align: left;
  min-width: 10rem;
  max-width: 10rem;
`;

//Removing underline from the link
export const A = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.standard};
`;
