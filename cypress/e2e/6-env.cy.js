it('ENV', () => {
	cy.log(Cypress.env('URL'))
	cy.log(Cypress.env('TESTUSER'))
	cy.log(Cypress.env('TESTPWD'))
})
