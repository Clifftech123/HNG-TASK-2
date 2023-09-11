import { Router } from "express";
import {
  createPerson,
  getPersonByName,
  updatePersonByName,
  deletePersonByName,
} from "../controllers/person.controller";

const router = Router();

// Create a new person
router.post("/api/person", createPerson);

// Retrieve person details by name
router.get("/api/person", (req, res) => {
  const { name } = req.query;
  getPersonByName(name)
    .then((person) => {
      if (!person) {
        return res.status(404).json({ error: "Person not found." });
      }
      res.status(200).json(person);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Update existing person by name
router.put("/api/person", (req, res) => {
  const { name } = req.query;
  const { age } = req.body;
  updatePersonByName(name, age)
    .then((updatedPerson) => {
      if (!updatedPerson) {
        return res.status(404).json({ error: "Person not found." });
      }
      res.status(200).json(updatedPerson);
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

// Delete person by name
router.delete("/api/person", (req, res) => {
  const { name } = req.query;
  deletePersonByName(name)
    .then(() => {
      res.status(204).end();
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
});

export default router;
