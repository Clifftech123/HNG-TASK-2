import { Router } from "express";
import express from "express";
import {
  createPerson,
  updatePersonById,
  getPersonById,
  deletePersonById,
} from "../Controllers/person.controller";

const router = express.Router();

// Create a new person
router.post("/api", createPerson );

// Get all persons
  router .get("/api/:id", getPersonById)

// update user by id 

router.put("/api/:id", updatePersonById);

// Delete a person by id
router.delete("/api/:id", deletePersonById);

export default router;
