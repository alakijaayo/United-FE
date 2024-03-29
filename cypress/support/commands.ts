/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

import "@testing-library/cypress/add-commands";
let score = 0;
let question = 0;

Cypress.Commands.add("chooseLevel", () => {
  const levels = [/easy/i, /medium/i, /hard/i];
  cy.request({
    method: "POST",
    url: "http://ec2-18-130-127-69.eu-west-2.compute.amazonaws.com/clear",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const level = levels[Math.floor(Math.random() * levels.length)];
  cy.visit("/");
  cy.findByText(`Question: ${question}/25`).should("exist");
  cy.findByText(`Score: ${score}/25`).should("exist");
  cy.findByText(level).click();
});

Cypress.Commands.add("selectOption", () => {
  const options = ["A", "B", "C", "D"];
  const option = options[Math.floor(Math.random() * options.length)];
  question += 1;
  cy.findByText(`Question: ${question}/25`).should("exist");
  cy.wait(800);
  cy.findByLabelText(`option ${option}`).click();
});

Cypress.Commands.add("checkAnswer", () => {
  cy.wait(800);
  cy.url().then((val) => {
    if (val.includes("incorrect")) {
      cy.findByText("Incorrect").should("exist");
      cy.findByLabelText("onNext").should("exist");
    } else {
      score += 1;
      cy.findByText("Correct").should("exist");
      cy.findByLabelText("onNext").should("exist");
      cy.findByText(`Score: ${score}/25`).should("exist");
    }

    cy.findByLabelText("onNext").click();
  });
});

Cypress.Commands.add("checkResult", () => {
  cy.findByText(`Your final score is ${score}`).should("exist");
});
