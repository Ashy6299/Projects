import { React, useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function Form() {
  const [inputed, setInputed] = useState([]);
  const [input, setInput] = useState({
    firstname: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
    console.log(handleChange);
  };
  let { firstname, surname, email, phone, password, address } = input;
  function handleClick() {
    console.log(handleClick);
    setInputed([
      ...inputed,
      { firstname, surname, email, phone, password, address },
    ]);
    setInput({
      firstname: "",
      surname: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    });
  }

  return (
    <>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 2, width: "30ch" },
        }}
        noValidate
        autoComplete='off'
      >
        <div className='mt-3'>
          <TextField
            type='text'
            label='firstname'
            onChange={handleChange}
            name='firstname'
            value={input.firstname}
          />
          <TextField
            type='text'
            label='surname'
            onChange={handleChange}
            name='surname'
            value={input.surname}
          />
          <TextField
            label='Password'
            type='password'
            onChange={handleChange}
            name='password'
            value={input.password}
          />
          <TextField
            type='text'
            label='email'
            name='email'
            onChange={handleChange}
            value={input.email}
          />
          <TextField
            label='Number'
            type='number'
            onChange={handleChange}
            name='phone'
            value={input.phone}
          />

          <TextField
            type='text'
            label='address'
            name='address'
            onChange={handleChange}
            value={input.address}
          />
          <Button
            sx={{ marginTop: 4, fontVariant: "h3", fontSize: 20 }}
            onClick={handleClick}
          >
            Submit
          </Button>
        </div>
      </Box>
      <div className='container'>
        <table className='table'>
          <tr>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Password</th>
          </tr>
          <tbody>
            {inputed &&
              inputed.map((item, i) => {
                return (
                  <tr>
                    <td>{item.firstname}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Form;
