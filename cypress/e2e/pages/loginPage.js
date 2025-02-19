// cypress/pages/loginPage.js

class LoginPage {
  // Define the elements (locators)
  // get usernameInput() {
  //   return cy.get("#user-name"); // Adjust based on actual selector
  // }

  // get passwordInput() {
  //   return cy.get("#password"); // Adjust based on actual selector
  // }

  // get loginButton() {
  //   return cy.get("#login-button"); // Adjust based on actual selector
  // }

  // // Action: Fill in the login form
  // enterUsername(username) {
  //   this.usernameInput.type(username);
  // }

  // enterPassword(password) {
  //   this.passwordInput.type(password);
  // }

  // submitLogin() {
  //   this.loginButton.click();
  // }

  // // Method to perform login action
  // login(username, password) {
  //   this.enterUsername(username);
  //   this.enterPassword(password);
  //   this.submitLogin();
  // }
  login(username, password) {
    cy.get("#user-name").type(username);
    cy.get("#password").type(password);
    cy.get("#login-button").click();
  }

  // You can also create additional utility methods to handle assertions or other actions on the login page
  verifyErrorMessage(errorMessage) {
    cy.get(".error-message").should("contain.text", errorMessage); // Adjust based on actual selector
  }
}

export default new LoginPage();
