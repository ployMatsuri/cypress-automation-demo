const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given('I open login page', () => {
	cy.visit('https://katalon-demo-cura.herokuapp.com')
})

Given('I click make appointment button', () => {
	cy.get('#btn-make-appointment').click()
})

When('I fill username {string}', username => {
	cy.get('#txt-username').type(username)
})

When('I fill password {string}', password => {
	cy.get('#txt-password').type(password)
})

When('I click login button', () => {
	cy.get('#btn-login').click()
})

Then('I can see appointment page', () => {
	cy.url().should('contain', '#appointment')
})
