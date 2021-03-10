import { Button, ButtonGroup, Outer, Text, Wrapper } from "./styles";

import React from "react";
import isAccepted from "./isAccepted";
import setAccepted from "./setAccepted";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();

  const [show, setShow] = React.useState(!isAccepted());

  return (
    show && (
      <Outer>
        <Wrapper>
          <Text>
            Our site has cookies! We use them to analyse website traffic and
            inform email and social media features.
          </Text>
          <ButtonGroup>
            <Button onClick={() => history.push("/privacy")}>Read More</Button>
            <Button
              forest
              onClick={() => {
                setAccepted();
                setShow(false);
              }}
            >
              OK
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Outer>
    )
  );
};
