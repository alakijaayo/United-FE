describe("homepage", () => {
  it("renders the homepage", () => {
    cy.visit("/");
    cy.findByText("Homepage").should("exist");
    cy.findByText("Leaderboard").should("exist");
    cy.findByText("Question: 0/25").should("exist");
    cy.findByText("Score: 0/25").should("exist");
  });
});
