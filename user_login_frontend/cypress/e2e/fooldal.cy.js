describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('#root > div > h1').should('have.text','User Login')
    cy.get('#root > div > div.relative.bg-gradient-to-r.from-purple-600.to-blue-600.h-screen.text-white.overflow-hidden > div.relative.z-10.flex.flex-col.justify-center.items-center.h-full.text-center > h1').should('have.text','User Login')
    cy.get('nav').should('contains.text','Főoldal')
    cy.get('#navbar-search > ul > li:nth-child(1) > a').should('have.text','Főoldal')
  })
})