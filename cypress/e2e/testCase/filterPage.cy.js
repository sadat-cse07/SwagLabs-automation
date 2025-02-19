import filterPage from "../pages/filterPage";
import loginPage from "../pages/loginPage";

describe("Filter page", () => {
  let testData;
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("loginData").then((data) => {
      testData = data;
    });
  });

  it("filter products", () => {
    loginPage.login(testData.username, testData.password);
    filterPage.selectFilter("Price (low to high)");
    cy.get(".inventory_item_price").first().should("contain", "$7.99");
  });
});
