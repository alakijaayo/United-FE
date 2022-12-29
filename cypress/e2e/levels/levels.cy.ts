describe("easy level", () => {
  it("Completes an easy level run", () => {
    cy.chooseLevel();
    cy.findByText("Score: 0/25").should("exist");
    Cypress._.times(25, () => {
      cy.selectOption();
      cy.checkAnswer();
    });
    cy.checkResult();
  });
});
