/// <reference types="cypress" />

import articles from '../support/pages/articles'

describe('Articles', () => {
  // HOOK -> são trechos que devem ser executados antes ou depois do teste.
  beforeEach(() => {
    // Arrange
    cy.login()

    cy.visit('/')
  })

  it.only('Cadastro de novo artigo com sucesso', () => {
    // Fluxo de criação do artigo
    // Act => acesso ao formulário
    articles.acessarOFormulario()

    // Act => preencher o formulário
    articles.preencherFormulario()

    // Act => submeter o formulário
    articles.submeterFormulario()

    // Assert => verificar se o artigo foi criado.
    articles.verificarSeOArtigoFoiCriado()
  })
})

// AAA -> Arrange, Atc, Assert
// Preparar, Executar/Agir, Validar
