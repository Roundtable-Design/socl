import React from "react"
import { ThemeProvider } from "styled-components"
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Loader from '@component/Loader'
import Nav from "@component/Nav"
import Foot from "@component/Footer"
import Wrap from '@component/Wrap'

import Home from "@page/Home"
import About from '@page/About'
import Story from '@page/Story'
import Blog from '@page/Blog'
import Episodes from '@page/Episodes'
import Calendar from '@page/Calendar'
import Unknown from '@page/Unknown'
import Guides from '@page/Guides'

import theme from '@/theme'


const App = props => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Loader>
        <Wrap>
          <Nav/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exect path='/story' component={Story}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/guides' component={Guides}/>
            <Route exact path='/podcast' component={Episodes}/>
            <Route exact path='/events' component={Calendar}/>
            <Route component={Unknown}/>
          </Switch>
        </Wrap>
        <Foot/>
      </Loader>
    </ThemeProvider>
  </BrowserRouter>
)


export default App
