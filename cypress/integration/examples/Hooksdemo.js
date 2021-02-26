/// <reference types ="cypress" />

describe("My Test Suite", () => {
  beforeEach(() => {
    cy.log("This is login block");
  });
  afterEach(() => {
    cy.log("This is logout block");
  });
  before(() => {
    cy.log("This is set up block");
  });
  after(() => {
    cy.log("This is teardwon");
  });
  it("searching", () => {
    cy.log("This is searching Test");
  });
  it("searching", () => {
    cy.log("This is searching Test");
  });
  it(" Advence searching", () => {
    cy.log("This is advance searching Test");
  });
  it("Listing products", () => {
    cy.log("This is listing product Test");
  });
});
