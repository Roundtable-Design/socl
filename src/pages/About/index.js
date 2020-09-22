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
import Text from "@component/Text";
import styled from "styled-components";
//Imports from theme
import theme from "@/theme";
const breakpoint = theme.breakpoint;

//Wrapper for intro component
const IntroWrap = styled.div`
  padding-top: 8rem;
  ${breakpoint("md")`
    padding-top: 10rem;
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

//Styling for list in the about page,
const List = styled.ol`
  padding-left: 15px;
`;

//Styling for each list item in the list
const ListItem = styled.li`
  color: ${(props) => props.theme.color.forrest};
  padding-bottom: 0.5rem;
  font-family: ${(props) => props.theme.font.standard};
`;

export default (props) => (
  <div>
    <IntroWrap>
      <Intro />
    </IntroWrap>
    <Practice />
    <Message>
      Contemplation is not about mastering techniques, it’s about relationship.
      It’s the quiet, steady work of simply being here, fully present to the
      gift of our life.
    </Message>
    <Aims />
    <Middle>
      <Text.Italic style={{ marginBottom: "15px" }}>
        The School of Contemplative Life aims to:
      </Text.Italic>
      <List>
        <ListItem>
          Teach meditation as a simple and universal practice for people of all
          ages, backgrounds and beliefs which opens us to the gift of
          contemplation
        </ListItem>
        <br />
        <ListItem>
          Contribute to the restoration of contemplative practice at the heart
          of Christian living as an experiential way of prayer and response to
          the call of Christ, which purifies our motives and reveals the true
          nature of our being – from and in God
        </ListItem>
        <br />
        <ListItem>
          Promote the inseparable relationship between interior transformation
          and social transformation
        </ListItem>
        <br />
        <ListItem>
          Nurture the common ground in contemplative practice across faith
          traditions
        </ListItem>
        <br />
        <ListItem>
          Be a source of peace and an antidote to the fundamentalism which gives
          rise to so much conflict and violence in the world and explore the
          various paths to our common home, where “there is no longer Jew nor
          Greek, no longer slave nor free, there is no longer male or female;
          for you are all one in Christ Jesus” (Gal 3:27–28).
        </ListItem>
      </List>
    </Middle>
    <Quotes />
    <SignUp />
  </div>
);
