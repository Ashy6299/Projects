import React, { useState } from "react";

function Jobs(props) {
  const [count, setCount] = useState(0);

  function handleClick1() {
    setCount(count + 1);
  }

  function handleClick2() {
    setCount(count - 1);
  }
  return (
    <div>
      {props.salary} {props.position}
      <button onClick={handleClick1}>Increase</button>
      <button onClick={handleClick2}>Decrease</button>
      <button>Set to Zero</button>
      {count}
    </div>
  );
}

export default Jobs;
