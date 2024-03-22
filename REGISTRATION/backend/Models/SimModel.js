import mongoose from "mongoose";

const { Schema, model } = mongoose

const simSchema = new Schema({
    simPhone: Number,
    simSerial: Number,
    simCollector: String,
    })

export default model("Sim", simSchema);