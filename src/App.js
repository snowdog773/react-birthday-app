/* eslint-disable no-loop-func */
import React, { Component } from "react";
import subtractTime from "./subtract-time.js";
import View from "./View.js";

class App extends Component {
  state = { birthdate: 0, dateInput: 0, monthInput: 0 };

  startTimer = () => {
    let newBirthdate =
      new Date(2022, this.state.monthInput, this.state.dateInput).getTime() -
      new Date().getTime();
    setInterval(() => {
      this.setState({ birthdate: newBirthdate });
      newBirthdate = newBirthdate - 1000;
    }, 1000);
  };

  render() {
    return (
      <>
        <p>{JSON.stringify(this.state)}</p>
        <View
          startTimer={() => this.startTimer()}
          dateInput={(e) => {
            this.setState({ dateInput: e.target.value });
          }}
          monthChange={(e) => {
            this.setState({ monthInput: e.target.value });
          }}
        />
        <h2>{subtractTime(this.state.birthdate)}</h2>
      </>
    );
  }
}

export default App;
