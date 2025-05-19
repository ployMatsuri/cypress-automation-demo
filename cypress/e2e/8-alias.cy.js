describe('Alias command', () => {
	beforeEach(() => {
		cy.fixture('data.json').as('mydata')
	})
	it('Reuse web element', () => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')

		cy.get('#btn-make-appointment').as('InkMakeAppointment')
		cy.get('@InkMakeAppointment').should('exist')
		cy.get('@InkMakeAppointment').click()
	})

	it('Method1 : Reuse value in then', () => {
		cy.get('@InkMakeAppointment')
			.then(elm => {
				let text = elm.text()
				return text
			})
			.as('btnText')

		cy.get('@btnText').then(txt => {
			expect(txt).equal('Make Appointment')
		})
	})

	it('Method2 : Reuse value in then', () => {
		cy.get('@InkMakeAppointment').then(elm => {
			let text = elm.text()
			cy.wrap(text).as('btnText')
		})

		cy.get('@btnText').then(txt => {
			expect(txt).equal('Make Appointment')
		})
	})

	it('Alias for getting test data', function () {
		expect(this.mydata.phon).equal('000')
	})

	it('Alias for getting test data', function () {
		cy.fixture('data.json').then(data => {
			expect(this.mydata.phon).equal('000')
			cy.wrap(data.phon).as('myphone')
		})
	})
})
