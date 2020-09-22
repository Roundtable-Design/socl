//Import from package.json
import React from 'react'
//Import from Hero
import Hero from './Hero'
//Imports from components
import Intro from '@component/Intro'
import { SignUp } from '@component/Subscribe'

//Format of the homepage
export default props => (
  <div>
    <Hero/>
    <Intro/>
    <SignUp/>
  </div>
)
