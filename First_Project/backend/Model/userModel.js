import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
});

export default model("Account", userSchema);
