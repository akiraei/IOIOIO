import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "./App.css";

import FrontPage from "./pages/FrontPage";
import IndexPage from "./pages/IndexPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path={"/"} component={FrontPage} />
        <Route path={"/index"} component={IndexPage} />
      </Router>
    );
  }
}

export default App;
