import styled, { css } from "styled-components";

//Import from package.json
import React from "react";
import Section from "@component/Section";
//Import from components
import Text from "@component/Text";
import testimonials from "@content/testimonials";
//import from theme
import theme from "@/theme";

const breakpoint = theme.breakpoint;

const mountain =
  "https://images.unsplash.com/photo-1579802063117-87cd2ad50a88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

//Styling for the image in testimonials
const Image = styled(Section.Image)`
  display: none;
  ${breakpoint("md")`display: block`};
`;

//Styling for profile picture wrapper
const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${breakpoint("md")`max-width: 65%`};
  letter-spacing: 0.5;
  word-spacing: 1;
  margin-top: 1.5rem;
`;

//Quote marks for the testimonials
const Quote1 = styled.span`
  float: left;
  padding-top: 0.47rem;
  margin: -0.5rem;
  font-size: ${(props) => props.theme.size.medium};
`;

//Styling for the profile picture
Profile.picture = styled.div`
  width: 100%;
  min-width: 4.4rem;
  min-height: 4.4rem;
  max-width: 4.4rem;
  max-height: 4.4rem;
  margin-right: 1rem;
  background-size: cover;
  background-image: url(${(props) => props.src});
  border-radius: 50%;
  display: inline-block;
`;

//Grid for the testimonial section
const Quote = styled(Section)`
  ${breakpoint("md")`
    ${(props) =>
      props.index === 0 &&
      css`
        grid-template-areas: "image image image image image image . body body body body ." !important;
      `}

    padding-top: ${(props) => props.index > 0 && "6rem"};
  `}
`;

export default (props) => (
  <div>
    {testimonials.map((current, index) => (
      <Quote {...props} nopad="true" index={index}>
        <Image src={current.image} />

        <Section.Body>
          <Section.Text>
            <Section.Heading>
              {!index && "Support for the School of Contemplative Life"}
            </Section.Heading>
            <Section.Title></Section.Title>
            <Quote1>&quot;</Quote1>
            {current.paragraphs.map((text) => (
              <p>{text}</p>
            ))}
          </Section.Text>

          <Profile>
            <Profile.picture src={current.picture} />
            <Text.Sans>{current.author}</Text.Sans>
          </Profile>
        </Section.Body>
      </Quote>
    ))}
  </div>
);
