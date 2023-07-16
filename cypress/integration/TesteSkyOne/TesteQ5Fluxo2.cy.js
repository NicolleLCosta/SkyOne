Cypress.on('uncaught:exception', () => false)
describe('Automação - Verificação de página de cases', () => {
  it('Acessa a página de cases e verifica a URL', () => {
    cy.visit('https://skyone.solutions/');
   
    cy.get('.navbar-content > :nth-child(2) > a').click()
    cy.url().should('contains', 'https://skyone.solutions/cases/');
    cy.get('.dropdown:nth-child(2) span').click({ force: true });
    cy.get('input#contabilidade').click({ force: true });
    cy.get('.remove-filters > .btn').invoke('text').should('contain', 'Contabilidade');
})
})