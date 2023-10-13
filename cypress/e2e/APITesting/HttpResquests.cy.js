import '../../fixtures/users.json'

describe('Create User with Http Request' , () => {

    it('Create the user', () => {

        const requestBody = {
            id: 0,
            username: "Oriol",
            firstName: "string",
            lastName: "string",
            email: "string",
            password: "string",
            phone: "string",
            userStatus: 0
        }


        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'special_key', // Add your API key here
              },
            body: requestBody
        }).then((response) => {

            expect(response.body.code).to.eq(201)
            }
        )
    })
})
