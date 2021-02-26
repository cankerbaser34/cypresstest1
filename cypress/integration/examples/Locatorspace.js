/// <reference types="cypress" />
describe("My First Test", () => {
  it("Visits the libgen", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get("#small-searchterms").type("apple macbook pro 13");
    cy.get("[type='submit']").click();
    cy.get(
      "body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.search-results > div > div > div > div > div.details > div.add-info > div.buttons > input.button-2.product-box-add-to-cart-button"
    ).click();
    cy.get("#product_enteredQuantity_4").clear().type("2");
    cy.get("#add-to-cart-button-4").click();

    cy.wait(5000);

    cy.get(".ico-cart").click();
    cy.wait(5000);

    cy.get(".product-unit-price").contains("$1,800.00");
  });
});
