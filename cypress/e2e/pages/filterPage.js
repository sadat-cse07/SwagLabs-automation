class FilterPage {
  selectFilter(option) {
    cy.get(".product_sort_container").select(option);
  }
}

export default new FilterPage();
