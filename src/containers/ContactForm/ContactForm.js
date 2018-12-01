import React, { Component } from "react";
import axios from "axios";

import "./ContactForm.scss";

const axiosInstance = axios.create({
  baseURL: "https://portfolio-server-side.herokuapp.com",
  timeout: 5000
});

export default class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    sending: false,
    serverMsg: ""
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
    this.setState({
      sending: true
    });
    const [name, email, message] = [
      this.state.name,
      this.state.email,
      this.state.message
    ];

    const formData = { name, email, message };

    axiosInstance
      .post("/contact/message", formData)
      .then(res => {
        console.log(res);
        this.setState({
          sending: false,
          name: "",
          email: "",
          message: "",
          serverMsg: "Your message was sent!"
        });

        setTimeout(() => {
          this.setState({
            serverMsg: ""
          });
        }, 3000);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          sending: false,
          serverMsg: "Something went wrong! Please try again later!"
        });

        setTimeout(() => {
          this.setState({
            serverMsg: ""
          });
        }, 3000);
      });
  };

  render() {
    return (
      <div className="ContactForm">
        <form onSubmit={this.submitFormHandler}>
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
              required
            />
          </div>
          <input
            type="submit"
            value={this.state.sending ? "Sending..." : "SEND"}
            disabled={this.state.sending ? true : false}
          />
          <span style={{ color: "white", fontSize: "18px" }} className="px-5">
            {this.state.serverMsg}
          </span>
        </form>
      </div>
    );
  }
}
