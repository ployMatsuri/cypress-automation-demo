describe('Its and API testing', () => {
	it('Get property of previous obj', () => {
		let name = ['Jonh', 'David', 'Mary']
		cy.wrap(name).its(0).should('equal', 'Jonh')
		cy.wrap(name).its('length').should('equal', 3)

		let phoneBook = {
			name: 'chris',
			age: 18,
			isMan: true,
		}
		cy.wrap(phoneBook).its('age').should('equal', 18)
	})

	it('API Testing', () => {
		cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as(
			'getData'
		)

		//Status code
		cy.get('@getData').its('status').should('equal', 200)

		//Body
		cy.get('@getData')
			.its('body')
			.its('title')
			.should(
				'equal',
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
			)
	})

	it('POST API Testing', () => {
		cy.fixture('post.json').then(data => {
			cy.request({
				method: 'POST',
				url: 'https://jsonplaceholder.typicode.com/posts',
				body: data,
			}).as('postData')

			cy.get('@postData').its('status').should('equal', 201)
			cy.get('@postData')
				.its('body')
				.its('title')
				.should('equal', 'hello world')
		})
	})
})
