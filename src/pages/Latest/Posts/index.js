//Imports from styles
import { Fader, PostContainer, PostsSection, PostsWrapper } from "./styles";

//Import from latest
import Card from "../Card";
//Import from package.json
import React from "react";
import moment from "moment";
import showDate from "@helper/showDate";
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
          {Object.values(this.postList).map((post, index) => (
            <PostContainer>
              <Card
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
            </PostContainer>
          ))}
        </PostsSection>
      </div>
    );
  }
}

export default ({ postList }) => {
  return (
    <PostsWrapper>
      <Fader />
      <PostsSection>
        <Swiper items={postList} />
      </PostsSection>
    </PostsWrapper>
  );
};
