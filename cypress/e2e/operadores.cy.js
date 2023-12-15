describe('Teste de Operadores Lógicos', () => {

    beforeEach(() => {
      cy.visit('/index.html') // Acessando o Html para testes
    })
  
    it('Deve validar a adição (+)', () => {
        cy.get('.calculator--button:contains("2")').click()
        cy.get('.calculator--button:contains("+")').click()
        cy.get('.calculator--button:contains("3")').click()
        cy.get('.calculator--button:contains("=")').click()
        cy.get('#result').should('have.text', '5') 
      })
    
      it('Deve validar a subtração (-)', () => {
        cy.get('.calculator--button:contains("8")').click()
        cy.get('.calculator--button:contains("-")').click()
        cy.get('.calculator--button:contains("3")').click()
        cy.get('.calculator--button:contains("=")').click()
        cy.get('#result').should('have.text', '5') 
      })
    
      it('Deve validar a multiplicação (*)', () => {
        cy.get('.calculator--button:contains("2")').click()
        cy.get('.calculator--button:contains("X")').click()
        cy.get('.calculator--button:contains("3")').click()
        cy.get('.calculator--button:contains("=")').click()
        cy.get('#result').should('have.text', '6') 
      })
    
      it('Deve validar a divisão (/)', () => {
        cy.get('.calculator--button:contains("8")').click()
        cy.get('.calculator--button:contains("/")').click()
        cy.get('.calculator--button:contains("4")').click()
        cy.get('.calculator--button:contains("=")').click()
        cy.get('#result').should('have.text', '2') 
      })
  
  })