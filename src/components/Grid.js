import styled from 'styled-components'
import theme from '@/theme'
const breakpoint = theme.breakpoint;


export default styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;

  ${breakpoint('md')`
    grid-template-columns: repeat(12, 1fr);
  `}
`
