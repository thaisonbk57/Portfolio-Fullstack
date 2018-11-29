import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Layout from "./hocs/Layout/Layout";
import Nav from "./components/Nav/Nav";
import NavToggle from "./components/NavToggle/NavToggle";

class App extends Component {
  state = {
    showNav: false
  };

  toggleNavHandler = () => {
    this.setState({
      showNav: !this.state.showNav
    });
  };

  render() {
    let nav = this.state.showNav ? <Nav /> : null;

    return (
      <div className="App">
        <Layout>
          {nav}
          <NavToggle toggleNavHandler={this.toggleNavHandler} />
          <Switch>
            <Route path="/" exact render={() => <h1>HOME</h1>} />
            <Route path="/about" exact render={() => <h1>ABOUT</h1>} />
            <Route path="/projects" exact render={() => <h1>PROJECTS</h1>} />
            <Route path="/contact" exact render={() => <h1>CONTACT</h1>} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
