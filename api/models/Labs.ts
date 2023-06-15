import { Schema, model } from "mongoose";

export interface ILab {
  name: string;
  technology: string;
  start_date: Date;
  end_date: Date;
}

const LabSchema = new Schema<ILab>(
  {
    name: {
      type: String,
    },
    technology: {
      type: String,
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Lab = model<ILab>("Lab", LabSchema);

export { Lab };
