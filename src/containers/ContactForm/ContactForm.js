import React, { Component } from "react";
import axios from "axios";

import "./ContactForm.scss";

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  };

  onChangeHandler = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  submitFormHandler = e => {
    e.preventDefault();
    const [name, email, message] = [
      this.state.name,
      this.state.email,
      this.state.message
    ];

    const formData = { name, email, message };

    //@TODO: send this formData to the server
  };

  render() {
    return (
      <div className="ContactForm">
        <form onSubmit={this.submitFormHandler} autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              className="form-control"
              required
              onChange={this.onChangeHandler}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              required
              onChange={this.onChangeHandler}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              className="form-control"
              id="message"
              onChange={this.onChangeHandler}
              value={this.state.message}
            />
          </div>
          <input type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}
