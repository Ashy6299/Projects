const express = require("express");
const router = express.Router();
const {
  getContacts,
  CreateContact,
  getContact,
  UpdateContact,
  DeleteContact,
} = require("../controllers/contactControler");

router.route("/").get(getContacts).post(CreateContact);

router.route("/:id").get(getContact).put(UpdateContact).delete(DeleteContact);
module.exports = router;
