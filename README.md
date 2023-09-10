# CRUD REST API for "Person" Resource

Welcome to the CRUD REST API project for managing a "person" resource. This project allows you to perform basic CRUD (Create, Read, Update, Delete) operations on person data. The API is built with Node.js, Express, and MongoDB.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [UML Diagrams](#uml-diagrams)
- [Documentation](#documentation)
- [Hosting](#hosting)
- [Contributing](#contributing)
- [License](#license)

## Overview

This project aims to create a robust REST API for managing person data. It includes endpoints for creating, reading, updating, and deleting person records. The API is designed to handle dynamic parameters, making it flexible to perform operations based on provided details.

## Features

- Create a new person record.
- Retrieve person details by name.
- Update existing person records by name.
- Delete person records by name.
- Dynamic parameter handling for flexible queries.
- Secure interactions with the database to prevent common vulnerabilities.

## Folder Structure

Here's the folder structure of the project:

my-rest-api-project/
├── src/
│ ├── controllers/
│ │ ├── person.controller.ts
│ ├── routes/
│ │ ├── person.routes.ts
│ ├── models/
│ │ ├── person.model.ts
│ ├── services/
│ │ ├── person.service.ts
│ ├── app.ts
│ ├── server.ts
├── test/
│ ├── person.controller.test.ts
│ ├── person.service.test.ts
├── config/
│ ├── database.ts
├── docs/
│ ├── UML_diagrams/
│ │ ├── api_class_diagram.png
│ ├── DOCUMENTATION.md
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md



## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `yarn install`.
3. Create a `.env` file and configure your environment variables (e.g., database connection details).
4. Run the API using `yarn start`.

## API Endpoints

- `POST /api/person`: Create a new person record.
- `GET /api/person?name=John`: Retrieve person details by name.
- `PUT /api/person?name=John`: Update existing person records by name.
- `DELETE /api/person?name=John`: Delete person records by name.

## Testing

- Use `yarn test` to run the automated testing script.
- Tests cover all CRUD operations and dynamic parameter handling.

## UML Diagrams

- UML diagrams representing the API's class structure and entity-relationship design can be found in the `docs/UML_diagrams` folder.

## Documentation

- Detailed documentation about API usage, request/response formats, setup instructions, and known limitations can be found in the [DOCUMENTATION.md](docs/DOCUMENTATION.md) file.

## Hosting




