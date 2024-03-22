import express from "express";
import {
  accountController,
  loginController,
  signupController,
} from "./controllers/authentication.js";
import {
  createParticipant,
  deleteParticipant,
  updateParticipant,
  viewParticipants,
} from "./controllers/participantController.js";
import {
  createInstitution,
  viewInstitutions,
} from "./controllers/institutionController.js";
import {
  createStaff,
  updateStaff,
  viewStaff,
  deleteStaff,
} from "./controllers/staffController.js";
import { createAccount } from "./controllers/studentsController.js";

const router = express.Router();

router.post("/login", loginController);

router.post("/signup", signupController);

router.get("/allaccount", accountController);

router.post("/createparticipant", createParticipant);

router.post("/createinstitution", createInstitution);

router.get("/institutions", viewInstitutions);

router.get("/participants", viewParticipants);

router.delete("/participant/:id", deleteParticipant);

router.patch("/updateparticipant/:id", updateParticipant);

router.post("/createstaff", createStaff);

router.patch("/updatestaff/:id", updateStaff);

router.get("/allstaff", viewStaff);

router.delete("/deletestaff/:id", deleteStaff);

router.post("/createrecord", createAccount);
export default router;
