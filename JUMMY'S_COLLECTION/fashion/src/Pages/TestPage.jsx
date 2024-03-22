import { Box, Button, TextField } from "@mui/material";
import { useState, React } from "react";

function TestPage() {
  const [input, setInput] = useState([]);
  const [entries, setEntries] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setEntries({ ...entries, [event.target.name]: event.target.value });
  };
  let { firstname, surname, password, email } = entries;
  const handleClick = () => {
    setInput([...input, { firstname, surname, email, password }]);
    setEntries({
      firstname: "",
      surname: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className='container'>
        <table className='table'>
          <tr className='table-row'>
            <th>First Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          <tbody>
            {input &&
              input.map((item, i) => {
                return (
                  <tr>
                    <td>{item.firstname}</td>
                    <td>{item.surname}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        <Box sx={{ margin: 2 }}>
          <div>
            <TextField
              className='m-2'
              label='firstname'
              name='firstname'
              placeholder='firstname'
              onChange={handleChange}
            ></TextField>
            <TextField
              className='m-2'
              label='surname'
              name='surname'
              placeholder='surname'
              onChange={handleChange}
            ></TextField>
            <TextField
              className='m-2'
              label='email'
              name='email'
              placeholder='email'
              onChange={handleChange}
            ></TextField>
            <TextField
              className='m-2'
              label='password'
              name='password'
              placeholder='password'
              type='password'
              onChange={handleChange}
            ></TextField>
            <Button className='mt-4 fw-bold' onClick={handleClick}>
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
}

export default TestPage;
