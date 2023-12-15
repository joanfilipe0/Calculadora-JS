describe('Teste Botões', () => {

  beforeEach(() => {
    cy.visit('/index.html') // Acessando o Html para testes
  })

  it('Deve validar o botão C', () => {
    cy.get('.calculator--button:contains("C")').click()
    cy.get('#result').should('have.text', '')
  })

  it('Deve validar o botão <', () => {
    cy.get('.calculator--button:contains("<")').click()
    cy.get('#result').should('have.text', '')
  })

  it('Deve validar o botão /', () => {
    cy.get('.calculator--button:contains("/")').click()
    cy.get('#result').should('have.text', '/')
  })

  it('Deve validar o botão X', () => {
    cy.get('.calculator--button:contains("X")').click()
    cy.get('#result').should('have.text', '*')
  })

  it('Deve validar o botão 7', () => {
    cy.get('.calculator--button:contains("7")').click()
    cy.get('#result').should('have.text', '7')
  })

  it('Deve validar o botão 8', () => {
    cy.get('.calculator--button:contains("8")').click()
    cy.get('#result').should('have.text', '8')
  })

  it('Deve validar o botão 9', () => {
    cy.get('.calculator--button:contains("9")').click()
    cy.get('#result').should('have.text', '9')
  })

  it('Deve validar o botão -', () => {
    cy.get('.calculator--button:contains("-")').click()
    cy.get('#result').should('have.text', '-')
  })

  it('Deve validar o botão 4', () => {
    cy.get('.calculator--button:contains("4")').click()
    cy.get('#result').should('have.text', '4')
  })

  it('Deve validar o botão 5', () => {
    cy.get('.calculator--button:contains("5")').click()
    cy.get('#result').should('have.text', '5')
  })

  it('Deve validar o botão 6', () => {
    cy.get('.calculator--button:contains("6")').click()
    cy.get('#result').should('have.text', '6')
  })

  it('Deve validar o botão +', () => {
    cy.get('.calculator--button:contains("+")').click()
    cy.get('#result').should('have.text', '+')
  })

  it('Deve validar o botão 1', () => {
    cy.get('.calculator--button:contains("1")').click()
    cy.get('#result').should('have.text', '1')
  })

  it('Deve validar o botão 2', () => {
    cy.get('.calculator--button:contains("2")').click()
    cy.get('#result').should('have.text', '2')
  })

  it('Deve validar o botão 3', () => {
    cy.get('.calculator--button:contains("3")').click()
    cy.get('#result').should('have.text', '3') 
  })

  it('Deve validar o botão 0', () => {
    cy.get('.calculator--button:contains("0")').click()
    cy.get('#result').should('have.text', '0') 
  })

  it('Deve validar o botão .', () => {
    cy.get('.calculator--button:contains(".")').click()
    cy.get('#result').should('have.text', '.') 
  })

  it('Deve validar o botão =', () => {
    cy.get('.calculator--button:contains("=")').click()
    
  })

})