import express from "express";

import { addproduct, viewphones } from "./Phones.js";
import { createJambStaff, viewAllJambStaff } from "./JambStaffControl.js";

const router = express.Router();

router
  .post("/addproduct", addproduct)
  .get("/viewphones", viewphones)
  .post("/createstaff", createJambStaff)
  .get("/viewstaff", viewAllJambStaff);

export default router;
