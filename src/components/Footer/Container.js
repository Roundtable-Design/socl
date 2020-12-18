import styled from "styled-components";
import theme from "@/theme";
const breakpoint = theme.breakpoint;

export default styled.div`
  width: 100%;
  background: #f8f8f8;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;

  ${breakpoint("md")`
    padding-top: 5.4rem;
    padding-bottom: 4rem
  `}
`;
