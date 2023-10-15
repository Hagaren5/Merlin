import { PetCounter } from '../../support/functions';
import { GETPETENDPOINT } from '../../support/constants';

describe('GET', () => {
  it('Pet by status', () => {
    cy.request('GET', GETPETENDPOINT).then((response) => {
      console.log(response.body);
      const petCounter = new PetCounter(response.body);
      const resultado = petCounter.sameNamePetCounter();

      for (const name in resultado) {
        console.log(`Name: ${name}: ${resultado[name]} `);
      }
    });
  });
});
