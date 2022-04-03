/* eslint-disable no-loop-func */
import React, { Component } from "react";
import subtractTime from "./subtract-time.js";
import View from "./View.js";
import Counter from "./Counter.js";
import "./style.css";

class App extends Component {
  state = { birthdate: 0, dateInput: 0, monthInput: 0 };

  startTimer = () => {
    let year = new Date().getFullYear();
    let newBirthdate;
    if (
      new Date(year, this.state.monthInput, this.state.dateInput) < new Date()
    ) {
      newBirthdate =
        new Date(
          year + 1,
          this.state.monthInput,
          this.state.dateInput
        ).getTime() - new Date().getTime();
    } else {
      newBirthdate =
        new Date(year, this.state.monthInput, this.state.dateInput).getTime() -
        new Date().getTime();
    }
    setInterval(() => {
      this.setState({ birthdate: newBirthdate });
      newBirthdate = newBirthdate - 1000;
    }, 1000);
  };

  render() {
    const [years, days, hours, mins, seconds] = subtractTime(
      this.state.birthdate
    );
    return (
      <>
        <View
          startTimer={() => this.startTimer()}
          dateInput={(e) => {
            this.setState({ dateInput: e.target.value });
          }}
          monthChange={(e) => {
            this.setState({ monthInput: e.target.value });
          }}
        />
        <Counter days={days} hours={hours} mins={mins} seconds={seconds} />
      </>
    );
  }
}

export default App;
