import mongoose from "mongoose";

const LabSchema = new mongoose.Schema({});

const Lab = mongoose.model("Lab", LabSchema);

export { Lab };
