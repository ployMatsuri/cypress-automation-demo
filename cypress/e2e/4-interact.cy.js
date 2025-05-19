it('Interacting elements', () => {
	cy.visit('/')

	cy.get('#btn-make-appointment').click()

	cy.get('#txt-username').type('John Doe')
	cy.get('#txt-password').type('ThisIsNotAPassword')

	cy.get('#btn-login').click()

	cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')

	cy.get('#chk_hospotal_readmission').check()

	cy.get('#radio_program_medicare').click()
})
