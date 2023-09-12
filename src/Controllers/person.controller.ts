import { Request, Response } from "express";
import { PersonModel } from "../models/person.model";
import * as z from "zod";


const createPersonSchema = z.object({
  name: z.string(),
});

export const createPerson = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = createPersonSchema.parse(req.body);

    // Create a new person with the provided name
    const person = new PersonModel({ name });
    const savedPerson = await person.save();

    // Return the newly created person
    res.status(201).json(savedPerson);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.message });
    } else {
      // Handle any other errors that occur during the creation process
      res.status(500).json({ error: "Internal server error" });
    }
  }
};
// Retrieve a person by id
export const getAllPersons = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Find all persons in the database
    const persons = await PersonModel.find();

    // Return the persons
    res.status(200).json(persons);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a person by id
export const updatePersonById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Find the person with the provided id
    const person = await PersonModel.findById(id);

    // Check if person exists
    if (!person) {
      res.status(404).json({ error: "Person not found." });
      return;
    }

    // Update the person with the new data
    person.name = req.body.name;
    const updatedPerson = await person.save();

    // Return the updated person
    res.status(200).json(updatedPerson);
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a person by id
export const deletePersonById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Find and delete the person with the provided id
    const deletedPerson = await PersonModel.findByIdAndDelete(id);

    // Check if person exists
    if (!deletedPerson) {
      res.status(404).json({ error: "Person not found." });
      return;
    }

    // Return a success message
    res.status(200).json({ message: "Person deleted successfully." });
  } catch (error) {
    // Handle any errors that occur during the deletion process
    res.status(500).json({ error: "Internal server error" });
  }
};