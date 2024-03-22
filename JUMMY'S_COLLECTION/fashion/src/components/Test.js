import React, { useState } from "react";
import { Table } from "react-bootstrap";

function Test() {
  const [input, setInput] = useState("");
  const [value, setValue] = useState([]);

  const handleClick = () => {
    setValue([...value, input]);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <div>
        <input type='text' onChange={handleChange} />
        <button className='btn btn-primary' onClick={handleClick}>
          Submit
        </button>
      </div>
      <div>
        <Table></Table>
        {value.map((text) => {
          return <li>{text}</li>;
        })}
      </div>
    </>
  );
}

export default Test;
