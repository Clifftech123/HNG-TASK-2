import request from "supertest";
import  app  from "../app";
import { PersonModel } from "src/models/person.model";

describe("Person Controller", () => {
  let personId: string;

  beforeAll(async () => {
    await PersonModel.deleteMany({});
  });

  // This is a test for the createPerson controller 
  // we test  for the post request to the /api endpoint
  // to see if it creates a new person 
  describe("POST /api", () => {
    it("should create a new person", async () => {
      const response = await request(app)
        .post("/api")
        .send({ name: "John Doe" });

      expect(response.status).toBe(201);
      expect(response.body.name).toBe("John Doe");

      personId = response.body._id;
    });

    it("should return an error if name is not provided", async () => {
      const response = await request(app).post("/api").send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe("Name is a required field.");
    });
  });


  // Getting a  all person in the database 
  // testing  the get request to the /api endpoint
  describe("GET /api", () => {
    it("should retrieve all persons", async () => {
      const response = await request(app).get("/persons");

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(1);
      expect(response.body[0].name).toBe("John Doe");
    });
  });


  // Updating a person by id
  // testing  for the put request to the /api/:id endpoint
  describe("PUT /api/:id", () => {
    it("should update a person by id", async () => {
      const response = await request(app)
        .put(`/api/${personId}`)
        .send({ name: "Jane Doe" });

      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Jane Doe");
    });

    it("should return an error if person is not found", async () => {
      const response = await request(app)
        .put("/api/123")
        .send({ name: "Jane Doe" });

      expect(response.status).toBe(404);
      expect(response.body.error).toBe("Person not found.");
    });
  });

  describe("DELETE /api/:id", () => {
    it("should delete a person by id", async () => {
      const response = await request(app).delete(`/persons/${personId}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Person deleted successfully.");
    });

    it("should return an error if person is not found", async () => {
      const response = await request(app).delete("/persons/123");

      expect(response.status).toBe(404);
      expect(response.body.error).toBe("Person not found.");
    });
  });
});
