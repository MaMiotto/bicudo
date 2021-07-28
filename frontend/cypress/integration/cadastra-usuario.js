/// <reference types="cypress" />

describe('Testes da Tela de Cadastro', () => {

  it('Faz Cadastro Vazio', () => {
    cy.visit('http://localhost:3000/cadastro')
    cy.get('form > .MuiButton-root').click();
    cy.get('#email-helper-text').should("be.visible");
  })

  it('Faz Cadastro Repetido', () => {
    cy.visit('http://localhost:3000/cadastro')
    cy.get('#email').type('teste@teste.com');
    cy.get('#senha').type('1234');
    cy.get('#confirma-senha').type('1234');
    cy.get('#cpf').type('12345678910')
    cy.get('form > .MuiButton-root').click();
    cy.get('#cpf-helper-text').should('be.visible')
  })
  
  it('Faz Cadastro Válido', () => {
    cy.visit('http://localhost:3000/cadastro')
    cy.get('#email').type('teste@etset.com');
    cy.get('#senha').type('1234');
    cy.get('#confirma-senha').type('1234');
    cy.get('#cpf').type('12345678924')
    cy.get('form > .MuiButton-root').click();
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})
