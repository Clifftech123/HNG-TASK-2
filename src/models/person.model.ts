import { Schema, model, Document } from "mongoose";

export interface IPerson extends Document {
  name: string;
}

const personSchema = new Schema<IPerson>({
  name: {
    type: String,
    required: true,
  },
});

export const PersonModel = model<IPerson>("Person", personSchema);
