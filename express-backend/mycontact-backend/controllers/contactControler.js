const asyncHandler = require("express-async-handler");
//@desc Get all contact
//@route Get /api/contact
//@access public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contact" });
});

//@desc Create new contact
//@route Get /api/contact
//@access public
const CreateContact = asyncHandler(async (req, res) => {
  console.log("the request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(201).json({ message: "Create contact" });
});

//@desc Get all contact
//@route Get /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contact
//@route Get /api/contact/:id
//@access public
const UpdateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contact
//@route Get /api/contact/:id
//@access public
const DeleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  CreateContact,
  getContact,
  UpdateContact,
  DeleteContact,
};
