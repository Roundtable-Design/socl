//Import from package.json
import React from "react";
//Import from components
import Section from "@component/Section";

//Crafting the section for the calendar page
export default (props) => (
  <Section nopad="false">
    <Section.Image
      style={{ maxHeight: "300px !important" }}
      src={require("../../assets/images/people.jpg")}
    />
    <Section.Body>
      <Section.Text>
        <Section.Heading>Events</Section.Heading>
        <Section.Title></Section.Title>
        <p>
          The School of Contemplative Life offers events and programmes that
          teach contemplative practice for compassionate living and social
          action. You can participate either by attending in-person events or
          online. Webcasts are available for some events which can be streamed
          live and for a limited time following the event. If you would be
          interested in learning more about us hosting an event for your group,
          please get in touch.
        </p>
      </Section.Text>

      <Section.Link to="#"></Section.Link>
    </Section.Body>
  </Section>
);
