it('Custom command', () => {
	cy.visit('https://katalon-demo-cura.herokuapp.com/')

	cy.login('John Doe', 'ThisIsNotAPassword')
})
