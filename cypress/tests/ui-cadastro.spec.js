/// <reference types="cypress" />

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({
      // method   = POST
      // hostname = https://api.realword.io
      // path     = /api/users

      // url completa = hostname + path
      // hostname
      // path com query params
      // path sem query params

      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'

    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('chapterv')
    cy.get('[placeholder=Email').type('chapterv@mailinator')
    cy.get('[placeholder=Password').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'

    }, {
      statusCode: 422,
      fixture: 'cadastro-usuario-existente'

    }).as('postUsers')

    cy.visit('register')
    cy.get('[placeholder=Username]').type('karine')
    cy.get('[placeholder=Email').type('karine@mailinator')
    cy.get('[placeholder=Password').type('123456')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  // it -> Cadastro com e-mail já existente
})
