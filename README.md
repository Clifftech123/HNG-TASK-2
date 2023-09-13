# CRUD REST API for "Person" Resource

Welcome to the CRUD REST API project for managing a "person" resource. This project allows you to perform basic CRUD (Create, Read, Update, Delete) operations on person data. The API is built with Node.js, Express, and MongoDB.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- TypeScript
- Yarn

## Overview

This project aims to create a robust REST API for managing person data. It includes endpoints for creating, reading, updating, and deleting person records. The API is designed to handle dynamic parameters, making it flexible to perform operations based on provided details.

## Features

- Create a new person record.
- Retrieve person details by name.
- Update existing person records by name.
- Delete person records by name.
- Dynamic parameter handling for flexible queries.
- Secure interactions with the database to prevent common vulnerabilities.




## Getting Started

1. Clone this repository to your local machine using `git clone` or download the ZIP file and extract it to a folder.`

```bash
  git clone https://github.com/Clifftech123/hng-rest-crud-api.git

```

2. Install the required dependencies using

```bash
  yarn install
```

3. Create a `.env` file and configure your environment variables (e.g., database connection details).

4. Run the API using

```bash
  yarn dev
```

##

## API Endpoints and HTTP Methods

### Create a Person

- **Endpoint:** `POST  https://hngtask1-stage-2.onrender.com/api`

- **Request Format:**

  ```json
  {
    "name": "Clifford Opoku  Isaiah"
  }
  ```

- **Response Format (Success):**

```json
{
  "name": "Clifford Opoku  Isaiah ",
  "_id": "6501030f31ce063922818171",
  "__v": 0
}
```

This endpoint creates a new person record in the database. The name attribute is required and must be a string. The API returns the newly created person record in the response body.

- **Response Format (Error):**
  If an number input is provided, the API returns an error message in the response body.

```json
{
  "error": "[\n  {\n    \"code\": \"invalid_type\",\n    \"expected\": \"string\",\n    \"received\": \"number\",\n    \"path\": [\n      \"name\"\n    ],\n    \"message\": \"Expected string, received number\"\n  }\n]"
}
```

- **Response Format (Error):**
  If an invalid input is provided, the API returns an error message in the response body.
  ```json
  {
    "error": "Invalid input data"
  }
  ```

### Retrieve a Person

- **Endpoint:** `GET  https://hngtask1-stage-2.onrender.com/api/:id`

* Example : `GET  https://hngtask1-stage-2.onrender.com/api/6501030f31ce063922818171`

* ## Request Parameters:
  - id (string) - The ID of the person record to retrieve.

- **Response Format (Success):**

```json
{
  "_id": "6501030f31ce063922818171",
  "name": "Clifford Opoku  Isaiah ",
  "__v": 0
}
```

- **Response Format (Error - Person not found):**
  ```json
  {
    "error": "Person not found"
  }
  ```

### Update a Person

- **Endpoint:** `PUT   https://hngtask1-stage-2.onrender.com/api/:id`

* Example : `PUT   https://hngtask1-stage-2.onrender.com/api/6501030f31ce063922818171`

- **Request Format:**
  ```json
  {
    "name": "Updated Name"
  }
  ```
  - ## Request Parameters:
    - id (string) The ID of the person record to update.
- **Response Format (Success):**

```json
{
  "_id": "6501030f31ce063922818171",
  "name": "Updated Name ",
  "__v": 0
}
```

- **Response Format (Error - Person not found):**
  ```json
  {
    "error": "Person not found"
  }
  ```

### Delete a Person

- **Endpoint:** `Delete   https://hngtask1-stage-2.onrender.com/api/:id`

* Example : ` Delete   https://hngtask1-stage-2.onrender.com/api/6501030f31ce063922818171`

- **Response Format (Success):** No content (204)
  - ## Request Parameters:
    - id (string) The ID of the person record to delete.
- **Response Format (Error - Person not found):**

```json
{
  "message": "Person deleted successfully."
}
```

## UML Diagrams

- UML diagrams representing the API's class structure and entity-relationship design can be found in the `docs/UML_diagrams.png` folder.
![UML](src/docs/Copy%20of%20Hng-backend-namw.jpeg)


### POSTMAN API AUTOMATION TESTING
This project includes automated tests for each API endpoint using Postman. The tests are located in the `Postman folder` in `src/Postman` and are organized by endpoint. The tests are designed to run against a local instance of the API. To run the tests, follow the steps below.

## API Points 
- **Endpoint:** `POST  https://hngtask1-stage-2.onrender.com/api`

 *
* Test code 
```js
 - *  `Postman Collection name `: Post-Person-Test

pm.test("Create a Person - Status Code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Create a Person - Response  Name", function () {
    pm.response.to.have.jsonBody("name");
});
```
- **Response Format (Pass):**
* Create a Person - Status Code is 201
* Create a Person - Response Name



- **Endpoint:** `GET  https://hngtask1-stage-2.onrender.com/api/:id`
 - *  `Postman Collection name `: Get-Person-by-id
* Test code 
```js 
pm.test("Response body is valid JSON", function () {
    pm.response.to.be.json;
});

```

- **Response Format (Pass):**
* Response body is valid JSON


- **Endpoint:** `PUT  https://hngtask1-stage-2.onrender.com/api/:id`
 - *  `Postman Collection name `: update-person-by-id

* Test code 

```js
pm.test("Update a Person - Status Code is 200", function () {
    pm.response.to.have.status(200);
});


```
- **Response Format (Pass):**
* Update a Person - Status Code is 200


- **Endpoint:** `Delete  https://hngtask1-stage-2.onrender.com/api/:id`
 - *  `Postman Collection name `: Delete-Person-by-id

```js
pm.test("Update a Person - Status Code is 404", function () {
    pm.response.to.have.status(404);
});

```
- **Response Format (Pass):**
* Update a Person - Status Code is 404



