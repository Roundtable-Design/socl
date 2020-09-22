//Imports from package.json
import React from 'react'
//Imports from calendar
import Events from './Events'
import Overview from './Overview'

export default props => (
  <div>
    <Overview/>
    <Events/>
  </div>
)
