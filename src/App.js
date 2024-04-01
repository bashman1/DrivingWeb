import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import AboutUs from "./pages/AboutUs";
import Landing from "./pages/Landing";
import OurWork from "./pages/OurWork";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Blog from "./pages/Blog";
import GetInTouch from "./pages/GetInTouch";

import Nav from "./components/Nav";

//Router
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Careers from "./pages/Careers";
//Animation

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
        <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/careers">
            <Careers />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/get-in-touch">
            <GetInTouch />
          </Route>
          
          <Redirect exact from="/" to="/" />
        </Switch>
    </div>
  );
}

export default App;
