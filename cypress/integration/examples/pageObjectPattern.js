/// <reference types ="cypress" />

import "../PageObjects/loginPage";
import LoginPage from "../PageObjects/loginPage";

describe("TestSuite", () => {
  const login = new LoginPage();
  it("Valid Login Test", () => {
    login.visit();
    login.fillEmail("admin@yourstore.com");
    login.fillPassword("admin");
    login.submit();
    cy.title().should("be.equal", "Dashboard / nopCommerce administration");
  });
});
