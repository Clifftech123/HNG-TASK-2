pm.test("Update a Person - Status Code is 404", function () {
  pm.response.to.have.status(404);
});
