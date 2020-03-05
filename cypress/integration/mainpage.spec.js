/// <reference types="Cypress"/>

describe('The Main Page', function() {
  it('successfully loads & signs in', function() {
    
    cy.visit('/main', {
      onBeforeLoad: (win) => {
        win.sessionStorage.setItem("currentUser", "test");
      }
    })

    cy.url().should('include', '/main')

    cy.get("#user_panel").within(() => {
      cy.get("#table_body").should("be.visible")
        .find("div:eq(0)").click()
    })

    cy.get("#message_panel").within(() => {
      cy.get("#table_body").should("be.visible")
    })
  })
})