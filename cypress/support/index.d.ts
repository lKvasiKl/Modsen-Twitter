/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getUserByEmail(email: string): DocumentData;
    deleteTestUser(email: string): void;
  }
}
