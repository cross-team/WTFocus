describe('Focus Style Variables Test', () => {
  it('can edit the variables', () => {
    cy.visit('/')

    cy.get('input[name="reducedMotion"]').uncheck()

    cy.get('input[name="width"]')
      .type('{uparrow}{uparrow}{uparrow}{uparrow}')
      .should('have.value', '6')

    cy.get('input[name="offset"]')
      .type('{uparrow}{uparrow}{uparrow}{uparrow}')
      .should('have.value', '8')

    cy.get('input[name="focusColor"]')
      .invoke('val', '#ff0000')
      .trigger('change')
      .should('have.value', '#ff0000')

    cy.get('input[name="bgColor"]')
      .invoke('val', '#000000')
      .trigger('change')
      .should('have.value', '#000000')

    cy.get('select[name="outline"]')
      .invoke('val', 'dotted')
      .trigger('change')
      .should('have.value', 'dotted')

    cy.get('select[name="motion"]')
      .invoke('val', 'bounce')
      .trigger('change')
      .should('have.value', 'bounce')

    cy.get('select[name="duration"]')
      .invoke('val', '2s')
      .trigger('change')
      .should('have.value', '2s')

    cy.get('select[name="loop"]')
      .invoke('val', '2')
      .trigger('change')
      .should('have.value', '2')

    cy.contains('Apply').click()
  })
})
