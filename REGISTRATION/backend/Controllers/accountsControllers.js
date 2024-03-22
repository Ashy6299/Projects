import accounts from "../Models/accountsModel.js";

export const createaccount = async (req, res) => {
  try {
    const existingemail = await accounts.findOne({ email: req.body.email });
    if (existingemail) {
      return res.status(409).send("This email has been registered before");
    }
    req.body.firstName = req.body.firstName.toUpperCase();
    req.body.lastName = req.body.lastName.toUpperCase();
    req.body.gender = req.body.gender.toUpperCase();
    await accounts.create(req.body);

    res.send("Account created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

export const viewRegisterd = async (req, res) => {
  const viewall = await accounts.find();
  res.send({ Allregistered: viewall });
};
// if ((viewall.length = 0)) {
//   return res.send("No record found");
// }

export const viewOneAccount = async (req, res) => {
  try {
    const oneAccount = await accounts.findById(req.params.id);
    if (!oneAccount) {
      return res.status(404).send("Record not Found");
    }
    res.send(oneAccount);
  } catch (error) {
    console.log(new Error(error).message);
    res.status(500).send(new Error(error).message);
  }
};

export const deleteAccount = async (req, res) => {
  await accounts.findByIdAndDelete(req.params.id);
  res.send("Account deleted");
};
