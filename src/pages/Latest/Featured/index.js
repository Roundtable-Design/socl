//Import from styles
import { Heading, Image, ImageWrapper, Slug, TextWrapper } from "./styles";

import Insight from "@icon/insight.png";
import Podcasts from "@icon/podcasts.png";
//Import fom package.json
import React from "react";
//Imports from assets
import Spotify from "@icon/spotify.jpg";
import moment from "moment";
//Import from helper
import showDate from "@helper/showDate";
import wordLimit from "@helper/wordLimit";

export default ({ image, author, date, title, slug, page }) => {
  return (
    <React.Fragment>
      {/*MainImage*/}
      <Image src={image} />
      {/*Text imported from prismic*/}
      <TextWrapper>
        <Heading v="sans" style={{ "padding-bottom": "0.5rem" }}>
          {page}
        </Heading>
        <Heading v="small" style={{ "padding-bottom": "1.6rem" }}>
          {author}, {moment(date).format("DD MMMM YYYY")}
        </Heading>
        <Heading>
          {wordLimit(title, slug)[0]}{" "}
          <Slug dangerouslySetInnerHTML={{ __html: slug }} />
        </Heading>
        {/*Icons to external websites*/}
        <ImageWrapper pageTitle={page}>
          <a href="https://apps.apple.com/us/app/apple-podcasts/id525463029">
            <Image.Icon src={Podcasts} />
          </a>
          {/* <a href="https://insighttimer.com/chriswhittington/guided-meditations/forming-a-new-relationship-with-uncertainty">
          <Image.Bowl src={Insight}/>
        </a> */}
          <a href="https://www.spotify.com/uk/">
            <Image.Icon src={Spotify} />
          </a>
        </ImageWrapper>
      </TextWrapper>
    </React.Fragment>
  );
};
