describe("levels", () => {
  it("Completes a level run", () => {
    cy.chooseLevel();
    cy.findByText("Score: 0/25").should("exist");
    Cypress._.times(25, () => {
      cy.selectOption();
      cy.checkAnswer();
    });
    cy.checkResult();
  });
});
