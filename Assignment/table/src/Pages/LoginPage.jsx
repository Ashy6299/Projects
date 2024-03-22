import React from "react";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
function LoginPage() {
  return (
    <>
      <Header />
      <div className='mt-3'>
        <Form className='border border-5 border-success w-50'>
          <div className='mb-1 p-2'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='mb-3 p-2'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='form-control w-50 rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-success ms-3 w-50'>
            Submit
          </button>
          <p className='ms-3 mt-2'>
            You have agreed to our terms and conditions
          </p>
          <button className='btn btn-default border w-50 ms-3 bg-light'>
            Create Account
          </button>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;
