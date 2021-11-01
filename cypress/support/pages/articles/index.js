const el = require('./elements').ELEMENTS

const articleName = 'Artigo de testes' + new Date().getTime()

class Articles {
  // Act => acesso ao formulário
  acessarOFormulario () {
    cy.get(el.linkNovoArtigo).click()
  }

  // Act => preencher o formulário
  preencherFormulario () {
    cy.get(el.inputTitle).type(articleName)
    cy.get(el.inputDescription).type('Descricao do artigo de teste')
    cy.get(el.inputBody).type('Corpo do texto do artigo de testes.')
    cy.get(el.inputTags).type('cypress')
  }

  // Act => submeter o formulário
  submeterFormulario () {
    cy.contains('button', 'Publish Article').click()
  }

  // Assert => verificar se o artigo foi criado.
  verificarSeOArtigoFoiCriado () {
    cy.contains(articleName).should('be.visible')

    cy.get('h1').should('have.text', articleName)
  }
}

export default new Articles()
