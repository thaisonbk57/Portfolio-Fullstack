import React, { Component } from "react";

import "./Layout.scss";

import Nav from "./../../components/Nav/Nav";
import NavToggle from "./../../components/NavToggle/NavToggle";

export default class Layout extends Component {
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
      <div className="Layout">
        <header>
          {nav}
          <NavToggle toggleNavHandler={this.toggleNavHandler} />
        </header>
        <main>{this.props.children}</main>
        <footer>Footer</footer>
      </div>
    );
  }
}
