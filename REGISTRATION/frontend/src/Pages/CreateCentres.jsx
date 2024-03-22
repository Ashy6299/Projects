import React, { useState } from 'react';
import ButtonAppBar from '../Components/ButtonAppBar';
import { Button, Typography } from '@mui/material';
import Services from '../Api/Services';


const CreateCentres = () => {
    const [input, setInput] = useState({});
    

    const addCentre = async(e)=>{
        e.preventDefault();
        try{
            await Services.post("/createcentre", input);
            alert("Centre Created Successfully!!");
            setInput({ 
              centerName:"",
              centerID:"",
              centerRef:"",
              AdminPhoneNumber:"",
              centerAddress:"",
            })
            
            
        }catch (error){
            console.error("Error adding account:", error);
            alert("Failed to Create Centre!!");
        }
    };
   

    const handleChange =(e)=>{
        setInput({ ...input, [e.target.name]: e.target.value});
    };

  return (
    <>
    <ButtonAppBar/>
    <div className='container mt-4'>
    <Typography variant='h4'>Create Centres</Typography>
        <form className='mt-4 ms-4 w-50'>
            <input
              className='form-control mb-3'
              placeholder='Centre  Name'
              onChange={handleChange}
              name='centerName'
            ></input>

            <input
              className='form-control mb-3'
              placeholder='CentreID'
              onChange={handleChange}
              name='centerID'
            ></input>
            <input
              className='form-control mb-3'
              placeholder='Centre Reference Number'
              onChange={handleChange}
              name='centerRef'
            ></input>
            <input
              className='form-control mb-3'
              placeholder='Admin Phone Number'
              onChange={handleChange}
              name='AdminPhoneNumber'
            ></input>
            <input
              className='form-control mb-3'
              placeholder='Centre Address'
              onChange={handleChange}
              name='centerAddress'
            ></input>
            <Button variant='outlined' className='mb-4' onClick={addCentre}>Create Center</Button>
            </form> 
          </div>
          
    </>
  )
}

export default CreateCentres