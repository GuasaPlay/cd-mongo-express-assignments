const { faker } = require('@faker-js/faker')

class Company {
   constructor() {
      this.name = faker.company.companyName()
      this.suffix = faker.company.companySuffix()
      this.catchPhrase = faker.company.catchPhrase()
   }
}

module.exports = Company
