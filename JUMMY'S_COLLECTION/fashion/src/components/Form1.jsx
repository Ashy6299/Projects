import React from "react";
import "./Form1.css";

function Form1() {
  return (
    <>
      <div className='container'>
        <form className='form'>
          <input type='text' className='textfield'></input>
          <input type='submit' className='submit-btn' value='Submit'></input>
        </form>
      </div>
    </>
  );
}

export default Form1;
