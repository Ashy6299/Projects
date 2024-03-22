import React from "react";
import { Link } from "react-router-dom";

function SignUpPage() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action=''>
          <h2>Sign-Up</h2>
          <div className='mb-3'>
            <label htmlFor='Name'>
              <strong>Name</strong>
            </label>
            <input
              type='Name'
              placeholder='Enter Name'
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Email'>
              <strong>Email</strong>
            </label>
            <input
              type='Email'
              placeholder='Enter Email'
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control rounded-0'
            />
          </div>
          <button className='btn btn-success w-100 rounded-0'>
            <strong>Create Account</strong>
          </button>
          <p>You agree to our terms and conditions</p>
          <Link
            to='/login'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
