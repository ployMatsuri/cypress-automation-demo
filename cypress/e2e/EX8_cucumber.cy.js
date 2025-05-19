const ZeroLoginPage = require('../page-objects/ZeroLoginPage')
const ZeroHomePage = require('../page-objects/ZeroHomePage')

describe('Login-step with page obj', () => {
	beforeEach(() => {
		ZeroLoginPage.navigateToUrl('http://zero.webappsecurity.com/login.html')
	})
	it('Login with valid user', () => {
		ZeroLoginPage.fillUsername('username')
		ZeroLoginPage.fillPassword('password')
		ZeroLoginPage.boxCheck()
		ZeroLoginPage.btnSignIn()
		ZeroHomePage.checkHomePage()
	})

	it('Login with invalid user', () => {
		ZeroLoginPage.fillUsername('wrong username')
		ZeroLoginPage.fillPassword('wrong password')
		ZeroLoginPage.boxCheck()
		ZeroLoginPage.btnSignIn()
		ZeroLoginPage.txtAlert('Login and/or password are wrong.')
	})
})
