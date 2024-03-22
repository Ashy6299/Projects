import { React, useState } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Counter() {
  const [Counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  return (
    <>
      <div className='container'>
        <div>
          <div className='col-6 mt-5'>
            <input
              type='number'
              name=''
              id=''
              className='form-control'
              placeholder='enter number'
              onChange={(e) => setInput(Number(e.target.value))}
            />
          </div>
          <div className='col mt-4 '>
            <Typography variant='h3'>{Counter}</Typography>
            <Button
              onClick={() => {
                setCounter(Counter + input);
              }}
            >
              Increament
            </Button>
            <Button
              onClick={() => {
                if (Counter - 1 >= 0) setCounter(Counter - input);
              }}
            >
              Decreament
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
