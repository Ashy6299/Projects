import mongoose, { Schema } from "mongoose";

const { Schema, model } = mongoose;

const InstitutionSchema = new Schema({
  InstName: { type: String, required: true },
  InstId: { type: Number, required: true },
  InstType: {
    type: String,
    enum: [
      "STATE UNIVERSITY",
      "FEDERAL COLLEGE OF EDUCATION",
      "FEDERAL POLYTECHNIC",
      "STATE POLYTECHNIC",
      "STATE COLLEGE OF EDUCATION",
      "COLLEGE OF HEALTH",
      "FEDERAL UNIVERSITY",
    ],
    required: true,
  },
  StateId: { type: Number, required: true },
  State: { type: String, required: true },
});

export default model("Institution", InstitutionSchema);
