/// <reference types="Cypress" />
describe('login test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').should('exist')
        cy.reload()
        
    })
    it('should login with valid credentials', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('exist')
    })
})