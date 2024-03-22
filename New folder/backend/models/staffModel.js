import mongoose from "mongoose";

const { Schema, model } = mongoose;

const staffSchema = new Schema({
  idCard: { type: String, unique: true, required: true },
  name: { type: String },
  level: { type: String },
  department: { type: String },
  gender: { type: String },
  dateRegistered: { type: Date, default: new Date() },
});

export default model("Jamb_Staff", staffSchema);
