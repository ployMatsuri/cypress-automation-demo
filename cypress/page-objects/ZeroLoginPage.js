const Page = require('./Page')

class ZeroLoginPage extends Page {
	static btnLogIn = '.btn.btn-primary'
	static txtUsername = '#user_login'
	static txtPwd = '#user_password'
	static checkBox = '#user_remember_me'
	static txtAlertMessage = '#login_form > div.alert.alert-error'

	static btnSignIn() {
		cy.get(this.btnLogIn).click()
	}

	static fillUsername(username) {
		cy.get(this.txtUsername).type(username)
	}

	static fillPassword(password) {
		cy.get(this.txtPwd).type(password)
	}
	static boxCheck() {
		cy.get(this.checkBox).check()
	}

	static txtAlert(alerttMsg) {
		cy.get(this.txtAlertMessage).should('contain.text', alerttMsg)
	}
}

module.exports = ZeroLoginPage
