//Imports from package.json
import React from 'react'
import styled from 'styled-components'
import createBreakpoint from 'styled-components-breakpoint'
//Import from Story
import Sections from './Sections'
//Import from assets
import story from '@content/story'
//Import from components
import { SignUp } from '@component/Subscribe'
//Import from themes
import theme from '@/theme'
const breakpoint = createBreakpoint(theme.breakpoints)


//Div for padding between sections and sign-up
const Padding = styled.div`
  padding-top: 3rem;
  ${breakpoint('md')`padding: 0`};
`



export default props => (
  <div>
    <Sections using={story.sections}/>
    <Padding/>
    <SignUp/>
  </div>
)
