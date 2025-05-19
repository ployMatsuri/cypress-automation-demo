const Page = require('./Page')

class ZeroHomePage extends Page {
	static checkHomePage() {
		cy.get('.nav.nav-tabs').should('be.visible')
	}
}

module.exports = ZeroHomePage
