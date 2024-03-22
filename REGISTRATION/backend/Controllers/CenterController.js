import Centres from "../Models/CenterModel.js";

export const createCentres = async (req, res) => {
  try {
    const existingCentreID = await Centres.findOne({
      centerID: req.body.centerID,
    });
    if (existingCentreID) {
      return res.status(409).send("This centre ID already exist");
    }
    req.body.centerAddress = req.body.centerAddress.toUpperCase();
    req.body.centerName = req.body.centerName.toUpperCase();
    req.body.centerRef = req.body.centerRef.toUpperCase();

    await Centres.create(req.body);
    res.send("Centre created successfully!!");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

export const viewCentres = async (req, res) => {
  const viewall = await Centres.find();
  res.send({ TotalCreated: viewall.length, Allcreated: viewall });
  if ((viewall.length = 0)) {
    return res.send("No record found");
  }
};
