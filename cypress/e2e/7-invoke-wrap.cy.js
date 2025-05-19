describe('Invoke command', () => {
	it('Get webelement propoties', () => {
		cy.visit('https://katalon-demo-cura.herokuapp.com/')

		cy.get('#btn-make-appointment')
			.invoke('attr', 'href')
			.should('contain', 'profile.php#login')
	})

	it('Set webelement propoties', () => {
		cy.visit('https://testautomationpractice.blogspot.com/')

		cy.get('#slider > span').invoke('attr', 'style', 'left:50%;')
	})

	it('Set value', () => {
		cy.visit('https://testautomationpractice.blogspot.com/')

		cy.get('#name').invoke('val', 'play')
	})
})

describe('Wrap command', () => {
	it('Wrap webelement to use cypress command', () => {
		cy.visit('https://testautomationpractice.blogspot.com/')

		// cy.get('#slider > span').then(elm => {
		// 	cy.wrap
		// })
	})
})
