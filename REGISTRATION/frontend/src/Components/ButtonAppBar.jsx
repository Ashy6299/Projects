import React from "react";
import { Link } from "react-router-dom";
import "./myStyles.css";
import Home from "@mui/icons-material/Home";
import AddBox from "@mui/icons-material/AddBox";
import School from "@mui/icons-material/School";
export default function ButtonAppBar() {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">
          <Home className="icon" />
          Home_Page
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/createcentres">
            <AddBox className="icon" />
            Add_Centre
          </Link>
        </li>
        <li>
          <Link to="/viewcentres">
            <School className="icon" />
            All_Centres
          </Link>
        </li>
      </ul>
    </nav>
  );
}
