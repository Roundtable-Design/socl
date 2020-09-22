import { PostWrapper, PreviousWrapper, SectionHeading } from "./Latest/styles";

import ActivityIndicator from "../components/ActivityIndicator";
import Featured from "./Latest/Featured";
import Grid from "@component/Grid";
import Posts from "./Latest/Posts";
import Previous from "./Latest/Previous";
import React from "react";
import Section from "@component/Section";
import { fetchPodcastEpisodes } from "../scripts/podcast";
import styled from "styled-components";

const Link = styled(Section.Link)``;

const delimiter = 5;

export default () => {
  const [episodes, setEpisodes] = React.useState();

  React.useEffect(() => {
    (async function () {
      const episodes = await fetchPodcastEpisodes();

      setEpisodes(episodes);
    })();
  }, []);

  return episodes ? (
    <Grid>
      <Featured
        image={episodes[0].image}
        author={episodes[0].author}
        date={episodes[0].date}
        title={episodes[0].name}
        slug={episodes[0].purpose}
        page={"Latest episode"}
      />

      <PostWrapper>
        <SectionHeading>Recent episodes</SectionHeading>
        <Posts postList={episodes.slice(1, delimiter)} />
      </PostWrapper>

      <PreviousWrapper>
        <SectionHeading>Previous episodes</SectionHeading>
        <Previous showPodcastLinks list={episodes.slice(delimiter)} />
        <Link to="https://socl.podbean.com/" nopad>
          See more episodes
        </Link>
      </PreviousWrapper>
    </Grid>
  ) : (
    // <Panel />
    <ActivityIndicator />
  );
};

// <Latest
//   type='episodes'
//   title="Listen to our podcast at home or on the go."
//   page="Latest Episode"
//   subheading="Recent episodes"
//   link='#'
// />
