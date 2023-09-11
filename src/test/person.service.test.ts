import { Model } from "mongoose";
import {
  createPerson,
  getPersonByName,
  updatePersonByName,
  deletePersonByName,
} from "../services/person.service";
import { IPerson, PersonDocument } from "../models/person.model";

describe("Person Service Tests", () => {
  let mockPersonModel: Model<PersonDocument>;

  beforeEach(() => {
    // Mock the PersonModel for testing service functions
    mockPersonModel = {
      create: jest.fn(),
      findOne: jest.fn(),
      findOneAndUpdate: jest.fn(),
      findOneAndDelete: jest.fn(),
    } as unknown as Model<PersonDocument>;
  });

  it("should create a new person", async () => {
    const newPersonData: IPerson = {
      name: "John Doe",
      age: 30,
    };

    const mockCreatedPerson: PersonDocument = {
      _id: "mockId",
      ...newPersonData,
    };

    mockPersonModel.create.mockResolvedValue(mockCreatedPerson);

    const createdPerson = await createPerson(mockPersonModel, newPersonData);

    expect(mockPersonModel.create).toHaveBeenCalledWith(newPersonData);
    expect(createdPerson).toEqual(mockCreatedPerson);
  });

  it("should retrieve a person by name", async () => {
    const queryName = "Alice Smith";
    const mockFoundPerson: PersonDocument = {
      _id: "mockId",
      name: queryName,
      age: 25,
    };

    mockPersonModel.findOne.mockResolvedValue(mockFoundPerson);

    const retrievedPerson = await getPersonByName(mockPersonModel, queryName);

    expect(mockPersonModel.findOne).toHaveBeenCalledWith({ name: queryName });
    expect(retrievedPerson).toEqual(mockFoundPerson);
  });

  it("should update a person by name", async () => {
    const queryName = "Jane Johnson";
    const updatedData: Partial<IPerson> = {
      age: 40,
    };

    const mockUpdatedPerson: PersonDocument = {
      _id: "mockId",
      name: queryName,
      age: updatedData.age!,
    };

    mockPersonModel.findOneAndUpdate.mockResolvedValue(mockUpdatedPerson);

    const updatedPerson = await updatePersonByName(
      mockPersonModel,
      queryName,
      updatedData
    );

    expect(mockPersonModel.findOneAndUpdate).toHaveBeenCalledWith(
      { name: queryName },
      updatedData,
      { new: true }
    );
    expect(updatedPerson).toEqual(mockUpdatedPerson);
  });

  it("should delete a person by name", async () => {
    const queryName = "Tom Taylor";

    mockPersonModel.findOneAndDelete.mockResolvedValue(null);

    await deletePersonByName(mockPersonModel, queryName);

    expect(mockPersonModel.findOneAndDelete).toHaveBeenCalledWith({
      name: queryName,
    });
  });
});
