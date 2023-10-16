import {
  AUTOMATION_TEXT,
  LINK_WIKIPEDIA,
  } from '../../support/constants';

describe('Question 2: ', () => {
  it('Search for first automation year', () => {

    // from Google, look for automation and enter on wikipedia
    cy.visit('https://google.es');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('#APjFqb').type(AUTOMATION_TEXT).type('{enter}');
    cy.contains('a', LINK_WIKIPEDIA).click();

    // once we are in Wikipedia, look when was the first automation year
    cy.origin('https://es.wikipedia.org', () => {
      cy.get('h1#firstHeading').invoke('text').should('eq', 'Automatización');
      cy.title().should('include', 'Automat' );
      cy.contains('p', 'En 1771').should('contain', '1785');
      cy.screenshot('Wikipedia first automation year');
    });
  });
});
