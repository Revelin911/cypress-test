describe('Quiz End-to-End Test', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('starts the quiz when the Start button is clicked', () => {
        cy.contains('Start Quiz').click();
cy.get('.question').should('be.visible');
    });

    it('should go through each question at a time', () => {
        cy.contains('Start Quiz').click();
        cy.get('option').each(($el) => {
            cy.wrap($el).click();
        });
        cy.contains('Your Score:').should('be.visible');
    });

    it('will restart the quiz', () => {
        cy.contains('Start Quiz').click();
        cy.get('option').each(($el) => {
            cy.wrap($el).click();
    });
    cy.contains('Restart Quiz').click();
    cy.contains('Start Quiz').should(be.visisble);
});
});