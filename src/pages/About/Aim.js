//Import from package.json
import React from "react";
//Import from components
import Section from "@component/Section";

//Crafting the section for about
export default (props) => (
  <div>
    <Section nopad="true" reverse={true}>
      <Section.Image src={require("../../assets/images/fern.jpg")} />

      <Section.Body>
        <Section.Text>
          <Section.Heading>Our Aims</Section.Heading>
          <Section.Title></Section.Title>
          <p>
            {" "}
            <span style={{ "font-style": "italic" }}>
              {" "}
              ‘Contemplative practice’{" "}
            </span>{" "}
            refers to the spiritual art of turning to the sacred.{" "}
          </p>
          <p>
            {" "}
            The School of Contemplative Life is dedicated to the cultivation of
            this most simple and essential spiritual art and journey to the
            depths of our being, to the discovery of our common home in God, to
            be a place of healing in the world.{" "}
          </p>
        </Section.Text>
      </Section.Body>
    </Section>
  </div>
);
