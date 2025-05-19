class Page {
	static navigateToUrl(url) {
		cy.visit(url)
	}

	static canNavigate(url) {
		cy.url().should('contain', url)
	}
}

module.exports = Page
