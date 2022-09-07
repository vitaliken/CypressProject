/// <reference types="Cypress" />


// it('By ID', () => {
//     cy.visit('https://facebook.com/');
//     cy.get('#email');
// })

// it('By Class', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
//     cy.get('.DocSearch');
// })

// it('By Tag', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
//     cy.get('nav');
// })

// it('By Tag value', () => {
//     cy.visit('https://facebook.com/');
//     cy.get('[name="pass"]');
// })

// it('By Diff Tag', () => {
//     cy.visit('https://facebook.com/');
//     cy.get('[data-testid="open-registration-form-button"][role="button"]');
// })

// it('By Diff Types', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
//     cy.get('button[type="button"][aria-label="Search"]');
// })

// it('By contains name', () => {
//     cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax');
//     cy.get('*[class^="max"]');
// })





// it('Using Get with Find and Eq', () => {
//     cy.visit('https://amihome.by/catalog/upholstered/soft_corners/');
//     cy.get('.bottom-header').find('ul').find('li').eq('2');
// })

// it.only('Using Get with Find and Eq 2', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.get('aside').find('div').find('button').eq('4').click();
// })




it('Using Contains', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents');
    cy.contains('Discord');
})

it('Using Contains', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents');
    cy.contains('div', 'Discord');
})

it('Using Contains', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents');
    cy.contains('DISCORD', {matchCase: false}); //register ignore
})

it.only('Using Contains', () => {
    cy.visit('https://docs.cypress.io/api/table-of-contents');
    cy.get('aside').contains('Utilities');
})
