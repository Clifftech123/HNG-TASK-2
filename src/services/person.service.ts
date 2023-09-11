import { Model, Document } from "mongoose";
import { IPerson } from "../models/person.model";

// Create a new person
export const createPerson = async (
  PersonModel: Model<IPerson>, // Mongoose model for Person documents
  personData: IPerson // Data for the new person
): Promise<IPerson> => {
  try {
    const person = new PersonModel(personData); // Create a new Person document with the provided data
    return await person.save(); // Save the new document to the database and return it
  } catch (error) {
    throw new Error("Failed to create a new person."); // Throw an error if the creation process fails
  }
};

// Retrieve person details by name
export const getPersonByName = async (
  PersonModel: Model<IPerson>, // Mongoose model for Person documents
  name: string // Name of the person to retrieve
): Promise<IPerson | null> => {
  try {
    return await PersonModel.findOne({ name }).exec(); // Find the Person document with the provided name and return it
  } catch (error) {
    throw new Error("Failed to retrieve person details by name."); // Throw an error if the retrieval process fails
  }
};

// Update existing person by name
export const updatePersonByName = async (
  PersonModel: Model<IPerson>, // Mongoose model for Person documents
  name: string, // Name of the person to update
  updatedData: Partial<IPerson> // Data to update the person with
): Promise<IPerson | null> => {
  try {
    return await PersonModel.findOneAndUpdate({ name }, updatedData, {
      new: true, // Return the updated document instead of the original document
    }).exec(); // Find the Person document with the provided name, update it with the provided data, and return it
  } catch (error) {
    throw new Error("Failed to update person by name."); // Throw an error if the update process fails
  }
};

// Delete person by name
export const deletePersonByName = async (
  PersonModel: Model<IPerson>, // Mongoose model for Person documents
  name: string // Name of the person to delete
): Promise<void> => {
  try {
    await PersonModel.findOneAndDelete({ name }).exec(); // Find the Person document with the provided name and delete it
  } catch (error) {
    throw new Error("Failed to delete person by name."); // Throw an error if the deletion process fails
  }
};