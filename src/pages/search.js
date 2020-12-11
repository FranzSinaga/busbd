import React, { Component } from "react";
import { Month } from "../date";
import { withRouter } from "react-router-dom";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      date: "",
    };
    this.load = this.load.bind(this);
  }

  load() {
    const id = this.props.match.params.id;
    fetch(`https://bdbusticket.firebaseio.com/buses/${id}.json`)
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }
  componentDidMount() {
    this.load();
    var date = new Date(this.props.match.params.do);
    var nDate = `${
      Month[date.getMonth() + 1]
    } ${date.getDate()}, ${date.getFullYear()}`;
    this.setState({ date: nDate });
  }
  render() {
    return (
      <div className="container mt-4 ">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row text-center">
              <h6 className=" text-capitalize col-md-12 mb-3 text-center">
                {this.props.match.params.lf} - {this.props.match.params.gt} On{" "}
                {this.state.date}
              </h6>
            </div>
            <div className="row mb-3 card card-body">
              <div className="row">
                <div className="col-md-4 text-right">
                  <p>Filter By</p>
                </div>
                <div className="form-group col-md-4">
                  <select className="form-control form-control-sm">
                    <option>By Bus</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <select className="form-control form-control-sm">
                    <option>By Type</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row search-result mb-5 pb-5">
              <table className="table">
                <thead>
                  <tr>
                    <th>Bus Name</th>
                    <th>Dept. Time</th>
                    <th>Coach Type</th>
                    <th>Seats Availiable</th>
                    <th>Fare</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(this.state.data).map((key) => (
                    <tr key={key}>
                      <td>{this.state.data[key].name}</td>
                      <td>{this.state.data[key].time}</td>
                      <td>{this.state.data[key].coach_type}</td>
                      <td>{this.state.data[key].seat}</td>
                      <td>{this.state.data[key].time}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          View Seats
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
