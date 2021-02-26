/// <reference types="cypress" />

describe("Suite name", () => {
  beforeEach(() => {
    // run these tests as if in a desktop
    // browser with a 720p monitor
    cy.viewport(1280, 720);
  });
  it("Handling alert", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get(".notmobile > :nth-child(5) > a").click();
    cy.title().should("eq", "nopCommerce demo store. Books");
    cy.get(".block-manufacturer-navigation > .listbox > .view-all > a").click();

    cy.wait(3000);
    cy.go(-2);
    cy.go(2);
    cy.reload();
  });
});
