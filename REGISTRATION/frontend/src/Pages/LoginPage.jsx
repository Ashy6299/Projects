import React from "react";
import ButtonAppBar from "../Components/ButtonAppBar";
import { Button, Typography } from "@mui/material";

function Login() {
  return (
    <>
      <ButtonAppBar />

      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 order-lg-2'>
            <div
              className='mt-3 d-flex justify-content-center m-auto'
              style={{
                width: "30vw",
                backgroundColor: "antiquewhite",
                fontFamily: "cursive",
                flexDirection: "column",
              }}
            >
              <div className='mt-4 mb-4'>
                <Typography variant='h4' align='center' fontFamily={"cursive"}>
                  Login_Page
                </Typography>
              </div>
              <div className='row'>
                <div className='col-3 col-lg-3 p-3 ms-3'>
                  <Typography variant='h5' fontFamily={"cursive"}>
                    Email
                  </Typography>
                </div>
                <div className='col-3 col-4-lg'>
                  <input
                    type='text'
                    className='form-control ms-0 p-2 mt-0'
                    placeholder='Name'
                    style={{
                      width: "10rem",
                      backgroundColor: "inherit",
                      borderBottom: "1px solid black",
                      borderTop: "none",
                      borderLeft: "none",
                      outline: "none",
                      borderRight: "none",
                    }}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-3 p-3 ms-3'>
                  <Typography variant='h5' fontFamily={"cursive"}>
                    Password
                  </Typography>
                </div>
                <div className='col-3 p-2'>
                  <input
                    type='text'
                    className='form-control pb-0 ms-5 mt-1'
                    placeholder='Password'
                    style={{
                      width: "10rem",
                      backgroundColor: "inherit",
                      borderBottom: "1px solid black",
                      borderTop: "none",
                      borderLeft: "none",
                      outline: "none",
                      borderRight: "none",
                    }}
                  />
                </div>
              </div>
              <div className='d-flex justify-content-center align-content-center mb-3'>
                <Button variant='outlined' sx={{ borderColor: "black" }}>
                  login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
