import '../../fixtures/users.json';
// import '../../support/functions'

const POSTendPoint = 'https://petstore.swagger.io/v2/user/createWithArray'
const GETUserendPoint = 'https://petstore.swagger.io/v2/user'
const GETPETendPoint = 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
const newUser = [ {
  id: 10,
  username: 'alpha',
  firstName: 'John',
  lastName: 'James',
  email: 'john@email.com',
  password: '12345',
  phone: '12345',
  userStatus: 1,
}];
const userNames = newUser.map((user) => user.username)

export class PetCounter {
  constructor(pets) {
    this.pets = pets;
  }

  sameNamePetCounter() {
    const nameCounts = {};

    this.pets.forEach((pet) => {
      const name = pet.name;

      if (nameCounts[name]) {
        nameCounts[name]++;
      } else {
        nameCounts[name] = 1;
      }
    });

    return nameCounts;
  }
}

describe('API Creating user', () => {
  it('Create user', () => {
    cy.request({
      method: 'POST',
      url: POSTendPoint,
      body: newUser,
    }).then((response) => {
      console.log(response);
      expect(response.status).to.eq(200)
    })
  })
})

describe('GET', () => {
  it('User by Username', () => {
    cy.request(
      'GET',
      `${GETUserendPoint}/${userNames}`
    ).then((response) => {
      console.log(response.body)
    })
  })
})

describe('GET', () => {
  it.only('Pet by status', () => {
    cy.request(
      'GET',
      GETPETendPoint,
    ).then((response) => {
        console.log(response.body)
        const petCounter = new PetCounter(response.body);
        const resultado = petCounter.sameNamePetCounter()

        for(const name in resultado){
          console.log(`Name: ${name}: ${resultado[name]} `)
        }
      })
  })
})
