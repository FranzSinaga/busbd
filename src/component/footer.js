import React, { Component } from "react";
import footerpic from "../assets/sslcommerz_logo.png";
export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-md-6 ">
                <div className="card card-body block">
                  <h5 className="text-center mb-3">Popular Roads</h5>
                  <ul className="row">
                    <li className="col-md-6">
                      <a href="#">Dhaka to Dinajpur</a>
                    </li>
                    <li className="col-md-6">
                      <a href="#">Dhaka to Dinajpur</a>
                    </li>
                    <li className="col-md-6">
                      <a href="#">Dhaka to Nilphamari</a>
                    </li>
                    <li className="col-md-6">
                      <a href="#">Dhaka to Kurigram</a>
                    </li>
                    <li className="col-md-6">
                      <a href="#">Dhaka to Rangpur</a>
                    </li>
                    <li className="col-md-6">
                      <a href="#">Dhaka to Thakurgaon</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card card-body block">
                  <div id="why_buy">
                    <div className="info_right">
                      <h5 className="text-center mb-3">
                        Why buy tickets from us?
                      </h5>
                      <ul>
                        <li>
                          <b>Buy bus tickets</b> anytime from anywhere
                        </li>
                        <li>Pay by credit card, mobile banking or cash</li>
                        <li>Get tickets delivered to your doorstep</li>
                        <li>Dependable customer service </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5 mb-5 justify-content-center">
                <img src={footerpic} alt="footer"/>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
