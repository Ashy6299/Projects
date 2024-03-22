import React from "react";
import Form from "react-bootstrap/Form";
import "./FormPage.css";
import Header from "../components/Header";

function FormPage() {
  return (
    <>
      <Header />
      <div className='mt-3'>
        <Form className='border border-5 border-success w-50'>
          <div className='mb-1 p-2'>
            <label htmlFor='Name'>
              <strong>Name</strong>
            </label>
            <input
              type='name'
              placeholder='Name'
              name='email'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='mb-3 surname p-2'>
            <label htmlFor='surname'>
              <strong>Surname</strong>
            </label>
            <input
              type='surname'
              placeholder='Surname'
              name='Surname'
              className='form-control bar w-50 rounded-0'
            />
          </div>
          <div className='mb-1 p-2'>
            <label htmlFor='Student no'>
              <strong>Student no</strong>
            </label>
            <input
              type='student no'
              placeholder='Student no'
              name='student no'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='mb-3 p-2'>
            <label htmlFor='Contact'>
              <strong>Contact</strong>
            </label>
            <input
              type='contact'
              placeholder='Contact'
              name='contact'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='mb-3 p-2'>
            <label htmlFor='module code'>
              <strong>Module Code</strong>
            </label>
            <input
              type='module code'
              placeholder='module code'
              name='module code'
              className='form-control w-50 rounded-0'
            />
          </div>
          <div className='mb-1 p-2'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Email'
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
          <button className='btn btn-default border w-50 ms-3 bg-light rounded-0'>
            Create Account
          </button>
        </Form>
      </div>
    </>
  );
}

export default FormPage;
