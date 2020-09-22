//Import from package.json
import React from 'react'
//Import from components
import Section from '@component/Section'


//Crafting the section for story
export default ({using}) => using.map(section => (
  <Section reverse={section.reverse}>
    <Section.Image src={section.image}/>

    <Section.Body>

      <Section.Text>
        <Section.Heading>{section.name}</Section.Heading>
        <Section.Title>{section.title}</Section.Title>
        {section.text.map(s => <p>{s}</p>)}
      </Section.Text>

      <Section.Link to={section.link.url}>
        {section.link.text}
      </Section.Link>

    </Section.Body>

  </Section>
))
