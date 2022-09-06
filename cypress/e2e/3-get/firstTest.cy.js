it('By ID', () => {
    cy.visit('https://facebook.com/');
    cy.get('#email');
})

it('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
    cy.get('.DocSearch');
})

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
    cy.get('nav');
})

it('By Tag value', () => {
    cy.visit('https://facebook.com/');
    cy.get('[name="pass"]');
})

it('By Diff Tag', () => {
    cy.visit('https://facebook.com/');
    cy.get('[data-testid="open-registration-form-button"][role="button"]');
})

it('By Diff Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
    cy.get('button[type="button"][aria-label="Search"]');
})

it.only('By contains name', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
    cy.get('*[class^="max"]');
})