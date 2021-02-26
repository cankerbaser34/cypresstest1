/// <reference types="cypress" />

describe("Suite name", () => {
  it("Handling alert", () => {
    cy.visit("https://mail.rediff.com/cgi-bin/login.cgi");
    cy.wait(3000);
    //cy.get(".mailicon").click();
    // cy.get("#login").type("ttete");
    // cy.get("#password").type("4242");
    //cy.get("[name=proceed]").click();
  });
});
