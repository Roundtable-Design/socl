//Imports from Card
import { A, CardFlex, CardHeading, CardMeta } from "../Card/styles";
//Imports from Previous
import { Item, Wrapper } from "./styles";

import Podcasts from "@asset/icons/podcasts.png";
//Imports from package.json
import React from "react";
import Spotify from "@asset/icons/spotify.jpg";
//Imports from assets
import insight from "@asset/icons/insight.png";
import moment from "moment";
//Imports from helper
import showDate from "@helper/showDate";
import styled from "styled-components";
//Imports from theme
import theme from "@/theme";
import wordLimit from "@helper/wordLimit";

const breakpoint = theme.breakpoint;

//Image for the icon
const Icon = styled.img`
    width: 20px;
    height: 20px;
    display: inline-block;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 5px;
    padding-left: 5px;
    filter: grayscale(1);
    ${breakpoint("md")`
    padding-right: 5px;
    padding-left: 10px;
    padding-bottom: 0px;
    padding-top: 0px;
    `}
  }
`;

//Styling for the insight bowl as it isn't a square
Icon.Bowl = styled.img`
  max-width: 2rem;
  max-height: 0.9rem;
  align-items: flex-end;
  display: inline-block;
  padding-bottom: 10px;
  padding-top: 4px;
  padding-right: 5px;
  ${breakpoint("md")`
  padding-right: 5px;
  padding-left: 10px;
  padding-bottom: 0px;
  `}
  image-rendering: -webkit-optimize-contrast;
`;

//Styling for a span to make the items inside it follow flex
const SpanFlex = styled.span`
  ${breakpoint("md")`
  display: flex;
  justify-content: flex-end;
  `}
  align-items: right;
  min-width: 10%;
`;

//Creating a row of icons
const Links = () => (
  <SpanFlex>
    {/* <Icon src={Podcasts}></Icon> */}
    {/* <Icon src={Spotify}></Icon> */}
    {/* <Icon.Bowl src={insight}></Icon.Bowl> */}
  </SpanFlex>
);

//Previous section design
export default ({ list, showPodcastLinks }) => (
  <Wrapper>
    {list.map(({ author, date, link, name, title, purpose }) => {
      console.log({ link });

      return (
        <Item>
          <CardFlex>
            <CardMeta>
              {moment(date).format("DD MMMM YYYY")} &nbsp;&nbsp;&nbsp; {author}
            </CardMeta>
          </CardFlex>
          <CardFlex>
            <div style={{ "min-width": "90%" }}>
              <A href={link}>
                <CardHeading>
                  {wordLimit(name || title, purpose)[0]}
                </CardHeading>
                <CardHeading.italic
                  dangerouslySetInnerHTML={{ __html: purpose }}
                />
              </A>
            </div>
            {showPodcastLinks && <Links />}
          </CardFlex>
        </Item>
      );
    })}
  </Wrapper>
);
