import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import MyWorks from "./pages/MyWorks/MyWorks";
import Contact from "./pages/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/projects" exact component={MyWorks} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
