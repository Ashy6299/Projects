import mongoose from "mongoose";

const { Schema, model } = mongoose;

const accountSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  gender: { type: String },
});

export default model("Registered", accountSchema);
