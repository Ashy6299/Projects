import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "../Components/LoginValidation";

function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
    console.log(values);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setValues(validation(values));
  };
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action='' onSubmit={handleSubmit}>
          <h2>Sign-In</h2>
          <div className='mb-3'>
            <label htmlFor='Email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
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
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>
            <strong>Login</strong>
          </button>
          <p>You agree to our terms and conditions</p>
          <Link
            to='/signup'
            className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
