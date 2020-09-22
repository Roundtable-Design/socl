//Imports from Package.json
import styled from 'styled-components'

//Wrapper for previous
export const Wrapper = styled.div`
  padding-top: 1rem;
  padding-bottom: 3.3rem;
`

//Wrapper around each individual item 
export const Item = styled.div`
  padding-bottom: 2.3rem;
  border-bottom: 1px solid #cacaca;

  :first-child {
    border-top: 1px solid #cacaca;
  }

  .meta {
    padding-bottom: 1rem;
  }
`
