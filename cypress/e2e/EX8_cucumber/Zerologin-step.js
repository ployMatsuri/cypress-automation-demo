const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I fill username with {string}', username => {
	cy.get('#user_login').type(username)
})

When('I fill password with {string}', password => {
	cy.get('#user_password').type(password)
})

When('I click remember me', () => {
	cy.get('#user_remember_me').check()
})

When('I click Sign in', () => {
	cy.get('.btn.btn-primary').click()
})

Then('I should see homepage', () => {
	cy.get('.nav.nav-tabs').should('be.visible')
})

Then('I should see error message', () => {
	cy.get('#login_form > div.alert.alert-error').should(
		'contain.text',
		'Login and/or password are wrong.'
	)
})
