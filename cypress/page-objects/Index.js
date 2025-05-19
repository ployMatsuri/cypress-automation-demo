const Page = require('./Page')

class IndexPage extends Page {
	static btnMakeAppointment = '#btn-make-appointment'

	static clickBtn() {
		cy.get(this.btnMakeAppointment).click
	}
}

module.exports = IndexPage
