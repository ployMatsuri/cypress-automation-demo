var valid_password = 'ThisIsNotAPassword'
var valid_username = 'John Doe'
var comment = 'test Verify that can input comment'
describe('Assert web elements', () => {
	beforeEach(() => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')
		cy.get('#btn-make-appointment').click()

		cy.get('#txt-username').type(valid_username)
		cy.get('#txt-password').type(valid_password)

		cy.get('#btn-login').click()

		cy.url().should('contain', 'appointment')
	})

	it('displays "Make Appointment" in h2', () => {
		cy.get('h2').should('contain.text', 'Make Appointment')
	})

	it('select all facility combo boxes', () => {
		cy.get('#combo_facility option').then($options => {
			$options.each((index, $option) => {
				cy.get('#combo_facility').select($option.text)

				cy.get('#combo_facility').should('have.value', $option.value)
			})
		})
	})

	it('select apply for hospital readmission checkbox', () => {
		cy.get('#chk_hospotal_readmission').check()
	})

	it('select health care program radio button', () => {
		//Medicare
		cy.get('#radio_program_medicare').check()
		cy.get('#radio_program_medicare').should('be.checked')

		//Medicaid
		cy.get('#radio_program_medicaid').check()
		cy.get('#radio_program_medicaid').should('be.checked')

		//None
		cy.get('#radio_program_none').check()
		cy.get('#radio_program_none').should('be.checked')
	})

	it('input current date on Visit Date', () => {
		const today = new Date()
		const dd = String(today.getDate()).padStart(2, '0')
		const mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
		const yyyy = today.getFullYear()
		const currentDate = `${dd}/${mm}/${yyyy}`

		// ใส่วันที่ปัจจุบันในช่อง Visit Date
		cy.get('#txt_visit_date').type(currentDate)

		// ตรวจสอบว่าช่อง Visit Date มีวันที่ปัจจุบัน
		cy.get('#txt_visit_date').should('have.value', currentDate)
	})

	it('input comment', () => {
		cy.get('#txt_comment').type(comment)
		cy.get('#txt_comment').should('have.value', comment)
	})

	it('book appointment button is displayed and enabled', () => {
		//displayed
		cy.get('#btn-book-appointment').should('be.visible')

		//enable when not yet fill the information
		cy.get('#btn-book-appointment').click()
		cy.get('#txt_visit_date').should('be.visible')

		//enable when fill the information
		cy.get('#txt_visit_date').type('12/05/2024')
		cy.get('#btn-book-appointment').click()

		cy.get('h2').should('contain.text', 'Appointment Confirmation')
	})
})
