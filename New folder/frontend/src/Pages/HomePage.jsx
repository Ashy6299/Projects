import React from "react";
import Header from "../Components/Header";
import { Button, Typography } from "@mui/material";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className='mt-4 d-none d-sm-block d-lg-block m-6'>
        <Typography variant='h4'>Welcome to my homepage</Typography>
        <div className='mt-3'>
          <Typography variant='h4'>Login</Typography>
        </div>
        <div className='mt-2' style={{ margin: 200 }}>
          <div>
            <input
              type='text'
              className='form-control mb-4'
              placeholder='FirstName'
            />
          </div>
          <div>
            <input
              type='text'
              className='form-control mb-4'
              placeholder='LastName'
            />
          </div>
          <div>
            <input
              type='text'
              className='form-control mb-4'
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type='text'
              className='form-control mb-4'
              placeholder='PhoneNumber'
            />
          </div>
          <Button variant='outlined'>submit</Button>
        </div>
      </div>
    </>
  );
};
