import { PostWrapper, PreviousWrapper, SectionHeading } from "./styles";

//Imports from Latest
import Featured from "./Featured";
//Imports from components
import Grid from "@component/Grid";
import Loader from "@component/Loader";
import Posts from "./Posts";
import Previous from "./Previous";
//Latest is not a page in itself but a base page which is used by guides, blogs and podcast pages
//Imports from package.json
import React from "react";
import Section from "@component/Section";
//Import from helpers
import access from "@helper/access";
import initGA from "../../helpers/initGA";
import insightData from "@helper/insightData";
import parseEpisode from "@helper/parseEpisode";
import parsePost from "@helper/parseData";
import styled from "styled-components";

const LIMIT = 4;

//Stylink for links
const Link = styled(Section.Link)``;

//A block to show if everything hasn't loaded
const Panel = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default (props) => {
  const [content, setContent] = React.useState(null);
  /*Getting the data from prismic*/
  React.useEffect(
    function () {
      initGA(window.location);

      if (props.type === "episodes") {
        insightData().then((items) => {
          setContent(items.result.map(parseEpisode));
        });

        return;
      }

      access(props.type).then((items) => {
        setContent(items.map(parsePost));
      });
    },
    [props.type]
  );
  return (
    <React.Fragment>
      {/*Checks if there is content*/}
      {content ? (
        <Loader>
          <Grid>
            {/*Featured is the latest post given in the array*/}
            <Featured
              image={content[0].image}
              author={content[0].author}
              date={content[0].date}
              title={content[0].name}
              slug={content[0].purpose}
              page={props.page}
              link={content[0].link}
            />
            {/*The list of posts in the rest of the array*/}
            <PostWrapper>
              <SectionHeading>{props.subheading}</SectionHeading>
              <Posts postList={content.slice(1, LIMIT)} />
            </PostWrapper>

            {/* verticle list of previous posts. */}
            <PreviousWrapper>
              <SectionHeading>Previous {props.type}</SectionHeading>
              <Previous list={content.slice(LIMIT)} />
              {props.link && (
                <Link to={props.link} nopad>
                  See more {props.type}
                </Link>
              )}
            </PreviousWrapper>
          </Grid>
        </Loader>
      ) : (
        <Panel />
      )}
      {/*If not it shows an blank panel*/}
    </React.Fragment>
  );
};
