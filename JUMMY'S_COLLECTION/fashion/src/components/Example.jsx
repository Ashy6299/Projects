import React, { useState } from "react";
import { Box, FormGroup, TextField } from "@mui/material";

function Example() {
  const [input, setInput] = useState([]);
  const [additem, setAddItem] = useState("");
  function handleChange(event) {
    setAddItem(event.target.value);
  }
  function handleClick() {
    setInput([...input, additem]);
  }
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-7 col-lg-2'>
          <input
            type='text'
            className='form-control ms-5'
            //style={{ width: "250px", margin: "2px" }}
            onChange={handleChange}
          />
        </div>
        <div className='col-4 col-lg-2'>
          <button className='btn btn-primary me-5' onClick={handleClick}>
            Add Task
          </button>
        </div>
      </div>
      <div>
        <ol>
          {input.map((inputs) => {
            return <li>{inputs}</li>;
          })}
        </ol>
      </div>
      <div className='row'>
        <div className='col col-lg-2'>
          <Box component='form' sx={{ m: 2, width: "50%" }}>
            <TextField type='text' label='FirstName'></TextField>
            <TextField type='text' label='LastName'></TextField>
            <TextField type='text' label='Email'></TextField>
            <TextField type='text' label='PhoneNumber'></TextField>
          </Box>
        </div>
      </div>
      <div className='row'>
        <div className='col col-lg-2'>
          <FormGroup>
            <TextField type='text'></TextField>
          </FormGroup>
        </div>
      </div>
    </>
  );
}

export default Example;
