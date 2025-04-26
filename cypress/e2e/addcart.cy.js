///reference types="cypress" />
describe('add to cart test', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('[data-test="username"]').should('exist')
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="product-sort-container"]').should('exist')

    })
    it('should add item to cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[id="remove-sauce-labs-bike-light"]').should('exist')
    
    })
})