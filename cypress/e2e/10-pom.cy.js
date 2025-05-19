const IndexPage = require('../page-objects/Index')
const LoginPage = require('../page-objects/LoginPage')

describe('Login', () => {
	beforeEach(() => {
		IndexPage.navigateToUrl('https://katalon-demo-cura.herokuapp.com/')
	})
	it('Can display alert message when input wrong username', () => {
		IndexPage.clickBtn()
		LoginPage.inputLogin('John Doe', 'InvalidPwd')
		LoginPage.canDisplayAlert(
			'Login failed! Please ensure the username and password are valid.'
		)
	})
})
