pm.test("Create a Person - Status Code is 201", function () {
  pm.response.to.have.status(201);
});

pm.test("Create a Person - Response  Name", function () {
  pm.response.to.have.jsonBody("name");
});
