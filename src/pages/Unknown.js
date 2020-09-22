//The 404 error page
//Imports from package.json
import React from 'react'
import styled from 'styled-components'
//Import from components
import Text from '@component/Text'


//Styling for the Title
const Headline = styled(Text)`
  font-size: 1.7rem;
  color: ${props => props.theme.color.forrest};
`


//Container for the text
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


//Error page format
export default props => (
  <Container>
    <Headline>Page not found</Headline>
  </Container>
)
