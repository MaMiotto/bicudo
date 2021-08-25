/// <reference types="cypress" />

describe('Testes da Tela de Login', () => {

    it('Login Vazio', () => {
      cy.visit('http://localhost:3000/login')
      cy.get(':nth-child(1) > .MuiButton-root').click();
      cy.get('#email-helper-text').should('be.visible')
    })

    it('Login Inválido', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('#email').type('teste@etset.com');
      cy.get('#outlined-password-input').type('123');
      cy.get(':nth-child(1) > .MuiButton-root').click();
      cy.get('.sc-iwajpm').should('be.visible')
      cy.url().should('eq', 'http://localhost:3000/login')
    })

    it('Login Válido', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('#email').type('jp@x.com');
      cy.get('#outlined-password-input').type('12345678');
      cy.get(':nth-child(1) > .MuiButton-root').click();
      cy.url().should('eq', 'http://localhost:3000/pesquisa')
    })


})