import { Schema, model } from "mongoose";
import { IPerson } from "../interface/IPerson.interface";

const personSchema = new Schema<IPerson>({
  name: {
    type: String,
    required: true,
    validate: {
      validator: (value: any) => {
        return typeof value === "string";
      },
      message: "Name must be a string",
    },
  },
});

export const PersonModel = model<IPerson>("Person", personSchema);
