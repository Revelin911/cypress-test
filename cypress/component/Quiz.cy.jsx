import React from "react";
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';
// import questions from '../fixtures/questions.json';

describe('Quiz Component', () => {
    beforeEach(() => {
        // cy.visit('http://localhost:3000');
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getQuestions')
    });
    
    it('should initially render the start button', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

    it('should initially render the start button', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

  it('should answer questions and complete the quiz', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();

    // Verify the quiz completion
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Verify the quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
