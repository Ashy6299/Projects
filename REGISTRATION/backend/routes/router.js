import express from "express";
import {
  createaccount,
  deleteAccount,
  viewOneAccount,
  viewRegisterd,
} from "../Controllers/accountsControllers.js";
import {
  addProduct,
  quantitySize,
  updateProduct,
  viewAllProduct,
} from "../Controllers/productController.js";
import { createCentres, viewCentres } from "../Controllers/CenterController.js";
const router = express.Router();

router
  .post("/createaccount", createaccount)
  .get("/viewregistered", viewRegisterd)
  .delete("/removeaccount/:id", deleteAccount)
  .post("/createproduct", addProduct)
  .get("/viewallproduct", viewAllProduct)
  .patch("/updateproduct/:id", updateProduct)
  .get("/quantitysize", quantitySize)
  .get("/viewrecord/:id", viewOneAccount)
  .post("/createcentre", createCentres)
  .get("/viewcentres", viewCentres);

export default router;
