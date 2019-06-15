const Faker = require('faker');

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const host = {
    name: Faker.name.firstName(),
    pic: Faker.image.avatar()
  };
  const title = Faker.system.fileName();
  const city = Faker.address.city();
  const numGuests = Faker.random.number();
  const homeType = Faker.commerce.productName();
  const numBedrooms = Faker.random.number();
  const numBeds = Faker.random.number();
  const numBaths = Faker.random.number();
  const description = Faker.lorem.text();
  // add variables to virtual user's context:
  userContext.vars.host = host;
  userContext.vars.title = title;
  userContext.vars.city = city;
  userContext.vars.numGuests = numGuests;
  userContext.vars.homeType = homeType;
  userContext.vars.numBedrooms = numBedrooms;
  userContext.vars.numBeds = numBeds;
  userContext.vars.numBaths = numBaths;
  userContext.vars.description = description;
  // continue with executing the scenario:
  return done();
}

module.exports = {
  generateRandomData
};
