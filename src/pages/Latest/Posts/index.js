//Imports from styles
import { Fader, PostContainer, PostsSection, PostsWrapper } from "./styles";

//Import from latest
import Card from "../Card";
//Import from package.json
import React from "react";
import breakpoint from "styled-components-breakpoint";
import moment from "moment";
import showDate from "@helper/showDate";
import styled from "styled-components";
import theme from "../../../theme";
//Imports from helpers
import wordLimit from "@helper/wordLimit";

class Swiper extends React.Component {
  /*Getting data that has been put into the class*/
  constructor(props) {
    super(props);

    /* limit to 5 items */
    this.postList = props.items;
  }
  /*Defining rendering parameters*/
  render() {
    const params = {
      rebuildOnUpdate: true,
      noSwiping: false,
      shouldSwiperUpdate: true,
    };

    return (
      <div {...params}>
        <PostsSection>
          {/*Mapping postlist to produce a card for each array inside*/}
        </PostsSection>
      </div>
    );
  }
}

const Row = styled.div`
  ${theme.breakpoint("xs", "md")`
    width: 645px;
    justify-content: space-between;
    display: flex;
    ${Card} {
      width: 200px;
    }
  `}

  ${theme.breakpoint("md")`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  `}
`;

export default ({ postList }) => {
  return (
    <PostsWrapper>
      <PostsSection>
        <Row>
          {Object.values(postList).map((post, index) => (
            <Card
              fluid
              title={wordLimit(post.name, post.purpose)[0]}
              purpose={wordLimit(post.name, post.purpose)[1]}
              meta={
                post.author +
                (post.date
                  ? ", " + moment(post.date).format("DD MMMM YYYY")
                  : "")
              }
              src={post.image}
              link={post.link}
            />
          ))}
        </Row>
      </PostsSection>
    </PostsWrapper>
  );
};
