describe('Calculation', () => {
	before(() => {
		cy.log('Before')
	})
	beforeEach(() => {
		cy.log('BeforeEach')
	})
	afterEach(() => {
		cy.log('AfterEach')
	})
	it('Plus number', () => {
		let result = 1 + 2
		expect(result).equal(3)
	})
	it('Subtract number', () => {
		let result = 9 - 2
		// ใช้ตอน get element
		cy.wrap(result).should('equal', 7)
	})
	it('Devide number', () => {
		let result = 9 / 3
		assert.equal(result, 3)
	})
})
