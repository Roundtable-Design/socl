//Import from styles
import {
  A,
  Card,
  CardContent,
  CardFlex,
  CardHeading,
  CardImage,
  CardMeta,
  CardTop,
} from "./styles";

//Import from package.json
import React from "react";

//Creating the format for a single card
export default (props) => {
  console.log("link", props.link);

  return (
    <Card>
      <CardContent className="card-content">
        <A target="_blank" href={props.link}>
          <CardTop>
            <CardHeading>{props.title}</CardHeading>
            <CardHeading.italic>
              {/* Remove tags */}
              {props.purpose.replace(/<[^>]*>/g, "")}
            </CardHeading.italic>
          </CardTop>
        </A>
        <A target="_blank" href={props.link} style={{ color: "black" }}>
          <CardFlex>
            <CardMeta>{props.meta}</CardMeta>
          </CardFlex>
        </A>
      </CardContent>
      <CardImage src={props.src} />
    </Card>
  );
};
