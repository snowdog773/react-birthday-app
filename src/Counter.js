import React from "react";

const Counter = (props) => {
  return (
    <>
      <ul>
        <li>Days</li>
        <li>Hours</li>
        <li>Minutes</li>
        <li>Seconds</li>
        <li>{props.days}</li>
        <li>{props.hours}</li>
        <li>{props.mins}</li>
        <li>{props.seconds}</li>
      </ul>
    </>
  );
};

export default Counter;
