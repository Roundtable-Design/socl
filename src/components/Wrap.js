import styled from 'styled-components'
import theme from '@/theme'
const breakpoint = theme.breakpoint;


// Wrapper for the site

export default styled.div`
  width: 89vw;
  margin: 0 auto;

  ${breakpoint('md')`
    max-width: 1024px;
  `}

  ${breakpoint('lg')`
    max-width: 1370px;
  `}
`
