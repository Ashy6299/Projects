import mongoose from "mongoose";

const { Schema, model } = mongoose;

const centerSchema = new Schema({
  centerName: { type: String, required: true },
  centerID: { type: Number, required: true },
  centerAddress: { type: String, required: true },
  centerRef: { type: String, required: true },
  AdminPhoneNumber: { type: String},
});

export default model("Center", centerSchema);
