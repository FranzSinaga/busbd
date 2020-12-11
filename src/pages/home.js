import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import redBuss from "../assets/redBus-coupons-offers-1586.PNG";
import { withRouter } from "react-router-dom";
import { form, destination } from "../data";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gt_list: [],
      lf: "",
      gt: "",
      departing_on: "",
      isDisabled: true,
      date: "",
    };
    this.changelf = this.changelf.bind(this);
    this.changegt = this.changegt.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  changegt(event) {
    var value = event.target.value;
    this.setState({ gt: value });
  }

  changelf(event) {
    var key = event.target.value;
    if (key !== "") {
      this.setState({
        gt_list: form[key].gt,
        lf: form[key].lf,
      });
    } else {
      this.setState({
        gt_list: [],
        lf: "",
        gt: "",
      });
    }
  }

  validate() {
    if (
      this.state.gt !== "" &&
      this.state.fl !== "" &&
      this.state.date !== ""
    ) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  formSubmit(e) {
    e.preventDefault();
    var gt = this.state.gt;
    var lf = this.state.lf;
    var date = this.state.date;
    Object.keys(destination).forEach((key) => {
      if (destination[key].name === this.state.gt) {
        this.props.history.push(
          `/about/${destination[key].id}/${lf}/${gt}/${date}`
        );
      }
    });
  }

  componentDidMount() {
    var date = new Date();
    this.setState({ date: date });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gt !== this.state.gt || prevState.lf !== this.state.lf) {
      this.validate();
    }
  }

  render() {
    return (
      <div className="select-bus">
        <div className="overlap"></div>
        <div className="container">
          <div className="row justify-content-center pb-5 pt-3">
            <div className="col-md-5 block mt-3">
              <form onSubmit={this.formSubmit}>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label>Leaving From</label>
                    <select
                      onChange={this.changelf}
                      className="form-control form-control-sm"
                      name="leaving_from"
                    >
                      <option value="">Select Place</option>
                      {Object.keys(form).map((key) => (
                        <option key={key} value={key} id={form[key].lf}>
                          {form[key].lf}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group col-md-6">
                    <label>Going To</label>
                    <select
                      onChange={this.changegt}
                      className="form-control form-control-sm"
                      name="going_to"
                    >
                      <option value="">Select Place</option>
                      {this.state.gt_list.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label>Departing On</label>
                    {/* <input className="form-control form-control-sm ng-untouched ng-pristine ng-invalid"></input> */}
                    <DatePicker
                      className="form-control form-control-sm"
                      selected={this.state.date}
                      onChange={(date) => this.setState({ date: date })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={this.state.isDisabled}
                  className="btn btn-block mt-3 btn-search btn-sm"
                >
                  Search Busses
                </button>
              </form>
            </div>

            <div className="col-md-5 slider mt-3 ">
              <img className="img-fluid" src={redBuss} alt="red-bus" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
