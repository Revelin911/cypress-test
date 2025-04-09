import React from "react";
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';
import questions from '../fixtures/questions.json';

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

    it('starts quiz and displays first questionr', function () {
        mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');
        cy.contains(questions[0].question).should('be.visible');
    });

    it('answers questions and completes quiz', function () {
        mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');

    questions.forEach(() => {
        cy.get('button').contains(/^1$/).click();
    });

cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your Score:').should('be.visible');
    });
});
