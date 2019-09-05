import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 0 };
  }

  validate = event => {
    if (event.target.value <= 0) {
      alert("Check the Amount");
    } else {
      this.setState({ status: 1 });
    }
  };

  newMethod() {
    let classes = "btn btn-";
    classes += this.state.status === 0 ? "primary disabled" : "primary";
    return classes;
  }
  here() {
    let address = "http://localhost:8001/error";
    if (this.state.status === 1) {
      address = "http://localhost:8001/entry";
    }
    return address;
  }

  render() {
    return (
      <div
        className="btn btn-warning"
        style={{ height: "1000px", width: "2500px" }}
      >
        <form method="POST" action={this.here()}>
          <div
            style={{
              marginTop: "200px",

              marginRight: "1000px"
            }}
            className="btn btn-danger"
          >
            <h1 className="alert alert-primary" style={{ marginTop: "20px" }}>
              {" "}
              Please Scan your Aadhar Card{" "}
            </h1>

            <br></br>
            <input
              type="text"
              name="aadharno"
              className="alert alert-success"
              placeholder="  Aadhar Number here . . ."
            ></input>
            <br></br>
            <br></br>
            <input
              onChange={this.validate}
              type="number"
              name="amount"
              className="alert alert-success"
              placeholder="  Amount in Rupees"
            ></input>
            <br></br>
            <br></br>
            <input type="submit" className={this.newMethod()}></input>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
