import React, { useEffect, useState } from "react";
import ButtonAppBar from "../Components/ButtonAppBar";
import { Typography } from "@mui/material";
import Services from "../Api/Services";

const ViewCentres = () => {
  const [Centres, setCentres] = useState([]);

  const centresList = async () => {
    try {
      const response = await Services.get("/viewcentres");
      setCentres(response.data.Allcreated);
    } catch (error) {
      console.error("Error fetching Centres data");
    }
  };

  useEffect(() => {
    centresList();
  }, []);
  return (
    <>
      <ButtonAppBar />
      <div className='mt-4 ms-4 me-4'>
        <Typography variant='h4'>All Centres</Typography>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>CenterName</th>
              <th>CenterID</th>
              <th>CenterAddress</th>
              <th>CenterRef</th>
              <th>AdminPhoneNumber</th>
            </tr>
          </thead>
          <tbody>
            {Centres.map((a) => (
              <tr>
                <td>{a.centerName}</td>
                <td>{a.centerID}</td>
                <td>{a.centerAddress}</td>
                <td>{a.centerRef}</td>
                <td>{a.AdminPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewCentres;
