import React, { Component } from "react";
import logo from "../assets/redbus_india_logo.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-md-6 logo">
                <img src={logo} alt="logo"></img>
              </div>
              <div className="col-md-6">
                <span className="login">Login</span>
                <span className="login">Sign up</span>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <ul>
                  <li>Home</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
