import { Request, Response } from "express";
import { PersonModel } from "../models/person.model";

// Create a new person
export const createPerson = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.body;

    // Check if name is provided
    if (!name) {
      res.status(400).json({ error: "Name is a required field." });
      return;
    }

    // Create a new person with the provided name
    const person = new PersonModel({ name });
    const savedPerson = await person.save();

    // Return the newly created person
    res.status(201).json(savedPerson);
  } catch (error) {
    // Handle any errors that occur during the creation process
    res.status(500).json({ error: "Internal server error" });
  }
};

// Retrieve a person by name
export const getPersonByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;

    // Check if name is provided
    if (!name) {
      res.status(400).json({ error: "Name is a required field." });
      return;
    }

    // Find the person with the provided name
    const person = await PersonModel.findOne({ name });

    // Check if person exists
    if (!person) {
      res.status(404).json({ error: "Person not found." });
      return;
    }

    // Return the person
    res.status(200).json(person);
  } catch (error) {
    // Handle any errors that occur during the retrieval process
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update a person by name
export const updatePersonByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.params;

    // Check if name is provided
    if (!name) {
      res.status(400).json({ error: "Name is a required field." });
      return;
    }

    // Find the person with the provided name
    const person = await PersonModel.findOne({ name });

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

// Delete a person by name
export const deletePersonByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.query;

    // Check if name is provided
    if (!name) {
      res.status(400).json({ error: "Name is a required query parameter." });
      return;
    }

    // Find and delete the person with the provided name
    const deletedPerson = await PersonModel.findOneAndDelete({ name });

    // Check if person exists
    if (!deletedPerson) {
      res.status(404).json({ error: "Person not found." });
      return;
    }

    // Return a success status code
    res.status(204).end();
  } catch (error) {
    // Handle any errors that occur during the deletion process
    res.status(500).json({ error: "Internal server error" });
  }
};
