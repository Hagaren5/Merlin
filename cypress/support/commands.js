

Cypress.Commands.add('POSTCall', (selector) => {
    cy.request({
        method: 'POST',
        url: 'https://petstore.swagger.io/v2/user/createWithList',
        body: {
            id: 0,
            username: 'Oriol',
            firstName: 'string',
            lastName: 'string',
            email: 'string',
            password: 'string',
            phone: 'string',
            userStatus: 0,
          },
      }).then((response) => {
        expect(response.body.code).to.eq(201);
      });
})