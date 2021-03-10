import styled from "styled-components";
import theme from "../../theme";

export const Outer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  zoom: 1.5;

  background: #f6f6f6;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 7px 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
  max-width: 734px;
  width: calc(100% - 30px);
  font-family: ${theme.font.sans};

  display: grid;
  grid-template-areas: "text buttons";
  grid-template-columns: 1fr 97px;
  column-gap: 15px;

  ${theme.breakpoint("lg")`
    grid-template-areas: "empty text buttons";
    grid-template-columns: 97px 1fr 97px;
    `}
`;

export const Text = styled.p`
  grid-area: text;
  align-self: center;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;
  margin: 0;
  /* identical to box height */

  text-align: left;
  ${theme.breakpoint("lg")`
  text-align: center;
  `}
`;

export const ButtonGroup = styled.div`
  grid-area: buttons;

  align-self: center;
`;

export const Button = styled.button`
  margin-right: 2px;
  appearance: none;
  border: none;
  background: #ffffff;
  color: #838383;
  border-radius: 1px;
  padding: 3.5px 10px;
  font-family: ${theme.font.sans};
  font-weight: 500;
  font-size: 8px;
  line-height: 12px;

  cursor: pointer;

  ${({ forest }) =>
    forest &&
    `
        background-color: rgba(0, 60, 59, 0.7);
        color: white;
    `}
`;
