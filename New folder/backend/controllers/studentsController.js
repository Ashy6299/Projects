import studentsModel from "../models/studentsModel.js";

export const createAccount = async (req, res) => {
  try {
    const existingEmail = await studentsModel.findOne({
      Email: req.body.Email,
    });
    if (existingEmail) {
      return res
        .status(409)
        .send("This Email has already been used to register before");
    }
    if (!req.body.Name || !req.body.Surname || !req.body.Email) {
      return res.status(400).send("Incomplete data");
    }

    req.body.Name = req.body.Name.toUpperCase();
    req.body.Surname = req.body.Surname.toUpperCase();
    req.body.Gender = req.body.Gender.toUpperCase();

    await studentsModel.create(req.body);

    res.send("Student created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};
