/* eslint-disable no-loop-func */
import React, { Component } from "react";
import axios from "axios";
import subtractTime from "./subtract-time.js";
import View from "./View.js";
import Counter from "./Counter.js";
import Person from "./Person.js";
import "./style.css";

class App extends Component {
  state = { birthdate: 0, dateInput: 0, monthInput: 0, apiData: [] };

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
    ///API call
    const APImonth = parseInt(this.state.monthInput) + 1;
    axios
      .get(
        `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${APImonth}/${this.state.dateInput}`
      )
      .then((res) => {
        console.log(res.data.births[0]);
        this.setState({ apiData: res.data.births });
      });
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
        <h2>You Share a Birthday With</h2>
        {this.state.apiData.map((e, index) => {
          return <Person data={e} key={index} />;
        })}
      </>
    );
  }
}

export default App;
