import React from "react";
import Form from "react-bootstrap/Form";
import "./SignUp.css";
import Header from "../components/Header";

function SignUp() {
  return (
    <>
      <Header />
      <div>
        <Form>
          <h3 className='sign'>Sign Up</h3>
          <div className='mb-1 signup p-2'>
            <label htmlFor='Name' className='label'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              className='form-control w-50 rounded-0'
            />
            <label htmlFor='Name' className='label'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='form-control w-50 rounded-0'
            />
            <label htmlFor='Name' className='label'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='text-center'>
            <button className='btn btn-success mx-auto mt-1'>Submit</button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
