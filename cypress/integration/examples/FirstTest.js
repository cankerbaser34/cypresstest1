describe("My First Test", () => {
  it("Visits the libgen", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.get("#small-searchterms").type("apple macbook pro 13");
    cy.get("#small-search-box-form > .button-1").click();
    // cy.get("[type='submit']").click();
  });
});
