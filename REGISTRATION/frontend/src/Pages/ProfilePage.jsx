import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Services from "../Api/Services";
import ButtonAppBar from "../Components/Header";
import { Avatar, Button, Typography } from "@mui/material";

export default function ProfilePage() {
  const [record, setRecord] = useState(null);
  const getRecord = async () => {
    Services.get(`/viewrecord/${id}`).then((res) => {
      console.log(res.data);
      setRecord(res.data);
    });
  };

  // const deleteProfile = async (_id) => {
  //   try {
  //     await Services.delete(`/removeaccount/${_id}`);
  //     const accounts = record.filter((record) => record.id !== id);
  //     setRecord(accounts);
  //   } catch (error) {
  //     console.error("unable to delete:", error);
  //   }
  // };

  useEffect(() => {
    getRecord();
  }, []);
  const { id } = useParams();
  return (
    <>
      <ButtonAppBar />
      <div>
        <div
          className='container mt-5'
          style={{ display: "flex", alignItems: "center" }}
        >
          {record && (
            <div style={{ marginLeft: "10px" }} className='row'>
              <div className='col-lg-4'>
                <Avatar
                  sx={{ width: "120px", height: "120px" }}
                  src='https://plus.unsplash.com/premium_photo-1698952163456-c062a79ea49c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D'
                />
              </div>
              <div className='col-lg-4'>
                <Typography variant='h6'>{record.email}</Typography>
                <Typography variant='h6'>{record.firstName}</Typography>
                <Typography variant='h6'>{record.lastName}</Typography>
                <Typography variant='h6'>{record.phoneNumber}</Typography>
                <Typography variant='h6'>{record.gender}</Typography>
                <div>
                  <Button variant='outlined'>delete</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
