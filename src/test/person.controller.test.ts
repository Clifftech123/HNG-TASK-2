import request from "supertest";
import app from "../app";
import { PersonModel } from "../models/person.model";

describe("Person Controller Tests", () => {
  beforeEach(async () => {
    // Clear the database or perform any setup before each test
    await PersonModel.deleteMany({});
  });

  it("should create a new person", async () => {
    const newPerson = {
      name: "John Doe",
      age: 30,
    };

    const response = await request(app).post("/api/person").send(newPerson);

    expect(response.status).toBe(201);
    expect(response.body.name).toBe("John Doe");
    expect(response.body.age).toBe(30);
  });

  it("should retrieve a person by name", async () => {
    const existingPerson = new PersonModel({
      name: "Alice Smith",
      age: 25,
    });
    await existingPerson.save();

    const response = await request(app)
      .get("/api/person")
      .query({ name: "Alice Smith" });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Alice Smith");
    expect(response.body.age).toBe(25);
  });

  it("should update a person by name", async () => {
    const existingPerson = new PersonModel({
      name: "Jane Johnson",
      age: 35,
    });
    await existingPerson.save();

    const updatedPersonData = {
      age: 40,
    };

    const response = await request(app)
      .put("/api/person")
      .query({ name: "Jane Johnson" })
      .send(updatedPersonData);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Jane Johnson");
    expect(response.body.age).toBe(40);
  });

  it("should delete a person by name", async () => {
    const existingPerson = new PersonModel({
      name: "Tom Taylor",
      age: 28,
    });
    await existingPerson.save();

    const response = await request(app)
      .delete("/api/person")
      .query({ name: "Tom Taylor" });

    expect(response.status).toBe(204);

    const deletedPerson = await PersonModel.findOne({ name: "Tom Taylor" });
    expect(deletedPerson).toBeNull();
  });
});
