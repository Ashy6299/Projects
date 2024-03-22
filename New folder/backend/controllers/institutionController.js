import institutionModel from "../models/institutionModel.js";

export const createInstitution = async (req, res) => {
  try {
    const exisitingInstitution = await institutionModel.findOne({
      instID: req.body.instID,
    });

    if (exisitingInstitution) {
      return res.status(409).send("Institution ID already exists");
    }
    console.log(req.body);
    if (
      !req.body.InstName ||
      !req.body.InstCategory ||
      !req.body.instID ||
      !req.body.state
    ) {
      return res.status(400).send("Incomplete data");
    }

    req.body.InstCategory = req.body.InstCategory.toLowerCase();
    await institutionModel.create(req.body);

    res.send("Institution Created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

export const viewInstitutions = async (req, res) => {
  const institutions = await institutionModel.find();

  res.send(institutions);
};

// export const institutionController= async(req,res)=>{
//     if (!req.body.instName && !req.body.InstCategory && !req.body.instID)
//     return res.status(400).send("Incomplete data");
// }
