import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productschema = new Schema({
  name: String,
  price: Number,
  quantity: Number,
  date: Date,
});

export default model("Product", productschema);
