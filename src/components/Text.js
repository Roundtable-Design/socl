import styled from 'styled-components'


// Standard text of website

const Text = styled.h1`
  font-family: ${props => props.theme.font.standard};
  font-size: ${props => props.theme.size.standard};
  font-weight: normal;
`


// Sans-serif text

Text.Sans = styled(Text)`
  font-family: ${props => props.theme.font.sans};
  font-weight: bold;
  font-size: 0.556rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`


// Italic text

Text.Italic = styled(Text)`
  font-style: italic;
`


export default Text
