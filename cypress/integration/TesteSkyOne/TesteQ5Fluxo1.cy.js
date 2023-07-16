describe('Automação - Pesquisar Alexa e verificar site Amazon', () => {
    it('Realiza a pesquisa no Google, clica no site da Amazon e verifica o resultado', () => {
      cy.visit('https://www.google.com/') // Acessa o site do Google
      cy.get('#APjFqb').type('alexa') // Digita "alexa" na caixa de pesquisa
      cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click() // Clica no botão "Pesquisa Google"
      cy.contains('www.amazon.com.br').click() // Clica no site da Amazon nos resultados da pesquisa
      cy.url().should('include', 'amazon.com.br') // Verifica se a URL contém "amazon.com.br"
    })
  })

  