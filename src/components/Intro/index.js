import Eye from "@asset/eye.svg";
import Hand from "@asset/hand.svg";
import Intro from "./styles";
import React from "react";

export default (props) => (
  <Intro>
    <Intro.Hand>
      <Intro.Caption green>to act with compassion</Intro.Caption>
      <Intro.Image src={Hand} />
    </Intro.Hand>

    <Intro.Eye>
      <Intro.Caption green>to see clearly</Intro.Caption>
      <Intro.Image src={Eye} />
    </Intro.Eye>

    <Intro.Body>
      <Intro.Caption>Vision and purpose</Intro.Caption>
      <Intro.Para>
        At the heart of Christianity there is a tradition of contemplative
        practice that can change a person and change the world.
      </Intro.Para>
      <Intro.Para>
        The purpose of The School of Contemplative Life is to teach
        contemplative practice as a way of liberation, wholeness and peace - so
        we can see clearly and act with compassion.
      </Intro.Para>
    </Intro.Body>
  </Intro>
);
