import mongoose from "mongoose";

const { Schema, model } = mongoose;

const institutionSchema = new Schema({
  instID: { type: String },
  InstName: { type: String },
  InstCategory: {
    enum: ["university", "polytechnic", "college"],
    type: String,
  },
  state: { type: String },
});

export default model("Institutions", institutionSchema);
