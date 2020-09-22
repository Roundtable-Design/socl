//Import from package.json
import React from 'react'
//Import base page from Latest
import Latest from '@page/Latest'


//Inputing Blog data
export default props => (
  <Latest
    type="posts"
    title="Read our blog at home or on the go."
    page="Latest Post"
    subheading="Recent posts"
    link='#'
  />
);
