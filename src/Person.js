import React from "react";

const Person = (props) => {
  const { text, pages } = props.data;
  const { extract, originalImage } = pages[0];
  //   const { source } = originalImage;
  return (
    <>
      <h3>{text}</h3>
      <p>{extract}</p>
      {/* <img src={source} alt={text} /> */}
    </>
  );
};

export default Person;
