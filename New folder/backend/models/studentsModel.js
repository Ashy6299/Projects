import mongoose from "mongoose";

const { Schema, model } = mongoose;

const studentSchema = new Schema({
  Name: { type: String },
  Surname: { type: String },
  StudentNO: { type: Number },
  Contact: { type: String },
  ModuleCode: { type: String },
  Email: { type: String },
  Password: { type: String },
  Gender: { type: String },
});

export default model("Student_Record", studentSchema);
