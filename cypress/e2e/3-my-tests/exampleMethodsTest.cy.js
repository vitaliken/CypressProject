/// <reference types="Cypress" />





//14. Поиск элементов: Get

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





//15.Поиск элементов: Find, Eq

// it('Using Get with Find and Eq', () => {
//     cy.visit('https://amihome.by/catalog/upholstered/soft_corners/');
//     cy.get('.bottom-header').find('ul').find('li').eq('2');
// })

// it.only('Using Get with Find and Eq 2', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.get('aside').find('div').find('button').eq('4').click();
// })





//17. Поиск элементов: Contains

// it('Using Contains', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.contains('Discord');
// })

// it('Using Contains', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.contains('div', 'Discord');
// })

// it('Using Contains', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.contains('DISCORD', {matchCase: false}); //register ignore
// })

// it.only('Using Contains', () => {
//     cy.visit('https://docs.cypress.io/api/table-of-contents');
//     cy.get('aside').contains('Utilities');
// })





//18. Проверки: Should + And, Expect

// it('SHOULD', () => {
//     cy.visit('https://facebook.com/');
//     cy.get('#email')
//         .type('vit@gmail.test')
//         .should('have.value', 'vit@gmail.test')
//         .and('be.visible')
// })

// it('EXPECT', () => {
//     cy.visit('https://facebook.com/');
//     cy.get('#email')
//         .type('vit@gmail.test').then( input => {
//             expect(input).to.have.value('vit@gmail.test')
//         })
// })

// it('Check checkbox condition', () => {
//     cy.visit('https://myfin.by/kredity/potrebitelskie?CreditsListPotrebitelskieForm%5Bamount%5D=20000&CreditsListPotrebitelskieForm%5Bperiod%5D=60');
//     cy.get('#check_v2_consent')
//         .should('be.checked')
//         .should('not.be.disabled')
// })

// it('Check contains element - draft', () => {
//     cy.visit('https://catalog.onliner.by/');
//     cy.contains('Бытовая техника')
//         .click()
//         .contains('.catalog-navigation-list__aside-item_active > .catalog-navigation-list__aside-title')
//         .trigger('mouseover')
//         .get('.catalog-navigation-list__dropdown-list').find('a').eq('1')
//         .should('be.visible')
// })

// it('Check is correct attr in submit', () => {
//     cy.visit('https://facebook.com/');
//     cy.contains('Вход')
//         .should('have.attr', 'type')
//         .and('match', /submit/)
// })

// it.only('Check is correct URL', () => {
//     cy.visit('https://docs.cypress.io/');
//     cy.url()
//         .should('eq', 'https://docs.cypress.io/guides/overview/why-cypress')
// })





//19. Действия с WEB элементами

// it('Type', () => {
//     cy.visit('https://facebook.com/')
//         .get('#email')
//         .type('vit@test.test')
// })

// it('Focus', () => {
//     cy.visit('https://facebook.com/')
//         .get('#email')
//         .focus()
// })

// it('Blur', () => {
//     cy.visit('https://facebook.com/')
//         .get('#email')
//         .focus()
//         .blur()
// })

// it('Clear', () => {
//     cy.visit('https://facebook.com/')
//         .get('#email')
//         .type('vit@test.test')
//         .wait(2000)
//         .clear()
// })

// it('Submit', () => {
//     cy.visit('https://facebook.com/')
//         .get('#email')
//         .type('vit@test.test')
//         .get('#pass')
//         .type('vit@test.test')
//         .get('[method="post"]')
//         .submit()
// })

// it('Click', () => {
//     cy.visit('https://facebook.com/')
//         .get('[data-testid="open-registration-form-button"]')
//         .click()
// })

// it('Right click', () => {
//     cy.visit('https://example.cypress.io/commands/actions')
//         .get('.rightclick-action-div')
//         .rightclick()
// })

// it('Double click', () => {
//     cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.examples.html')
//         .get('aside')
//         .dblclick()
// })

// it('Check', () => {
//     cy.visit('https://ru.code-basics.com/languages/html/lessons/checkbox')
//         .get('input').eq('0')
//         .check()
//         .get('input').eq('1')
//         .check()
// })

// it('Uncheck', () => {
//     cy.visit('https://ru.code-basics.com/languages/html/lessons/checkbox')
//         .get('input').eq('3')
//         .check()
//         .wait(3000)
//         .get('input').eq('3')
//         .uncheck()
// })


// it('Select', () => {
//     cy.visit('https://ru.code-basics.com/languages/html/lessons/select')
//         .get('.form-select').eq('0')
//         .select('PHP')
//         .get('.form-select').eq('2')
//         .select(['Java','HTML'])
// })

// it('ScrollIntoView', () => {
//     cy.visit('https://ru.code-basics.com/languages/html/lessons/select')
//         .get('summary').eq('0')
//         .wait(2000)
//         .scrollIntoView()
// })

// it('ScrollTo', () => {
//     cy.visit('https://picabu.ru')
//         .wait(2000)
//     cy.scrollTo(0, 1200)
// })

// it.only('Trigger', () => {
//     cy.visit('https://picabu.ru')
//         .get('.header-menu__extra')
//         .wait(5000)
//         .trigger('mouseover')
// })