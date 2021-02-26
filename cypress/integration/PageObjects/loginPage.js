/// <reference types ="cypress" />

class LoginPage {
  visit() {
    cy.visit("https://admin-demo.nopcommerce.com/login");
  }

  fillEmail(value) {
    const field = cy.get("[id=Email]");
    field.clear().type(value);
    return this;
  }

  fillPassword(value) {
    const field = cy.get("[id=Password]");
    field.clear().type(value);
    return this;
  }

  submit() {
    const button = cy.get("[type=submit]");
    button.click();
    return this;
  }
}

export default LoginPage;
