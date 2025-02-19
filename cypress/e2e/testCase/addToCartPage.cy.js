import addToCartPage from "../pages/addToCartPage";
import filterPage from "../pages/filterPage";
import loginPage from "../pages/loginPage";

describe("prodcut add to cart", () => {
  let testData;
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("loginData").then((data) => {
      testData = data;
    });
  });
  it("add product to cart", () => {
    loginPage.login(testData.username, testData.password);
    filterPage.selectFilter("Price (low to high)");
    addToCartPage.addCart();
    cy.get('[data-test="complete-header"]').should("contain", "Thank you for your order!");
  });
});
