import React, { useEffect, useState } from "react";
import Services from "../Api/Services";
import ButtonAppBar from "../Components/ButtonAppBar";
import "./homePage.css";

const MyHomePage = () => {
  const [Data, setData] = useState([]);

  const centresList = async () => {
    try {
      const response = await Services.get("/viewcentres");
      setData(response.data.TotalCreated);
    } catch (error) {
      console.error("Error fetching Centres data", error);
    }
  };

  useEffect(() => {
    centresList();
  }, []);

  return (
    <>
      <ButtonAppBar />
      {Data !== undefined ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col-4 text-start me-4 pt-1">
              <h6>Total Number Of Centres Created:</h6>
              <p className="data text-end mt-3 fs-1 fw-bold">{Data}</p>
            </div>
            <div className="col-4 text-start pt-1">
              <h6>Total Number Of Accounts Created:</h6>
            </div>
          </div>
        </div>
      ) : (
        <h4>No data</h4>
      )}
    </>
  );
};

export default MyHomePage;
