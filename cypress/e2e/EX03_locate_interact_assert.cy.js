var valid_password = 'ThisIsNotAPassword'
var valid_username = 'John Doe'
var Invalid_password = 'InvalidPassword'
var Invalid_username = 'Test Doe'

describe('Login', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')

		cy.get('#btn-make-appointment').click()
	})
	it('Valid user', () => {
		cy.get('#txt-username').type(valid_username)
		cy.get('#txt-password').type(valid_password)

		cy.get('#btn-login').click()

		cy.url().should('contain', 'appointment')
	})

	it('Invalid password', () => {
		cy.get('#txt-username').type(valid_username)
		cy.get('#txt-password').type(Invalid_password)

		cy.get('#btn-login').click()

		cy.contains(
			'Login failed! Please ensure the username and password are valid.'
		)
	})

	it('Invalid username', () => {
		cy.get('#txt-username').type(Invalid_username)
		cy.get('#txt-password').type(valid_password)

		cy.get('#btn-login').click()

		cy.contains(
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
