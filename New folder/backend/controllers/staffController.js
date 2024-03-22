import staffModel from "../models/staffModel.js";

export const createStaff = async (req, res) => {
  try {
    const existingId = await staffModel.findOne({ idCard: req.body.idCard });
    if (existingId) {
      return res.status(409).send("This ID has been created before");
    }
    if (!req.body.name || !req.body.idCard || !req.body.gender) {
      return res.status(400).send("Incomplete data");
    }

    req.body.name = req.body.name.toUpperCase();
    req.body.department = req.body.department.toUpperCase();
    await staffModel.create(req.body);

    res.send("Staff created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

export const viewStaff = async (req, res) => {
  const allstaff = await staffModel.find();
  res.send(allstaff);
};

export const updateStaff = async (req, res) => {
  try {
    const staffUpdated = await staffModel.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    if (!staffUpdated) {
      return res.status(404).send("Staff not found");
    }

    staffUpdated.name = staffUpdated.name.toUpperCase();
    staffUpdated.gender = staffUpdated.gender.toUpperCase();
    staffUpdated.department = staffUpdated.department.toUpperCase();
    staffUpdated.level = staffUpdated.level.toUpperCase();
    await staffUpdated.save();
    res.send("staff data updated");
  } catch (error) {
    console.error("Error updating participant:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteStaff = async (req, res) => {
  await staffModel.findByIdAndDelete(req.params.id);
  res.send("staff deleted");
};

// export const updateAll = async (req,res)=>{
//   try {
//     const query = {epartment:"HR"}

//     const allUpdate = await staffModel.updateMany(query,{...req.body})
//     res.send("all staff updated")
//   } catch (error){
// res.status(500).json({error:"Server error"})
// }
