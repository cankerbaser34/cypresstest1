/// <reference types ="cypress" />

describe("Automation Test Suite - Fixtures", function () {
  it("Login Test", function () {
    cy.login("admin@yourstore.com", "admin");
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");
  });

  it("Add customer", function () {
    cy.login("admin@yourstore.com", "adminrer");
    cy.title().should("be.equal", "Your store. Login");
  });

  it("Edit customer", function () {
    cy.login("admin123@yourstore.com", "admin");
    cy.title().should("be.equal", "Your store. Login");
  });
});
