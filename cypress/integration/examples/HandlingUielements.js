/// <reference types="cypress" />
describe("UI elements", () => {
  it("Verify inputbox & Ratio buttons", () => {
    cy.visit("http://demo.guru99.com/test/newtours/");
    cy.url().should("include", "newtours");
    cy.get("input[type='text']").type("mercury");

    cy.get("input[type='password']").type("mercury");

    cy.get("input[Value='Submit']").click();
    cy.get("[href='reservation.php']").click();
    cy.title("eq", "Welcome: Mercury Tours");

    cy.get("input[value=roundtrip]").should("be.visible").should("be.checked");
    cy.get("input[value=oneway]")
      .should("be.visible")
      .should("not.be.checked")
      .click();
    cy.get("td > input").should("be.visible").click();
    cy.title("eq", "Select a fligt: Mercury Tours");
  });
});
