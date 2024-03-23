describe('Felhasználó login teszt', () => {
  beforeEach('',()=>{
    cy.visit('http://localhost:5173')
    cy.wait(3000)
  })

  it('Belépés teszt',()=>{
    cy.get('#navbar-search > ul > li:nth-child(3) > a').should('have.text','Belépés').click()
    cy.wait(2000)
    cy.get('#username').type('user1')
    cy.get('#password').type('titok_23')
    cy.get('#root > div > div.flex.justify-center > div > form > div.flex.items-center.justify-between.mb-4 > button').should('have.text','Belépés').click()
    cy.get('nav').should('contains.text','Képek')
    cy.get('nav').should('contains.text','Képek feltöltése')
    cy.get('nav').should('contains.text','Kilépés')
    cy.get('#navbar-search > ul > li:nth-child(5) > a').should('have.text','Kilépés').click()
  })


})