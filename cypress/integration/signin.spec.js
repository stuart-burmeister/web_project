/// <reference types="Cypress"/>

describe('The Signin Page', function() {
  it('successfully loads & signs in', function() {
    
    // test redirects
    cy.visit('/main', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    }) 

    cy.url().should('include', '/signin')

    // test signup
    cy.get("#email").type("test")
    cy.get("#password").type("test")
    cy.get("#signin").click().should(() => 
      expect(sessionStorage.getItem('currentUser')).to.eq('test')
    )
  })

  it('successfully logs out', function() {
    cy.url().should('include', '/main')
    cy.contains("Logout").click().should(() => 
    expect(sessionStorage.getItem('currentUser')).to.eq(null)
  )
    cy.url().should('include', '/signin')
  })    

})