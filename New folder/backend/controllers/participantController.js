import participantModel from "../models/participantModel.js";

export const createParticipant = async (req, res) => {
  try {
    req.body.dateRegistered = new Date();
    //check if email address exists
    const existingEmail = await participantModel.findOne({
      email: req.body.email,
    });
    if (existingEmail) {
      return res.status(409).send("Email address already exists");
    }
    await participantModel.create(req.body);
    res.send("Participant Created");
  } catch (error) {
    res.status(500).send(new Error(error).message);
  }
};

export const viewParticipants = async (req, res) => {
  const participants = await participantModel.find(req.query);

  res.send(participants);
};

export const deleteParticipant = async (req, res) => {
  await participantModel.findByIdAndDelete(req.params.id);

  res.send("Participant deleted");
};

export const updateParticipant = async (req, res) => {
  try {
    await participantModel.findByIdAndUpdate(req.params.id, { ...req.body });
    res.send("Participant updated");
  } catch (error) {
    console.error("Error updating participant:", error);
    res.status(500).json({ error: "Server error" });
  }
};
