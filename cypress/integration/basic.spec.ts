describe('Basic', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    });

    it('should display the correct title', () => {
        cy.contains('h1', 'todos');
    });
});