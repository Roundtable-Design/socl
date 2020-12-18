//Imports from package.json
import styled, { keyframes } from "styled-components";

//Imports from components
import Grid from "@component/Grid";
import Text from "@component/Text";
//Imports from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

//Animation for success message
const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1}
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

//Grid background for the component
const Subscribe = styled(Grid)`
  padding: 2rem 0;
  grid-template-areas: "body body body body body";
  padding-bottom: 6rem;

  ${breakpoint("md")`
    // padding-top: 7.8rem;
    padding-bottom: 9rem;
    grid-template-areas: '. body body body body body . . . . . . .'
  `}

  /*Focusing the arrow and placeholder when someone starts typing*/
  & input {
    opacity: 0.56;
    cursor: pointer;
    width: 15rem;
  }

  & input:focus {
    opacity: 0.8;
    cursor: unset;
  }

  img {
    opacity: 0;
    padding-left: 15px;
  }

  & input:focus + img {
    opacity: 1;
    animation: come 5s;
    animation-fill-mode: forwards;
  }
`;

//Positioning the text
Subscribe.Body = styled.div`
  grid-area: body;
`;

//Adding animation to the arrow image
Subscribe.Image = styled.img`
  animation: 0.5s ${fadeOut};
`;

//Text styling for the caption of the sign up
Subscribe.Text = styled(Text)`
  color: ${(props) => props.theme.color.forrest};
`;

//Styling for error and success messages
Subscribe.Success = styled(Text)`
  color: ${(props) => props.theme.color.forrest};
  font-style: italic;
  animation: 1s ${fadeIn};
`;

//Styling for placeolder
Subscribe.Email = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-family: ${(props) => props.theme.font.standard};
  font-size: ${(props) => props.theme.size.standard};
  animation: 0.5s ${fadeOut};
`;

export default Subscribe;
