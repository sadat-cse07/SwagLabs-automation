import loginPage from "../pages/loginPage";

describe("Login Page", () => {
  let testData;
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("loginData").then((data) => {
      testData = data;
    });
  });
  it("should be able to login with valid credentials", () => {
    loginPage.login(testData.username, testData.password);
    cy.url().should("include", "inventory.html");
  });
});
