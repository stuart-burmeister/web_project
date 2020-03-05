/// <reference types="Cypress"/>

describe('The Signup Page', function () {
  it('successfully signs up a user', function () {

    // test redirects
    cy.visit('/signup', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    });

    cy.url().should('include', '/signup')

    // test signup
    cy.get("#email").type("test_signup")
    cy.get("#name").type("test")
    cy.get("#password").type("test")
    cy.get("#confirm").type("test")
    cy.get("#signup").click()
  });

  it('successfully signs in new user', function () {
    
    cy.visit('/signup', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear()
      }
    });

    cy.visit('/signin')
    cy.url().should('include', '/signin')

    cy.get("#email").type("test_signup")
    cy.get("#password").type("test")
    cy.get("#signin").click().should(() => {
      cy.wait(1000);
      expect(sessionStorage.getItem('currentUser')).to.eq('test_signup')
    });
  });

  it('successfully deletes new user', function () {

    cy.contains("User").click()
    cy.url().should('include', '/user')

    cy.get("#table_body").within(() => {
      cy.contains("test_signup").click()
    })

    cy.get("#email").should("have.value", "test_signup")

    cy.get("#delete").click()

    cy.wait(1000)

    cy.get("#yes").click()

    cy.get("#table_body").should("not.contain", "test_signup")
    cy.get("#table_body").within(() => {
      cy.contains("test_signup").should("not.exist")
    })


  });
})