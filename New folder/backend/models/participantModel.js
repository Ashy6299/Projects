import mongoose from "mongoose";

const { Schema, model } = mongoose;

const participantSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateRegistered: Date,
});

export default model("Participant", participantSchema);
