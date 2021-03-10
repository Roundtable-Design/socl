import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "@page/About";
import Blog from "@page/Blog";
import Calendar from "@page/Calendar";
import CookieBanner from "./components/CookieBanner";
import Episodes from "@page/Episodes";
import Foot from "@component/Footer";
import Guides from "@page/Guides";
import Home from "@page/Home";
import Loader from "@component/Loader";
import Nav from "@component/Nav";
import Privacy from "@page/Privacy";
import React from "react";
import Story from "@page/Story";
import TermsAndConditions from "@page/TermsAndConditions";
import { ThemeProvider } from "styled-components";
import Unknown from "@page/Unknown";
import Wrap from "@component/Wrap";
import theme from "@/theme";

const App = (props) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Loader>
        <Wrap>
          <Nav />
          {/* <CookieBanner /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exect path="/story" component={Story} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/guides" component={Guides} />
            <Route exact path="/podcast" component={Episodes} />
            <Route exact path="/events" component={Calendar} />
            <Route path="/privacy" component={Privacy} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />

            <Route component={Unknown} />
          </Switch>
        </Wrap>
        <Foot />
      </Loader>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
