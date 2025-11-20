/* ==== Test Created with Cypress Studio ==== */
it('Demo_Order', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('www.saucedemo.com');
  cy.get('[data-test="username"]').should('be.visible');
  cy.get('[data-test="password"]').should('be.visible');
  cy.get('[data-test="username"]').clear('s');
  cy.get('[data-test="username"]').type('standard_user');
  cy.get('[data-test="password"]').clear('s');
  cy.get('[data-test="password"]').type('secret_sauce');
  cy.get('[data-test="login-button"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('be.visible');
  cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').should('be.visible');
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
  cy.get('[data-test="shopping-cart-link"]').click();
  cy.get('[data-test="checkout"]').should('be.visible');
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').clear('A');
  cy.get('[data-test="firstName"]').type('Abel');
  cy.get('[data-test="lastName"]').clear('G');
  cy.get('[data-test="lastName"]').type('Godoy');
  cy.get('[data-test="postalCode"]').clear('3');
  cy.get('[data-test="postalCode"]').type('3400');
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="checkout-summary-container"]').click();
  cy.get('[data-test="total-label"]').should('have.text', 'Total: $49.66');
  cy.get('[data-test="finish"]').click();
  /* ==== End Cypress Studio ==== */
});