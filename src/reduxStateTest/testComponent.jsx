import React, { Component } from "react";
import { incrementAsync, decrementAsync } from "./testActions";
import { connect } from "react-redux";
import "../App.css";
const mapStateToProps = state => ({
  data: state.test.data,
  en: state.test.enable
});

const actions = {
  incrementAsync,
  decrementAsync
};

class TestComponent extends Component {
  render() {
    const { incrementAsync, decrementAsync, data, en } = this.props;
    console.log("Enable: ", en, data);
    return (
      <div className="App-header">
        <div className="App">
          <h1>Redux Test</h1>
          <h3>The answer is: {data}</h3>
         <div className="App">
         <button
            onClick={incrementAsync}
            style={{
              color: `${en ? "gray" : "green"}`,
              padding: "10px",
              cursor: "pointer",
              margin:"10px"
            }}
            disabled={en}
          >
            Increment
          </button>
          <button
            onClick={decrementAsync}
            style={{
              color: `${en ? "gray" : "red"}`,
              padding: "10px",
              cursor: "pointer"
            }}
            disabled={en}
          >
            Decrement
          </button>
         </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
