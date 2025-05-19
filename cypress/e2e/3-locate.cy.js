it('Locate element', () => {
	cy.visit('https://katalon-demo-cura.herokuapp.com/')

	//Get element
	cy.get('#btn-make-appointment').should('contain.text', 'Make Appointment')

	//Get element by text
	cy.contains('Make Appointment').should('exist')

	cy.get('a').eq(0).should('have.class', 'btn btn-dark btn-lg toggle')

	cy.get('#top')
		.find('div')
		.children()
		.eq(0)
		.should('contain.text', 'CURA Healthcare Service')
})
