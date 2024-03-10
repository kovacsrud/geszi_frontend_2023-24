describe('Főoldal betöltés', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1.text-center').should('have.text','User Login')
    cy.get('.leading-tight').should('have.text','User Login')
  })
})