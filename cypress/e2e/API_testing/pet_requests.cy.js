import { PetCounter } from '../../support/classes';
import { GETPETENDPOINT } from '../../support/constants';

describe('GET', () => {
  it('Pet by status', () => {
    cy.request('GET', GETPETENDPOINT).then((response) => {

      // iterate the answer to obtain the id and name
      response.body.forEach(pet => {
        cy.log(`Mascota vendida - ID: ${pet.id}, Nombre: ${[pet.name]}`)
      });

      // save the answer in an object so we can count how many names there are 
      const petCounter = new PetCounter(response.body);
      const resultado = petCounter.sameNamePetCounter();
      
      // iterate the answer to show it on the screen 
      for (const name in resultado) {
        cy.log(`Name: ${name}:${resultado[name]} `);
      }
    });
  });
});
