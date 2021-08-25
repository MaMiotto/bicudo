/// <reference types="cypress" />

describe('Testes da Tela de Pesquisa', () => {

    it('Pesquisa Vazia', () => {cy.visit('http://localhost:3000/login')
        cy.get('#email').type('jp@x.com');
        cy.get('#outlined-password-input').type('12345678');
        cy.get(':nth-child(1) > .MuiButton-root').click();
        cy.url().should('eq', 'http://localhost:3000/pesquisa')
        cy.get('button[class="MuiButtonBase-root MuiIconButton-root"]').click();
        cy.get('.MuiTypography-h5').should('not.exist')
    })

    it('Pesquisa Pintor', () => {cy.visit('http://localhost:3000/login')
        cy.get('#email').type('jp@x.com');
        cy.get('#outlined-password-input').type('12345678');
        cy.get(':nth-child(1) > .MuiButton-root').click();
        cy.url().should('eq', 'http://localhost:3000/pesquisa')
        cy.get('#free-solo-2-demo').type('Pintura');
        cy.get('.MuiAutocomplete-popper > :nth-child(1)').click();
        cy.get('button[class="MuiButtonBase-root MuiIconButton-root"]').click();
        cy.get('.MuiTypography-h5').should('be.visible')
    })
    
})