import React from "react";

export default function ExcerciseThree() {
  const myFunction = () => {
    alert("Congratulations! You clicked on 1st button");
  };
  const myFunctiontwo = () => {
    alert("Congratulations! You clicked on 2nd button");
  };
  const myFunctionthree = () => {
    alert("Congratulations! You clicked on 3rd button");
  };
  return (
    <div>
      <button onClick={myFunction}>Button1</button>
      <button onClick={myFunctiontwo}>Button2</button>
      <button onClick={myFunctionthree}>Button3</button>
    </div>
  );
}
