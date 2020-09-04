describe('Focus Style Variables Test', () => {
  it('can edit the variables', () => {
    cy.visit('/')

    cy.get('input[name="width"]')
      .type('{uparrow}{uparrow}{uparrow}{uparrow}')
      .should('have.value', '6')

    cy.get('input[name="offset"]')
      .type('{uparrow}{uparrow}{uparrow}{uparrow}')
      .should('have.value', '8')

    cy.get('input[name="focusColor"]')
      .trigger('mousedown')
      .trigger('mouseup')
      .tab()
      .tab()
  })
})
