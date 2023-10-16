import { newUser } from '../../support/user';
import {
  POSTENDPOINT,
  GETUSERENDPOINT,
} from '../../support/constants';

const userNames = newUser.map((user) => user.username);

describe('API Creating user', () => {
  it('Create user', () => {
    cy.request({
      method: 'POST',
      url: POSTENDPOINT,
      body: newUser,
    }).then((response) => {
      // we show on console that we created the user
      cy.log(response)
      console.log(response);
      expect(response.status).to.eq(200);
    });
  });
});

describe('GET', () => {
  it('User by Username', () => {
    cy.request('GET', `${GETUSERENDPOINT}/${userNames}`)
    .then((response) => {

      // we show on console that we received the user
      console.log(response.body)
      cy.log(response.body)
      expect(response.status).to.eq(200)
    });
  });
});


// I use both cy.log and console.log because it is easier to look all of them on developer console
// and cy.log because you can look for a specific one without others bothering you.