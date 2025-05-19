const Page = require('./Page')

class LoginPage extends Page {
	static txtUsername = '#txt-username'
	static txtPassword = '#txt-password'
	static btnLogin = '#btn-login'
	static txtAlertMessage = '.lead.text-danger'

	static inputLogin(username, password) {
		cy.get(this.txtUsername).type(username)
		cy.get(this.txtPassword).type(password)
		cy.get(this.btnLogin).click()
	}

	static canDisplayAlert(alerttMsg) {
		cy.get(this.txtAlertMessage).should('contain.text', alerttMsg)
	}
}

module.exports = LoginPage
