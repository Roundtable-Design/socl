//Imports from package.json
import styled from 'styled-components'
//Imports from components
import Text from '@component/Text'
//Imports from theme
import theme from '@/theme'
const breakpoint = theme.breakpoint;


//Styled text for a message in index.js
export default styled(Text)`
  font-size: 22px;
  color: ${props => props.theme.color.forrest};
  width: 100%;
  max-width: 27rem;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 6rem;
  ${breakpoint('md') `padding: 11rem 0;`}
`
