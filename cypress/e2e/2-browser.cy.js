describe('Browser command', () => {
	it('Browser', () => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.title().should('equal', 'CURA Healthcare Service')
		cy.url().should('contain', 'https')
		cy.viewport('iphone-7')
		cy.viewport(1900, 600)
	})
})
