import React from "react";
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
    it('should initially render the start button', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

    it('starts quiz when the Start button is clicked', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.get('1').should('be.visible');
    });

    it('continues to next question after answering', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.get('2').should('have.text', 'answers');
    });

    it('continues to next question after answering', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.get('3').should('have.text', 'answers');
    });

    it('continues to next question after answering', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.get('4').should('have.text', 'answers');
    });

    it('continues to next question after answering', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.get('5').should('have.text', 'answers');
    });

    it('ends the quiz and shows the final score', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();

        cy.get('option').should('exist').and('have.value', 't').click();
    });

    cy.contains('Your Score').should('be.visible');
});
