//import from package.json
import styled, { keyframes } from "styled-components";

//imports from components
import Grid from "@component/Grid";
import Text from "@component/Text";
//import from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

// fade animations

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1}
`;

const fadeOut = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

// The footer inherits from Grid

const Footer = styled(Grid)`
  max-width: 1024px;
  ${breakpoint("lg")`max-width: 1370px`};

  width: 89vw;
  margin: 0 auto;

  grid-template-areas:
    "contact contact contact contact contact"
    "uptodate uptodate uptodate uptodate uptodate"
    "socials socials socials socials socials";

  grid-row-gap: 3rem;

  ${breakpoint("md")`
    grid-template-areas: '. contact contact contact uptodate uptodate uptodate uptodate socials socials socials .';
    grid-row-gap: unset
  `};
`;

// Successfull signup message

Footer.Message = styled(Text.Italic)`
  font-size: 0.69rem;
  animation: 0.5s ${fadeIn};
  padding-top: 8px;
`;

// Footer columns

const Column = styled(Text)`
  font-size: 0.69rem;
  line-height: 1rem;
`;

//Column for 'contact' section
Footer.Contact = styled(Column)`
  grid-area: contact;
  padding-right: 2rem;

  p > h1 {
    font-size: 0.69rem !important;
    display: inline;
    padding-right: 15px;
  }

  p {
    padding-top: 0;
    font-variant-numeric: unset !important;
  }
`;

//Column for 'up to date' section
Footer.UpToDate = styled(Column)`
  grid-area: uptodate;
  padding-right: 2rem;
`;

//Column for 'socials' section
Footer.Socials = styled(Column)`
  grid-area: socials;
`;

// Social icons

Footer.Icon = styled.img`
  max-width: 1.2rem;
  margin-right: 0.7rem;
  filter: grayscale(1);
  image-rendering: -webkit-optimize-contrast;
  user-select: no-select;
`;

// Footer signup form

Footer.Input = styled.input`
  outline: none;
  color: #555;
  font-size: ${(props) => props.theme.size.small};
  letter-spacing: 1;
  border: none;
  background: transparent;
  font-family: ${(props) => props.theme.font.standard};
  padding-top: 0.4rem;
  animation: 0.5s ${fadeOut};

  ${breakpoint("md")`
    width: 90.73%;
    padding-top: 0.24rem
  `};

  width: 60%;
  line-height: 3;
  border-bottom: 1px solid ${(props) => props.theme.color.light};
`;

// Footer heading

Footer.Heading = styled(Text.Sans)`
  padding-bottom: 0.4rem;
  ${breakpoint("md")`padding-bottom: 0.7rem;`}
  letter-spacing: 1.4;
  font-size: 0.6rem;
`;

export default Footer;
