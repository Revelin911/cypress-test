import React from "react";
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.fixture('questions.json').as('questions');
    });
    
    it('should initially render the start button', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

    it('starts quiz when the Start button is clicked', function () {
        mount(<Quiz questions={this.questions} />);
        cy.contains('Start Quiz').click();
        cy.contains(this.questions[0].question).should('be.visible');
    });

    it('gives option to make a selection', function () {
        mount(<Quiz questions={this.questions} />);
        cy.contains('Start Quiz').click();
        cy.get('.option').first().click();
        cy.get('.question').should('not.have.text', this.questions[0].question);
    });

    // it('gives option to make a selection', function () {
    //     mount(<Quiz questions={this.questions} />);
    //     cy.contains('Start Quiz').click();
    //     cy.get('.option').second().click();
    //     cy.get('.question').should('not.have.text', this.questions[0].question);
    // });

    // it('gives option to make a selection', function () {
    //     mount(<Quiz questions={this.questions} />);
    //     cy.contains('Start Quiz').click();
    //     cy.get('.option').third().click();
    //     cy.get('.question').should('not.have.text', this.questions[0].question);
    // });

    it('shows the final score', function () {
        mount(<Quiz questions={this.questions} />);
        cy.contains('Start Quiz').click();
        cy.get('.option').each(($el) => {
            cy.wrap($el).click();
        });

    cy.contains('Your Score:').should('be.visible');
    });
});
