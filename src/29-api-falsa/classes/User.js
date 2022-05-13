const { faker } = require('@faker-js/faker')

class User {
   constructor() {
      this.nome = faker.name.findName()
      this.email = faker.internet.email()
      this.phoneNumber = faker.phone.phoneNumber()
   }
}

module.exports = User
