import {
  AUTOMATION_TEXT,
  LINK_WIKIPEDIA,
  TITLE_WIKIPEDIA,
} from '../../support/constants';
// import { constants } from '../../support/constants'

describe('Question 2: ', () => {
  it('Search for first automation year', () => {
    cy.visit('https://google.es');
    cy.get('#L2AGLb > .QS5gu').click();
    cy.get('#APjFqb').type(AUTOMATION_TEXT).type('{enter}');
    cy.contains('a', LINK_WIKIPEDIA).click();
    cy.wait(2000);

    cy.origin('https://es.wikipedia.org', () => {
      cy.get('h1#firstHeading').invoke('text').should('eq', 'Automatización');
      cy.title().should('include', 'Automat' /*TITLE_WIKIPEDIA*/);
      cy.contains('p', 'En 1771').should('contain', '1785');
      cy.screenshot('Wikipedia first automation year');
    });
  });
});
