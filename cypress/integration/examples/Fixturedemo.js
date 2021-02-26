/// <reference types ="cypress" />

describe("Automation Test Suite - Fixtures", function () {
  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("Cypress Test Case - Understanding Fixtures", function () {
    cy.visit("https://admin-demo.nopcommerce.com/login");
    cy.get("input[name=Email").clear().type(this.data.email);

    cy.get("input[name=Password]").clear().type(this.data.password);
    cy.get(".button-1").click();
  });
});
