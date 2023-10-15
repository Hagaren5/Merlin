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
      console.log(response);
      expect(response.status).to.eq(200);
    });
  });
});

describe('GET', () => {
  it('User by Username', () => {
    cy.request('GET', `${GETUSERENDPOINT}/${userNames}`).then((response) => {
      console.log(response.body);
    });
  });
});


