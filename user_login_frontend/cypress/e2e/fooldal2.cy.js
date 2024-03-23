describe('template spec', () => {

  beforeEach('',()=>{
    cy.visit('http://localhost:5173')
  })


  it('Fejléc címsor1 teszt', () => {
    cy.get('#root > div > h1').should('have.text','User Login')  
  })

  it('Main komponens h1 teszt', () => {
    cy.get('#root > div > div.relative.bg-gradient-to-r.from-purple-600.to-blue-600.h-screen.text-white.overflow-hidden > div.relative.z-10.flex.flex-col.justify-center.items-center.h-full.text-center > h1').should('have.text','User Login')
  })

  it('Főoldal szöveg a menüben megtalálható', () => {
    cy.get('nav').should('contains.text','Főoldal')
  })

  it('Főoldal menüpont szöveg pontos', () => {
    cy.get('#navbar-search > ul > li:nth-child(1) > a').should('have.text','Főoldal')
  })

  it('Main komponens háttérképe megjelenik',()=>{
    cy.get('#root > div > div.relative.bg-gradient-to-r.from-purple-600.to-blue-600.h-screen.text-white.overflow-hidden').find('img').should('be.visible')
  })

  it('Belépés gomb megtalálható',()=>{
    cy.get('#root > div > div.relative.bg-gradient-to-r.from-purple-600.to-blue-600.h-screen.text-white.overflow-hidden > div.relative.z-10.flex.flex-col.justify-center.items-center.h-full.text-center > a').should('have.text','Belépés')
  })

  it('Kép alternatív szövege Background Image',()=>{
    cy.get('#root > div > div.relative.bg-gradient-to-r.from-purple-600.to-blue-600.h-screen.text-white.overflow-hidden').find('img').should('have.attr','alt','Background Image')
  })

  
})