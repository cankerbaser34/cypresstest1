/// <reference types="cypress" />

describe("My Suit test", () => {
  it("Table test", () => {
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("table[name=BookTable")
      .contains("td", "Learn Selenium")
      .should("be.visible");
    cy.get("tbody > :nth-child(4) > :nth-child(3)")
      .contains("Javascript")
      .should("be.visible");

    cy.get("table[name=BookTable]>tbody > tr td:nth-child(2)").each(
      ($e1, index, $list) => {
        const text = $e1.text();

        if (text.includes("Amod")) {
          cy.get("table[name=BookTable]>tbody > tr td:nth-child(1)")
            .eq(index)
            .then(function (bname) {
              const bookName = bname.text();
              expect(bookName).to.equal("Master In Java");
            });
        }
      }
    );
  });
});
