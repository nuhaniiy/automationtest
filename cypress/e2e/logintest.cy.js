/// <reference types="Cypress" />
describe('login test', () => {
    beforeEach(() => {
        cy.visit('https://voila.id/account/login')
        cy.get('[data-test-id="CT_component_login_input"]').should('exist')
        cy.reload()
        
    })
    it('should login with valid credentials', () => {
      cy.get('[data-test-id="CT_component_login_input"]').type('nurulhndyni@gmail.com') 
      cy.get('[data-test-id="CT_component_password_input"]').type('Nu12ul@123')
      cy.get('[data-test-id="CT_component_login_submit"]').click()
      cy.get('[data-test-id="CT_first_tier_link_Women"]').should('exist')
    }) 

    it('should login with empty credentials' , () => {
        cy.get('[data-test-id="CT_component_login_input"]').clear()
        cy.get('[data-test-id="CT_component_login_submit"]').click({ force: true })
        cy.contains('Please enter email or phone number.').should('exist')
    })
  })